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
    <div>
      <button
        className='px-6 py-2 rounded-lg'
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}>
        First
      </button>
      <button
        className='px-6 py-2 rounded-lg'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className="rounded-full active:bg-blue-600 focus:bg-blue-600  px-4 py-2"
          onClick={() => handlePageChange(i + 1)}
          disabled={currentPage === i + 1}>
          {i + 1}
        </button>
      ))}
      <button
        className='px-6 py-2 rounded-lg'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>
      <button
        className='px-6 py-2 rounded-lg'
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
