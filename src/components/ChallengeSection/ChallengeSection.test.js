import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeSection from "./ChallengeSection";

describe("ChallengeSection component", () => {
    test("renders correctly", () => {
        render(<ChallengeSection />);

        const headerElement = screen.getByRole("heading", { level : 1 });
        expect(headerElement).toBeInTheDocument();
    })
})
