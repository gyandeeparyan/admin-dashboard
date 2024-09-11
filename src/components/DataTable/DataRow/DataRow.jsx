"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editRow,
  deleteRow,
  selectSelectedRows,
  toggleRowSelection,
} from "../../../features/data/dataSlice";
import Button from "../../Button";
import Checkbox from "@/components/Checkbox";
import {  Pencil, BadgeX, Save, Trash } from "lucide-react";
import Loader from "./Loader"
const DataRow = ({ row }) => {
  const dispatch = useDispatch();
  const selectedRows = useSelector(selectSelectedRows);
  const status = useSelector(state => state.data.status);
  const isSelected = selectedRows.includes(row.id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRow, setEditedRow] = useState({ ...row });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedRow({
      ...editedRow,
      [name]: value,
    });
  };

  const handleSave = () => {
    dispatch(editRow(editedRow));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteRow(row.id));
  };

  const handleToggleSelection = () => {
    dispatch(toggleRowSelection(row.id));
  };


  if (status === 'loading') {
    return (
      <table className="w-full">
        <tbody>
          {[...Array(10)].map((_, index) => (
            <Loader key={index} />
          ))}
        </tbody>
      </table>
    );
  }
  if (status === 'failed') {
    return <div>Error loading data. Please try again.</div>;
  }

  return (
    <tr className={isSelected ? "bg-zinc-700 " : " "}>
      <td className='px-10  '>
        <Checkbox checked={isSelected} onChange={handleToggleSelection} />
      </td>
      <td className='px-10  '>
        {isEditing ? (
          <input
            className='bg-zinc-700 border-[1px] rounded-xl'
            type='text'
            name='name'
            value={editedRow.name}
            onChange={handleEditChange}
          />
        ) : (
          row.name
        )}
      </td>
      <td className='px-10  '>
        {isEditing ? (
          <input
            className='bg-zinc-700 border-[1px] rounded-xl'
            type='text'
            name='email'
            value={editedRow.email}
            onChange={handleEditChange}
          />
        ) : (
          row.email
        )}
      </td>
      <td className='px-10  '>
        {isEditing ? (
          <select
            className='bg-zinc-700 border-[1px] rounded-xl px-4 py-2'
            name='role'
            value={editedRow.role}
            onChange={handleEditChange}>
            <option value='admin'>Admin</option>
            <option value='member'>Member</option>
          </select>
        ) : (
          row.role
        )}
      </td>
      <td className='px-10 flex '>
        {isEditing ? (
          <>
            <Button
              className='flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'
              onClick={handleSave}>
              <span>
                <Save />
              </span>{" "}
              Save
            </Button>
            <Button
              className='flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'
              onClick={() => setIsEditing(false)}>
              {" "}
              <span>
                <BadgeX />
              </span>{" "}
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              className='flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'
              onClick={() => setIsEditing(true)}>
              <span>
                <Pencil />
              </span>{" "}
              Edit
            </Button>
            <Button
              className='flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'
              onClick={handleDelete}>
              <span>
                <Trash />
              </span>{" "}
              Delete
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};

export default DataRow;
