import React, { useState } from "react";

import { Filter } from "../Filter";
import { TaskItem } from "../TaskItem";

import { ITask } from "./TaskManager.types";

export const TaskManager = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean the house", completed: true },
  ]);
  const [filter, setFilter] = useState<string>("all");
  const [newTask, setNewTask] = useState<string>("");
  const statuses = ["all", "completed", "pending"];

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (newTask!.trim() === "") return;

    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const toggleTaskCompletion = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow">
      <form onSubmit={handleAddTask} className="mb-4 flex">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border rounded-l py-2 px-3"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r hover:opacity-90">
          Add
        </button>
      </form>

      <Filter statuses={statuses} onFilter={setFilter} currentStatus={filter} />

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} onToggle={toggleTaskCompletion} />
        ))}
      </ul>
    </div>
  );
};
