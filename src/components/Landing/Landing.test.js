import React from 'react';
import { screen,render } from "@testing-library/react";
import Landing from './Landing';
import flash from "../../assets/flash.png";

describe("Landing Component", () => {
    test("renders header correctly", () => {
        render(<Landing />);

        const headerElement = screen.getByRole('heading', { level : 1});
        expect(headerElement).toBeInTheDocument();
    });

    test("image has correct source", () => {
        render(<Landing />);

        const imageElement = screen.getByRole("img");
        expect(imageElement.getAttribute('src')).toBe(flash);
    });

    test("image has correct alt text", () => {
        render(<Landing />);

        const imageElement = screen.getByRole("img");
        expect(imageElement.getAttribute('alt')).toBe("hero");
    });
})