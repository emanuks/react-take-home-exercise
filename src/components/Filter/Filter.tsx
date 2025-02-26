import React from "react";

import { FilterProps } from "./Filter.types";

export const Filter = ({ statuses, onFilter, currentStatus }: FilterProps) => {
  return (
    <div className="flex justify-around mb-4 gap-3">
      {statuses.map((status) => (
        <button
          onClick={() => onFilter(status)}
          key={status}
          className={`text-gray-700 capitalize flex-1 rounded py-2 hover:opacity-90 ${
            currentStatus === status ? "font-bold bg-gray-300" : "border-gray-300 border"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};
