import { useState } from "react";
import Lien from "~/components/Lien";
import Header from "~/components/header";
import Footer from "~/components/footer";
import data from "~/../data/articles.json";

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
        <h1 className="font-semibold my-10 text-3xl">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-funnel-plus-icon lucide-funnel-plus"
              >
                <path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" />
                <path d="M16 6h6" />
                <path d="M19 3v6" />
              </svg>
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
          <div className="w-6xl rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Lien
                key={article.id}
                to={`/articles/${article.id}`}
                className="w-full"
              >
                <div className="bg-blue-600 col-span-1 rounded-2xl h-60 overflow-hidden grid grid-rows-3">
                  <div className="row-span-2"></div>
                  <div className="bg-gray-200 rounded-b-2xl text-xl flex items-center p-5">
                    {article.titre}
                  </div>
                </div>
              </Lien>
            ))}
          </div>
        </div>

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
}
