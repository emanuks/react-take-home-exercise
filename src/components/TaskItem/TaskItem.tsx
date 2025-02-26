import React from "react";

import { TaskItemProps } from "./TaskItem.types";

export const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <button
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer hover:opacity-75 ${!task.completed ? "text-black" : "line-through text-green-500"}`}
      >
        {task.title}
      </button>

      <button onClick={() => onDelete(task.id)} className="text-white bg-red-500 px-4 py-1 rounded hover:opacity-90">
        Delete
      </button>
    </li>
  );
};
