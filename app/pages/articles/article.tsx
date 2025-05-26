
import { useSubmit, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { listArticles, updateArticle } from "~/lib/articles.ts"
import { Route } from "./+types";

import Lien from "~/components/Lien";
import PouceUp from "~/components/icons/pouce1.tsx";
import PouceDown from "~/components/icons/pouce2.tsx";
import Fleche from "~/components/icons/fleche.tsx";
import Header from "~/components/header";
import Footer from "~/components/footer";


import "~/components/articles/article.css";

// Partie serveur (façon de parler) ---
export async function action({ request, params }: Route.ActionArgs) {
  const donnees = await request.json();
  const idArticle = params.article;
  if (!idArticle) return;

  const article = listArticles().find((a) => a.id === idArticle);
  if (!article) return;

  const { likes, dislikes } = article.reaction;

  let nouveau = { likes, dislikes };

  switch (donnees.type) {
    case "like":
      nouveau.likes += 1;
      break;
    case "dislike":
      nouveau.dislikes += 1;
      break;
    case "cancel":
      if (donnees.cancelType === "like") nouveau.likes -= 1;
      if (donnees.cancelType === "dislike") nouveau.dislikes -= 1;
      break;
    case "switch":
      if (donnees.from === "like" && donnees.to === "dislike") {
        nouveau.likes -= 1;
        nouveau.dislikes += 1;
      }
      if (donnees.from === "dislike" && donnees.to === "like") {
        nouveau.dislikes -= 1;
        nouveau.likes += 1;
      }
      break;
  }

  updateArticle(idArticle, { reaction: nouveau });
  return null;
}

export async function loader({ params }: Route.LoaderArgs) {
  const idArticle = params.article;
  if (!idArticle) return null;
  const articles = listArticles();
  const article = articles.find((a) => a.id === idArticle);
  return article ?? null;
}


//  Partie client ---

//recupération des articles
export default function Page({ params }: Route.ComponentProps) {
  const submit = useSubmit();
  const article = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const idArticle = params.article;

  const [reactionUtilisateur, setReactionUtilisateur] = useState<
    "like" | "dislike" | null
  >(null);
  const [reactions, setReactions] = useState(
    article?.reaction ?? { likes: 0, dislikes: 0 }
  );

  // reaction depuis localStorage qu'on initialise
  useEffect(() => {
    const saved = localStorage.getItem("reaction-" + idArticle);
    if (saved === "like" || saved === "dislike") {
      setReactionUtilisateur(saved);
    }
  }, [idArticle]);



  //ici on puisse gerer les reactions
  const gererReaction = async (type: "like" | "dislike") => {
    if (!idArticle) return;

   

    // réaction canceled si on reclique sur bouton
    if (reactionUtilisateur === type) {
    setReactions((r) => ({
      ...r,
      [type === "like" ? "likes" : "dislikes"]: r[type === "like" ? "likes" : "dislikes"] - 1,
    }));
    setReactionUtilisateur(null);
    localStorage.removeItem("reaction-" + idArticle);
    await submit({ type: "cancel", cancelType: type }, { method: "post", encType: "application/json" });
    return;
  }

    // réaction doit switch si on change de bouton
  if (reactionUtilisateur) {
    setReactions((r) => ({
      ...r,
      [type === "like" ? "likes" : "dislikes"]: r[type === "like" ? "likes" : "dislikes"] + 1,
      [type === "like" ? "dislikes" : "likes"]: r[type === "like" ? "dislikes" : "likes"] - 1,
    }));
    setReactionUtilisateur(type);
    localStorage.setItem("reaction-" + idArticle, type);
    await submit({ type: "switch", from: reactionUtilisateur, to: type }, { method: "post", encType: "application/json" });
    return;
  }

  setReactions((r) => ({
    ...r,
    [type === "like" ? "likes" : "dislikes"]: r[type === "like" ? "likes" : "dislikes"] + 1,
  }));
  setReactionUtilisateur(type);
  localStorage.setItem("reaction-" + idArticle, type);
  await submit({ type }, { method: "post", encType: "application/json" });
};

  if (!article) {
    return (
      <div className="text-center mt-20 text-3xl text-red-600">
        Ahhhh Article introuvable ! Comment on fait ?
      </div>
    );
  }




  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-center mb-2">
            {article.titre}
          </h1>

          <div className="flex flex-col sm:flex-row sm:justify-between text-lg text-gray-600 mb-6">
            <p className="line-clamp-3 max-w-5/6">{article.description}</p>
            <p className="text-sm mt-2 sm:mt-0">
              {new Date(article.date).toLocaleDateString()}
            </p>
          </div>

          {article.image && (
            <img
              src={article.image}
              alt="Aucune image"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md mb-6"
            />
          )}
          <div
            className="mb-4 article"
            dangerouslySetInnerHTML={{ __html: article.contenu }}
          ></div>

          <p className="text-sm text-black">
            Source : <span className="text-blue-400">ISEN-Web</span>
          </p>
        </div>

        <div className="flex justify-around items-center">
          <Lien
            to="/articles"
            className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-2xl transition-colors"
          >
            <Fleche />
            Revenir aux articles
          </Lien>

          <div className="flex items-center bg-gray-100 rounded-3xl p-1">
            <button
              onClick={() => gererReaction("like")}
              className={`flex items-center px-3 py-2 gap-2 rounded-l-3xl hover:bg-gray-200 cursor-pointer ${reactionUtilisateur === "like" ? "ring-2 ring-blue-600" : ""
                }`}
            >
              <PouceUp
                className={`w-5 h-5 fill-blue-400 stroke-2 ${reactionUtilisateur === "like"
                  ? "stroke-blue-600"
                  : "stroke-gray-200"
                  }`}
              />
              <p className="text-sm font-medium text-blue-400">
                {reactions.likes}
              </p>
            </button>

            <div className="w-px h-5 bg-gray-300 mx-1"></div>

            <button
              onClick={() => gererReaction("dislike")}
              className={`flex items-center px-3 py-2 gap-2 rounded-r-3xl hover:bg-gray-200 cursor-pointer ${reactionUtilisateur === "dislike" ? "ring-2 ring-red-600" : ""
                }`}
            >
              <PouceDown
                className={`w-5 h-5 fill-red-500 stroke-2    ${reactionUtilisateur === "dislike"
                  ? "stroke-red-600"
                  : "stroke-gray-200"
                  }`}
              />
              <p className="text-sm font-medium text-red-500">
                {reactions.dislikes}
              </p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
