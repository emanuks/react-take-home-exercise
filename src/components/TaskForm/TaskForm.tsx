import React, { FormEvent, useState } from "react";

import { TaskFormProps } from "./TaskForm.types";

export const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (newTask.trim() === "") return;

    onSubmit(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        placeholder="New task..."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        className="flex-grow border rounded-l py-2 px-3"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r hover:opacity-90">
        Add
      </button>
    </form>
  );
};
