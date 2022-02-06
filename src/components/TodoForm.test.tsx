import { TodoForm } from "./TodoForm";
import { render, fireEvent, screen } from "@testing-library/react";

/**
 * @see https://stackoverflow.com/questions/61482418/react-testing-library-screen-vs-render-queries
 */
describe("TodoForm", () => {
  beforeEach(() => {
    render(<TodoForm />);
  });

  it("empty input on first render", () => {
    const input = screen.getByLabelText("todo-input");

    expect(input.nodeValue).toBe("");
  });

  it("enter input", () => {
    const input = screen.getByLabelText("todo-input");

    fireEvent.change(input, { target: { value: "TDD 정복하기" } });
    expect(input.nodeValue).toBe("TDD 정복하기");
  });
});
