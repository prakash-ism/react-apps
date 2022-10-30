import React from "react";
import { screen, render } from "@testing-library/react";
import TableBody from "./TableBody";

describe("TableBody component", () => {
    test("renders correctly", () => {
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
    
          const checkedState = [false,false,false];
    
          const handleOnChange = jest.fn();
          const deleteSingle = jest.fn();
    
        render(<TableBody data={data} checkedState={checkedState} handleOnChange={handleOnChange} deleteSingle={deleteSingle} />);
    
        const tableRowElement = screen.getAllByRole('row');
        expect(tableRowElement.length).toBe(3);
    })
})