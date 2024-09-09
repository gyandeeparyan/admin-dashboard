"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  selectFilteredRows,
  selectCurrentPage,
  selectRowsPerPage,
} from "../../features/data/dataSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const filteredRows = useSelector(selectFilteredRows);
  const currentPage = useSelector(selectCurrentPage);
  const rowsPerPage = useSelector(selectRowsPerPage);

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="">
      <button
        className='px-6 py-2 rounded-lg items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold  shadow-md transition duration-300 ease-in-out'
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}>
        First
      </button>
      <button
        className='px-6 py-2 rounded-lg  items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold  shadow-md transition duration-300 ease-in-out'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`w-10 h-10 items-center justify-center rounded-full shadow-md transition duration-300 ease-in-out ${
            currentPage === i + 1
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
              : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white'
          }`}
          onClick={() => handlePageChange(i + 1)}
          disabled={currentPage === i + 1}>
          {i + 1}
        </button>
      ))}
      <button
        className='px-6 py-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold  shadow-md transition duration-300 ease-in-out'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>
      <button
        className='px-6 py-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold  shadow-md transition duration-300 ease-in-out'
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
