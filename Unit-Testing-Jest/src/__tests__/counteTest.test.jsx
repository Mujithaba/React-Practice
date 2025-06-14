import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Counter from "../components/Counter";

test("Check increasing by 1",()=>{
    const {getByText} = render(<Counter/>)
    const getCounterText = getByText("Count is : 0")
    const getButtonElementByText = getByText("Click")

    fireEvent.click(getButtonElementByText);

    expect(getCounterText.textContent).toBe("Count is : 1")
    fireEvent.click(getButtonElementByText);

    expect(getCounterText.textContent).toBe("Count is : 2")
})