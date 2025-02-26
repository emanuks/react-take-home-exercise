import React, { useEffect, useState } from "react";

import { Filter } from "../Filter";
import { TaskItem } from "../TaskItem";

import { TaskForm } from "../TaskForm";
import { ITask } from "./TaskManager.types";

export const TaskManager = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const statuses = ["all", "completed", "pending"];

  useEffect(() => {
    const localTasks = localStorage.getItem("tasks");
    const parsedTasks = localTasks ? JSON.parse(localTasks) : [];

    setTasks(parsedTasks);
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleAddTask = (title: string) => {
    const newTaskObj = {
      id: tasks.length + 1,
      title,
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);

    const serializedTasks = JSON.stringify([...tasks, newTaskObj]);

    localStorage.setItem("tasks", serializedTasks);
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);

    const serializedTasks = JSON.stringify([...newTasks]);

    localStorage.setItem("tasks", serializedTasks);
  };

  const toggleTaskCompletion = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(newTasks);

    const serializedTasks = JSON.stringify([...newTasks]);

    localStorage.setItem("tasks", serializedTasks);
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow">
      <TaskForm onSubmit={handleAddTask} />

      <Filter statuses={statuses} onFilter={setFilter} currentStatus={filter} />

      <ul>
        {filteredTasks.length === 0 && <p className="text-center text-gray-500 py-3">No tasks found</p>}

        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} onToggle={toggleTaskCompletion} />
        ))}
      </ul>
    </div>
  );
};
