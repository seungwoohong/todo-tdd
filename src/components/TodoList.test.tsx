import { TodoList } from "./TodoList";
import { render, screen } from "@testing-library/react";

describe("TodoList", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  it("renders TDD 정복하기", () => {
    expect(screen.getByRole("list")).toHaveTextContent("TDD 정복하기");
  });

  it("length of todo-list is 1", () => {
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
