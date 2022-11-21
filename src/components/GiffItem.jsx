export const GiffItem = ({ title, url }) => {
  return (
    <>
      <div
        className="group relative rounded-3xl  space-y-6 overflow-hidden"
      >
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={url}
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-white-700 text-white">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
