import React from "react"
import ReactDOM from "react-dom"
import JobsFilter from "./JobsFilter"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<JobsFilter />, div)
    ReactDOM.unmountComponentAtNode(div)
})