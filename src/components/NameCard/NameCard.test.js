import React from 'react';
import { render,screen } from "@testing-library/react";
import NameCard from "./NameCard";

describe("NameCard component", () => {
    test("renders correctly", () => {
        render(<NameCard />);

        const anchorElement = screen.getByRole('link');
        expect(anchorElement).toBeInTheDocument();
    });

    test("link has correct url", () => {
        const nameCheapUrl = `https://www.namecheap.com/domains/registration/results/?domain=`;
        const suggestedName = 'temp';

        render(<NameCard suggestedName={suggestedName}/>);

        const anchorElement = screen.getByRole('link');
        expect(anchorElement.getAttribute('href')).toEqual(`${nameCheapUrl}${suggestedName}`);
    });

    test("renders div element correctly", () => {
        render(<NameCard />);

        const divElement = screen.getByTestId('test-div');
        expect(divElement).toBeInTheDocument();
    });

    test("renders p element correctly", () => {
        const suggestedName = 'temp';
        render(<NameCard suggestedName={suggestedName}/>);

        const paraElement = screen.getByText((content) => content.startsWith(suggestedName));
        expect(paraElement).toBeInTheDocument();
    })
})