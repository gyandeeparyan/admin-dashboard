"use client";
import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./dataAPI";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    rows: [],
    filteredRows: [],
    currentPage: 1,
    rowsPerPage: 10,
    searchTerm: "",
    selectedRows: [],
    status: "idle",
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredRows = state.rows.filter(
        (row) =>
          row.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          row.email.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          row.role.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      state.currentPage = 1;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSelectedRows(state, action) {
      state.selectedRows = action.payload;
    },
    toggleRowSelection(state, action) {
      if (state.selectedRows.includes(action.payload)) {
        state.selectedRows = state.selectedRows.filter(
          (id) => id !== action.payload
        );
      } else {
        state.selectedRows.push(action.payload);
      }
    },
    editRow(state, action) {
      const index = state.rows.findIndex((row) => row.id === action.payload.id);
      state.rows[index] = action.payload;
      state.filteredRows[index] = action.payload;
    },
    deleteRow(state, action) {
      state.rows = state.rows.filter((row) => row.id !== action.payload);
      state.filteredRows = state.filteredRows.filter(
        (row) => row.id !== action.payload
      );
    },
    deleteSelectedRows(state) {
      state.rows = state.rows.filter(
        (row) => !state.selectedRows.includes(row.id)
      );
      state.filteredRows = state.filteredRows.filter(
        (row) => !state.selectedRows.includes(row.id)
      );
      state.selectedRows = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.rows = action.payload;
        state.filteredRows = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  setSearchTerm,
  setCurrentPage,
  setSelectedRows,
  toggleRowSelection,
  editRow,
  deleteRow,
  deleteSelectedRows,
} = dataSlice.actions;

export const selectFilteredRows = (state) => state.data.filteredRows;
export const selectCurrentPage = (state) => state.data.currentPage;
export const selectRowsPerPage = (state) => state.data.rowsPerPage;
export const selectSelectedRows = (state) => state.data.selectedRows;

export default dataSlice.reducer;
