import React from "react";
import { render,screen } from "@testing-library/react"
import Header from "./Header"

describe("Header",() => {
    test("renders image correctly", () => {
        render(<Header />);
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
    });

    test("renders header correctly", () => {
        render(<Header />);
        const headerElement = screen.getByRole('heading');
        expect(headerElement).toBeInTheDocument();
    });

    test("Image has correct src for image", () => {
        render(<Header />);
        const imageElement = screen.getByRole('img');

        expect(imageElement.getAttribute('alt')).toEqual("HeaderImage");

        expect(imageElement.getAttribute('src')).toEqual('https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png');
    });

    test("Header has correct value based on headerTitle", () => {
        const headerTitle = "Temp Header Title";
        render(<Header  headerTitle={headerTitle} />);
        const headerElement = screen.getByRole('heading', {
            level: 1
        });

        expect(headerElement.innerHTML).toEqual(headerTitle);
    })
})