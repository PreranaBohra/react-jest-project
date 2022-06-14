import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import JestDemo from "./jestDemo";

describe("Button Click tests", () => {
  test("Onclick alert should be display", () => {
    window.alert = jest.fn();
    const { getByTestId } = render(<JestDemo />);
    const btn1 = getByTestId("btn");
    fireEvent.click(btn1);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});


