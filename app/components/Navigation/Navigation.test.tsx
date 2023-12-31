import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"

import Navigation from "~/components/Navigation"

test("renders", () => {
    render(
        <MemoryRouter>
            <Navigation />
        </MemoryRouter>,
    )

    expect(screen.getByText("Home"))
    expect(screen.getByText("About"))
})
