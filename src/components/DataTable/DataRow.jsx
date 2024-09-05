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
import { Delete, Pencil,BadgeX , Save, Trash } from "lucide-react";

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
    <tr className={isSelected ? "bg-zinc-700 " : " "}>
      <td className="px-10  ">
        <Checkbox checked={isSelected} onChange={handleToggleSelection} />
      </td>
      <td className="px-10  ">
        {isEditing ? (
          <input
            className="bg-zinc-700 border-[1px] rounded-xl"
            type='text'
            name='name'
            value={editedRow.name}
            onChange={handleEditChange}
          />
        ) : (
          row.name
        )}
      </td >
      <td className="px-10  ">
        {isEditing ? (
          <input
          className="bg-zinc-700 border-[1px] rounded-xl"
            type='text'
            name='email'
            value={editedRow.email}
            onChange={handleEditChange}
          />
        ) : (
          row.email
        )}
      </td>
      <td className="px-10  ">
        {isEditing ? (
          <input
          className="bg-zinc-700 border-[1px] rounded-xl"
            type='text'
            name='role'
            value={editedRow.role}
            onChange={handleEditChange}
          />
        ) : (
          row.role
        )}
      </td>
      <td className="px-10 flex ">
        {isEditing ? (
          <>
            <Button className='bg-green-500 flex gap-2 items-center justify-center' onClick={handleSave}>
            <span>
              <Save />
            </span>{" "}
            Save
            </Button>
            <Button className='bg-red-500  flex gap-2 items-center justify-center' onClick={() => setIsEditing(false)}> <span>
              <BadgeX />
            </span>{" "}
            Cancel</Button>
          </>
        ) : (
          <>
            <Button className='bg-blue-500  flex gap-2 items-center justify-center' onClick={() => setIsEditing(true)}>
            <span>
              <Pencil />
            </span>{" "}
            Edit
            </Button>
            <Button className='bg-red-500  flex gap-2 items-center justify-center' onClick={handleDelete}>
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
