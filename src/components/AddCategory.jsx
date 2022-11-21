import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const inputClean = inputValue.trim();

    if (inputClean.length <= 1) return;
    onNewCategory(inputClean);
    setInputValue("");
  };

  return (
    <>
      <form className="space-y-8" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search gif Here"
          onChange={(event) => onInputChange(event)}
          className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-white-100 transition"
        />
      </form>
    </>
  );
};

