import { render } from "@testing-library/react";
import Child from "../components/Child";



test("check the props",()=>{
    const {getByTestId} = render(<Child count={500}/>)
    const countPropElement = getByTestId("props-count")

    expect(countPropElement.textContent).toBe("500")
})