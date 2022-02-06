import React from "react";

const tasks = [
  {
    id: 1,
    content: "TDD 정복하기",
  },
];

export const TodoList = () => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  );
};
