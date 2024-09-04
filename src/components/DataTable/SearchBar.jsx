"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/data/dataSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type='text'
      className='rounded-full !px-4 bg-zinc-800'
      placeholder='Search by name, email, or role'
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
