import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Calculator} from "./calculator"
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe("Testing Frontend", () => {
    let container = null;
    beforeEach(()=> {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    it("Pressing = returns 0", () => {
        act(() => {
            render(
                <Calculator />,
                container
            )
        })
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("Display").textContent).toBe("0");
    });
});