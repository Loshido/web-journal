import data from "~/../data/articles.json";
import Lien from "~/components/Lien";
import { useParams } from "react-router";
import PouceUp from "~/components/icons/pouce1.tsx";
import PouceDown from "~/components/icons/pouce2.tsx";
import "~/components/articles/article.css";
import Fleche from "~/components/icons/fleche.tsx";
import Header from "~/components/header";
import Footer from "~/components/footer";


export default () => {
  const { article: id } = useParams();
  const article = data.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="text-center mt-20 text-3xl text-red-600">
        Ahhhh Article introuvable ! Comment on fait ?
      </div>
    );
  }
  

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <div className="mb-10">
          
          <h1 className="text-4xl font-bold flex flex-col items-center mb-2">{article.titre}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-lg text-gray-600 mb-10 mt-2">
            <p>{article.description}</p>
            <p className="text-sm mt-2 sm:mt-0">
              {/* article.date est un nombre (un timestamp), pas un objet Date. En JS, les nombres = pas de méthode .toLocaleDateString(), ce qui provoque une erreur */}
              {new Date(article.date).toLocaleDateString()}
            </p>
          </div>
      


          {/* en react on peut conditionner une div : condi && <comoponent/> */}
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

          <p className="text-sm flex gap-2 text-black">
            Source :<div className="text-blue-400">ISEN-Web</div>
          </p>
        </div>

        <div className="flex justify-around items-center">
          <Lien to="/articles">
            <div className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-2xl w-fit transition-colors">
              <Fleche />
              Revenir aux articles
            </div>
          </Lien>

          <div className="flex items-center bg-gray-100 rounded-3xl w-fit p-1 overflow-hidden">
            <div className="flex items-center">
              <button className="flex items-center px-3 py-2 gap-2  rounded-l-3xl hover:bg-gray-200 " >
                <PouceUp  className="w-5 h-5  fill-blue-400 stroke-1 stroke-gray-200" />
                <p className="text-sm font-medium text-blue-400">
                  {article.reaction.likes}
                </p>
              </button>

              <div className="w-px h-5 bg-gray-300 mx-1"></div>

              <button className="flex items-center px-3 py-2 gap-2 rounded-r-3xl hover:bg-gray-200 " >
                <PouceDown className="w-5 h-5 fill-red-600 stroke-1 stroke-gray-200" />
                <p className="text-sm font-medium text-red-600 ">
                  {article.reaction.dislikes}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


