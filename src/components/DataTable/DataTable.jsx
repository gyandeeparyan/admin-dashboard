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
import DataRow from "./DataRow";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Button from "../Button";
import Checkbox from "../Checkbox";

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
    <div className="flex flex-col  md:px-16 py-16 ">
      <SearchBar />

      <div class="flex flex-col overflow-x-auto mostly-customized-scrollbar">
  <div class="sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-x-auto ">
      <table className="rounded-xl min-w-full px-2 my-4  overflow-x-auto">
        <thead>
          <tr className="bg-green-500 rounded-xl">
            <th className="">
              <Checkbox
                checked={selectedRows.length === rowsToDisplay.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-800">
          {rowsToDisplay.map((row) => (
            <DataRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
      <div className="flex">
        <Button className='bg-rose-600  sm:text-sm flex-grow-0 !rounded-full' onClick={handleDeleteSelected}>
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
