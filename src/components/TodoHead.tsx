import React from "react";

export function TodoHead() {
  const now = new Date();
  const formattedDateString = `${now.getFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일`;

  return (
    <header>
      <h1>{formattedDateString}</h1>
    </header>
  );
}
