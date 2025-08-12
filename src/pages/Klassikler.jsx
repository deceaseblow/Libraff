import React, { useEffect, useState, useContext } from "react";
import { getCategories } from "../service/BookService";
import { BookContext } from "../comp/BookContext";
import Book from "../comp/Book";

function KlassiklerPage() {
  const { books } = useContext(BookContext);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getCategories()
      .then((data) => {
        console.log("Categories loaded:", data);
        setCategories(data);
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
      });
  }, []);

  const handleClick = (name) => {
    setSelected(name);
  };

  const filteredBooks = selected
    ? books.filter(
      (book) =>
        book.category === selected || book.altCateg === selected
    )
    : books;

  return (

    <div className="container mx-auto px-20 mb-4">
      <div className="flex min-h-screen">
        <div className="w-[280px] p-4 border-r border-gray-200 bg-gray-100">
          <h2 className="text-lg font-semibold mb-4">Kateqoriyalar</h2>
          <ul className="space-y-3">
            {categories.map((cat, i) => (
              <li key={i}>
                <p className="font-bold text-red-800 mb-1">{cat.ad}</p>
                <ul className="ml-3 space-y-1">
                  {cat["alt-kateqoriyalar"]?.map((alt, j) => {
                    if (typeof alt === "string") {
                      return (
                        <li key={j}>
                          <button
                            onClick={() => handleClick(alt)}
                            className={`text-sm hover:text-red-600 ${selected === alt ? "text-red-600 font-semibold" : "text-gray-700"
                              }`}
                          >
                            {alt}
                          </button>
                        </li>
                      );
                    } else if (typeof alt === "object") {
                      return (
                        <li key={j}>
                          <p className="text-sm font-medium text-gray-600">{alt.ad}</p>
                          <ul className="ml-2 space-y-1">
                            {alt["alt-alt-kateqoriyalar"]?.map((sub, k) => {
                              const name = typeof sub === "string" ? sub : sub.ad;
                              return (
                                <li key={k}>
                                  <button
                                    onClick={() => handleClick(name)}
                                    className={`text-sm hover:text-red-600 ${selected === name ? "text-red-600 font-semibold" : "text-gray-700"
                                      }`}
                                  >
                                    {name}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    } else return null;
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Grid */}
        <div className="flex-1 p-6">
          {selected && (
            <h2 className="mb-4 text-gray-700">
              Seçilmiş kateqoriya: <span className="text-red-600">{selected}</span>
            </h2>
          )}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredBooks.map((book) => (
                <Book key={book.id} data={book} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-20 text-center">Kitab tapılmadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default KlassiklerPage;
