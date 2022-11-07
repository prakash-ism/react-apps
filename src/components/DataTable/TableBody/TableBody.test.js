import React from "react";
import { screen, render, act } from "@testing-library/react";
import TableBody from "./TableBody";
import userEvent from "@testing-library/user-event";

describe("TableBody component", () => {
    test("renders correctly", async () => {
        const data = [
            {
              "id": "1",
              "name": "Aaron Miles",
              "email": "aaron@mailinator.com",
              "role": "member"
            },
            {
              "id": "2",
              "name": "Aishwarya Naik",
              "email": "aishwarya@mailinator.com",
              "role": "member"
            },
            {
              "id": "3",
              "name": "Arvind Kumar",
              "email": "arvind@mailinator.com",
              "role": "admin"
            }
          ];
    
        const checkedState = [true,false,false];
    
        const handleOnChange = jest.fn();
        const deleteSingle = jest.fn();
    
        render(<TableBody data={data} checkedState={checkedState} handleOnChange={handleOnChange} deleteSingle={deleteSingle} />);
    
        const tableRowElement = screen.getAllByRole('row');
        expect(tableRowElement.length).toBe(3);

        const inputElement = screen.getAllByRole('checkbox', { name : /Click to select this checkbox/i });

        expect(inputElement[0]).toBeChecked();


        act(() => {
          userEvent.click(inputElement[0]);
          userEvent.click(inputElement[1]);
          userEvent.click(inputElement[2]);
        });

        expect(handleOnChange).toHaveBeenCalledTimes(3);

    })
})