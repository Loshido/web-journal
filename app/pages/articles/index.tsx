import Lien from "~/components/Lien";
import { useParams } from "react-router";
import Header from "~/components/header";
import Footer from "~/components/footer";

export default () => {
  const params = useParams();
   return (
  <div>
    <Header />

    <div className="flex flex-col items-center w-screen mb-10 mt-5">
      <h1>/articles</h1>
      <h1 className="font-bold ">
        Retrouvez tous les articles sur cette même page 📄
      </h1>
      <div className="w-full p-5 flex mt-4 items-center justify-center">
        <div className="w-6xl rounded-2xl grid grid-cols-3 gap-11 grid-rows-3">
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              {params.article}
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 2
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 3
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 4
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 5
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 6
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 7
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2"></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 8
            </div>
          </div>
          <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
            <div className="row-span-2 "></div>
            <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">
              Titre 9
            </div>
          </div>
        </div>
      </div>

      <Lien
        className="bg-black"
        to={`/articles/` + Math.floor(Math.random() * 9999999999).toString(36)}
      >
        aller à un article random
      </Lien>
      <Lien to="/">
        <div className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-2xl w-fit transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="flex-shrink-0"
            fill="currentColor"
          >
            <path d="M12 2A1 1 0 0 0 11.29 2.3L1.2 11.1a.5.5 0 0 0-.2.4.5.5 0 0 0 .5.5H4v8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6h4v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8h2.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.2-.4L12.71 2.3A1 1 0 0 0 12 2z" />
          </svg>
          Aller à la page d'accueil
        </div>
      </Lien>
    </div>

    <Footer />
  </div>
  );
};



   