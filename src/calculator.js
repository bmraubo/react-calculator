import React from "react";
import Calculate from "./calculate";

const calculate = new Calculate();
const operations = {
    "X": calculate.multiply,
    "+": calculate.add,
    "-": calculate.subtract,
    "/": calculate.divide,
};

function NumberButton(props) {
    return (
        <button>
            {props.value}
        </button>
    );
}

function OperationsButton(props) {
    return (
        <button>
            {props.value}
        </button>
    );
}

function EqualsButton(props) {
    return (
        <button>
            [props.value]
        </button>
    );
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNumber: 0,
            operation: null,
            secondNumber: 0,
            result: 0,
        };
    }

    renderNumberButton(value) {
        return (
            <NumberButton value={value} />
        );
    }

    renderOperationsButton(value) {
        return (
            <OperationsButton value={value} />
        );
    }

    renderEqualsButton(value) {
        return (
            <OperationsButton value={value} />
        );
    }

    render() {
        return (
            <div>
                <h3 data-testid="Display">
                    {this.state.result}
                </h3>
                <div>
                    {this.renderOperationsButton("C")}
                    {this.renderOperationsButton("/")}
                    {this.renderOperationsButton("X")}
                    {this.renderOperationsButton("-")}
                </div>
                <div>
                    {this.renderNumberButton(7)}
                    {this.renderNumberButton(8)}
                    {this.renderNumberButton(9)}
                    {this.renderOperationsButton("+")}
                </div>
                <div>
                    {this.renderNumberButton(4)}
                    {this.renderNumberButton(5)}
                    {this.renderNumberButton(6)}
                    {this.renderEqualsButton("=")}
                </div>
                <div>
                    {this.renderNumberButton(1)}
                    {this.renderNumberButton(2)}
                    {this.renderNumberButton(3)}
                    {this.renderNumberButton(0)}                  
                </div>
            </div>
        );
    }
}

export {Calculator};