import React from "react";
import logo from "../../assets/logo.png";
import { render,screen } from '@testing-library/react';
import Nav from "./Nav";

describe("Nav component", () => {
    test("renders correctly", () => {
        render(<Nav />);

        const imageElement = screen.getByRole('img');
        expect(imageElement.getAttribute('src')).toBe(logo);
        expect(imageElement.getAttribute('alt')).toBe("logo");
    });

    test("renders paragraph correctly", () => {
        render(<Nav />);

        const paraElement = screen.getByText(/FlashType/);
        expect(paraElement).toBeInTheDocument();
    })
})
