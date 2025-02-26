import React, { useState } from "react";

import { ConfirmationModal } from "../ConfirmationModal";
import { TaskItemProps } from "./TaskItem.types";

export const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(task.id);
    setOpen(false);
  };

  return (
    <li className="flex items-center justify-between border-b py-2">
      <button
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer hover:opacity-75 ${!task.completed ? "text-black" : "line-through text-green-500"}`}
      >
        {task.title}
      </button>

      <button onClick={handleDelete} className="text-white bg-red-500 px-4 py-1 rounded hover:opacity-90">
        Delete
      </button>

      <ConfirmationModal open={open} onOpen={setOpen} onDelete={handleConfirmDelete} />
    </li>
  );
};
