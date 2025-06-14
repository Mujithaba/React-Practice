import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HelloWorld from "../components/HelloWorld";

test("should be check the hello world", () => {
  const { getByText } = render(<HelloWorld />);
  const checkTextElement = getByText("Hello World");
  expect(checkTextElement).toBeInTheDocument();
});


test("check through the id",()=>{
    const {getByTestId} = render(<HelloWorld/>)
    const checkIdTest = getByTestId("data")
    expect(checkIdTest.textContent).toBe("Mohamed Mujithaba")
})