import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import SearchBox from "./SearchBox";

describe("SearchBox component", () => {
    test("renders input element correctly", () => {
        render(<SearchBox />);

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    test("calls function correctly", () => {
        const handleInputChange = jest.fn();

        render(<SearchBox handleInputChange={handleInputChange}/>);

        const testValue = 'test';

        const inputElement = screen.getByRole('textbox');

        fireEvent.change(inputElement, { target : { value :  testValue} });

        expect(inputElement.value).toBe(testValue);
    })
})