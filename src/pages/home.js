import React, { useEffect, useState } from "react";
import {
  getRandomQuote,
  getRandomQuoteByAnime,
} from "../services/quoteServices";
import QouteCard from "../components/quoteCard";
import Navbar from "../components/navbar";

const HomePage = () => {
  const [quote, setQuote] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const res = await getRandomQuote();
    if (res && res.data.length > 0) {
      setQuote(res.data);
    }
  };

  const searchQuote = async () => {
    const param = search.toLowerCase();
    const res = await getRandomQuoteByAnime(param);
    if (res.status === 200) {
      if (res && res.data.length > 0) {
        setQuote(res.data);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="container mx-auto"
        style={{ marginTop: "8rem", marginBottom: "6rem" }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Quote By Anime Title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  searchQuote();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {quote.length > 0 && quote.map((item) => <QouteCard data={item} />)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
