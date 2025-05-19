import data from "~/../data/articles.json";
import Lien from "~/components/Lien";
import { useParams } from "react-router";
import PouceUp from "~/components/icons/pouce1";
import PouceDown from "~/components/icons/pouce2";
import "~/components/articles/article.css"


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
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <div className="mb-10">
        <div className="shadow-md flex flex-col rounded-2xl mb-10 items-center p-4">
          <h1 className="text-3xl font-bold mb-4">{article.titre}</h1>
          <div className="flex items-center gap-5 flex-row text-xl mb-4">
            <p>{article.description}</p>

             {/* article.date est un nombre (un timestamp), pas un objet Date. En JS, les nombres = pas de méthode .toLocaleDateString(), ce qui provoque une erreur */}
            <p>{new Date(article.date).toLocaleDateString()}</p>
          </div>
        </div>

        <img
          src={article.image}
          alt={"image impossible à charger"}
          className="w-full rounded-lg shadow-md mb-6"
        />

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

          <div className="flex items-center bg-gray-100 rounded-3xl w-fit p-1 overflow-hidden">
      <div className="flex items-center">
        <button 
          
          className="flex items-center px-3 py-2 gap-2  rounded-l-3xl hover:bg-gray-200 "
        >
          <PouceUp 
            className="w-5 h-5  fill-blue-400 stroke-1 stroke-gray-200"
          />
          <p className="text-sm font-medium text-blue-400">{article.reaction.likes}</p>
        </button>
        
        <div className="w-px h-5 bg-gray-300 mx-1"></div>
        
        <button 
         
          className="flex items-center px-3 py-2 gap-2 rounded-r-3xl hover:bg-gray-200 "
        >
          <PouceDown 
            className="w-5 h-5 fill-red-600 stroke-1 stroke-gray-200"
          />
          <p className="text-sm font-medium text-red-600 ">{article.reaction.dislikes}</p>
        </button>
      </div>
    </div>


      </div>
      
    </div>
  );
};
