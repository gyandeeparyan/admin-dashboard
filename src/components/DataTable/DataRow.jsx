"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editRow,
  deleteRow,
  selectSelectedRows,
  toggleRowSelection,
} from "../../features/data/dataSlice";
import Button from "../Button";
import Checkbox from "../Checkbox";

const DataRow = ({ row }) => {
  const dispatch = useDispatch();
  const selectedRows = useSelector(selectSelectedRows);
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

  return (
    <tr className={isSelected ? "bg-zinc-700 overflow-x-auto" : " overflow-x-auto"}>
      <td>
        <Checkbox checked={isSelected} onChange={handleToggleSelection} />
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='name'
            value={editedRow.name}
            onChange={handleEditChange}
          />
        ) : (
          row.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='email'
            value={editedRow.email}
            onChange={handleEditChange}
          />
        ) : (
          row.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='role'
            value={editedRow.role}
            onChange={handleEditChange}
          />
        ) : (
          row.role
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <Button className='bg-green-500 ' onClick={handleSave}>
              Save
            </Button>
            <Button className='bg-red-500' onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Button className='bg-blue-500' onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button className='bg-red-500' onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};

export default DataRow;
