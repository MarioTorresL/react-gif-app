import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiffItem } from "./GiffItem";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl mt-5">
        {category}
      </h2>
      {/* if corto */}
      {
        isLoading && (<div className="w-16 h-16 border-4 border-gray-400 border-double rounded-full animate-spin [border-top-color:transparent] mt-5"></div>)
      }
      <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {gifs.map((gif) => (
          <GiffItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
