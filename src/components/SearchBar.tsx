import React, { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  } 

  return (
<div className="w-full">
  <form
    onSubmit={submitHandler}
    className="flex bg-gray-800 p-5 gap-4 rounded-xl shadow-md"
  >
    <input
      required
      className="flex-1 border border-gray-600 px-4 py-2 text-lg rounded outline-none bg-gray-900"
      type="text"
      placeholder="Search anything..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button
      type="submit"
      className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded text-white font-medium active:scale-95 transition"
    >
      Search
    </button>
  </form>
</div>
  );
};

export default SearchBar;
