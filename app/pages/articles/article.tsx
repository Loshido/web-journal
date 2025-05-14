import data from "~/../data/articles.json";
import Lien from "~/components/Lien";
import { useParams } from "react-router";
import Header from "~/components/header/index";

export default () => {
  const { article: id } = useParams();
  const article = data.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="text-center mt-20 text-3xl text-red-600">
        Ahhhh Article introuvable !! Comment on fait ?
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <div className="mb-10">
          <div className="shadow-md flex flex-col rounded-2xl mb-10 items-center p-4">
            <h1 className="text-3xl font-bold mb-4">{article.titre}</h1>
            <div className="flex items-center gap-5 flex-row text-xl mb-4">
              <p>{article.description}</p>
              <p>{new Date(article.date).toLocaleDateString()}</p>
            </div>
          </div>

          {/* <img
            src={article.image }
            alt={`Illustration pour ${article.titre}`}
            className="w-full rounded-lg shadow-md mb-6"
          /> */}

          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: article.contenu }}
          ></p>

          <p className="text-sm flex gap-2 text-black">
            Source :<div className="text-blue-400">ISEN-Web</div>
          </p>
        </div>

        <Lien to="/articles">
          <div className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-2xl w-fit transition-colors">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-400"
              fill="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                className="text-white"
                fill="currentColor"
              />
              <path
                d="M17,11H11V9.86a1,1,0,0,0-1.5-.69L6.38,11.31a.82.82,0,0,0,0,1.38L9.5,14.83a1,1,0,0,0,1.5-.69V13h6a1,1,0,0,0,0-2Z"
                fill="currentColor"
              />
            </svg>
            Revenir aux articles
          </div>
        </Lien>
      </div>

    </div>
  );
};
