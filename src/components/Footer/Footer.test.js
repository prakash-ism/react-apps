import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
    test("renders correctly", () => {
        render(<Footer />);

        const linkElement = screen.getByRole('link');
        expect(linkElement.getAttribute('href')).toBe("https://github.com/prakash-ism/react-apps");
    });

    test("renders correct text for link", () => {
        render(<Footer />);

        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveTextContent(/Check out more react apps/);
    })
})