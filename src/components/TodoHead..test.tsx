import { TodoHead } from "./TodoHead";
import { render, screen } from "@testing-library/react";

describe("TodoHead", () => {
  it("render today date", () => {
    render(<TodoHead />);

    const now = new Date();
    const formattedDateString = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    expect(screen.getByRole("heading")).toHaveTextContent(
      `${formattedDateString}`
    );
  });
});
