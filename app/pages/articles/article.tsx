import { useParams } from "react-router";
import Lien from "~/components/Lien";

export default () => {
  const params = useParams();

  return (
    <div className="p-5">
      <p>/articles/{params.article}</p>
      <p>On affiche l'article {params.article}</p>
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
  );
};
