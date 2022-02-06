import { render, fireEvent, screen } from '@testing-library/react'

describe("Todo Item", () => {
  describe("TODO writing", () => {
    test("content prop이 들어오면 typograhy 영역에 content가 렌더 된다.", () => {});
    test("todo item이 작성 되면 Checkbox가 렌더 된다.", () => {});
  });

  describe(('Todo completing') => {
    test('item이 클릭 되면 Checkbox가 check 된다.', () => {})
    test('item이 클릭 되면 text가 gray color로 변경 된다.', () => {})
  });
});
