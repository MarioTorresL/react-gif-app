import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiffApp = () => {
  const [categories, setCategories] = useState(["Red Bull"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="min-h-full">
        <header className="shadow bg-gray-800">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-50">
              Search Your Giff
            </h1>
            <h5 className="text-1xl font-bold tracking-tight text-neutral-50 text-gray-500">
              by Mario Torres (React Course)
            </h5>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
              <GifGrid key={category} category={category} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
