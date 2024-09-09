"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredRows,
  selectCurrentPage,
  selectRowsPerPage,
  setSelectedRows,
  deleteSelectedRows,
} from "../../features/data/dataSlice";
import DataRow from "./DataRow/DataRow";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { BadgeMinus,  } from "lucide-react";

const DataTable = () => {
  const dispatch = useDispatch();
  const filteredRows = useSelector(selectFilteredRows);
  const currentPage = useSelector(selectCurrentPage);
  const rowsPerPage = useSelector(selectRowsPerPage);
  const selectedRows = useSelector((state) => state.data.selectedRows);

  const handleSelectAll = (e) => {
    const isSelected = e.target.checked;
    const rowsOnCurrentPage = filteredRows.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
    const ids = isSelected ? rowsOnCurrentPage.map((row) => row.id) : [];
    dispatch(setSelectedRows(ids));
  };

  const handleDeleteSelected = () => {
    dispatch(deleteSelectedRows());
  };

  const rowsToDisplay = filteredRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className='flex flex-col  md:px-8 py-16 '>
      <SearchBar />

      <div class='flex flex-col overflow-x-auto mostly-customized-scrollbar'>
        <div class='sm:-mx-6 lg:-mx-8'>
          <div class='inline-block min-w-full py-2 sm:px-6 lg:px-9'>
            <div class='overflow-x-auto '>
              <table className='rounded-xl w-full px-2 my-4  overflow-x-auto'>
                <thead>
                  <tr className='bg-violet-600 px-10 py-8 rounded-t-xl'>
                    <th className='px-10'>
                      <Checkbox
                        checked={selectedRows.length === rowsToDisplay.length}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className='px-10 py-4'>Name</th>
                    <th className='px-10 py-4'>Email</th>
                    <th className='px-10 py-4'>Role</th>
                    <th className='px-10 py-4'> Actions</th>
                  </tr>
                </thead>
                <tbody className='bg-zinc-800'>
                  {rowsToDisplay.map((row) => (
                    <DataRow key={row.id} row={row} />
                  ))}
                </tbody>
              </table>
              <div className='flex items-center my-10  justify-center'>
                <Button
                  className='flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'
                  onClick={handleDeleteSelected}>
                  <BadgeMinus />
                  Delete Selected
                </Button>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
