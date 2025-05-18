import { useState } from "react";
import Lien from "~/components/Lien";
import Header from "~/components/header";
import Footer from "~/components/footer";
import data from "~/../data/articles.json";
import Filtres from "~/components/icons/filtre.tsx";

type OptionDeTri =
  | "A-Z"
  | "Z-A"
  | "recent"
  | "ancien"
  | "plus likes"
  | "moins likes";

const fonctionsTri: Record<OptionDeTri, (a: any, b: any) => number> = {
  "A-Z": (a, b) => a.titre.localeCompare(b.titre),
  "Z-A": (a, b) => b.titre.localeCompare(a.titre),

  recent: (a, b) => b.date - a.date,
  ancien: (a, b) => a.date - b.date,

  "plus likes": (a, b) => b.reaction.likes - a.reaction.likes,
  "moins likes": (a, b) => a.reaction.likes - b.reaction.likes,
};

export default function Articles() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<OptionDeTri>("A-Z");

  const filteredArticles = data
    .filter((article) =>
      article.titre.toLowerCase().includes(search.toLowerCase())
    )
    .sort(fonctionsTri[sortBy]);

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center w-screen mb-10 mt-5">
        <h1 className="h-20 w-full flex items-center justify-center text-center font-semibold text-xl p-5 mt-6 mb-10 md:text-3xl">
          Retrouvez tous les articles sur cette même page
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-6 gap-4 px-4">
          <input
            type="text"
            placeholder="Rechercher par titre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-md"
          />

          <div className="flex items-center border rounded-md overflow-hidden">
            <button className="flex items-center px-4 py-2 bg-white">
              <Filtres />
              <span className="ml-2">Trier par</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as OptionDeTri)}
              className="p-2 bg-white border-l"
            >
              <option value="A-Z">A à Z</option>
              <option value="Z-A">Z à A</option>
              <option value="recent">Les plus récents</option>
              <option value="ancien">Les plus anciens</option>
              <option value="plus likes">Les plus populaires</option>
              <option value="moins likes">Les moins populaires</option>
            </select>
          </div>
        </div>

        <div className="w-full p-5 flex mt-4 items-center justify-center">
          <div className="w-6xl rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <Lien
                key={article.id}
                to={`/articles/${article.id}`}
                className="w-full "
              >
                <div className="col-span-1 rounded-2xl h-80 overflow-hidden grid grid-rows-3 shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="row-span-2 overflow-hidden">
                    <img
                      src={article.image || "/Bureau.jpeg"}
                      alt="Aucune image"
                      className="rounded-t-2xl h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-b-2xl text-xl flex items-center p-5">
                    {article.titre}
                  </div>
                </div>
              </Lien>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
