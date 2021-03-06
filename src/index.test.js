import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ModernCalculator from "./modern_calculator"

describe("Testing Frontend", () => {

    it("Pressing = returns 0", () => {
        render(
            <ModernCalculator />
        )
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("Display").textContent).toBe("0");
    });

    it("Pressing 1 + 2 = returns 3", () => {
        render(
            <ModernCalculator />
        )
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("Display").textContent).toBe("3");
    });

    it("Pressing 1 and 2 displays 12", () => {
        render(
            <ModernCalculator />
        )
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("2"));
        expect(screen.getByTestId("Display").textContent).toBe("12");
    });

    it("Pressing 2, +, 5 displays 2+5", () => {
        render(
            <ModernCalculator />
        ) 
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("5"));
        expect(screen.getByTestId("Display").textContent).toBe("2+5");
    });

    it("Pressing C resets", () => {
        render(
            <ModernCalculator />
        ) 
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("C"));
        expect(screen.getByTestId("Display").textContent).toBe("0");
    });
});