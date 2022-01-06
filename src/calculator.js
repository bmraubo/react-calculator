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
            {props.value}
        </button>
    );
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDisplay: "0",
            firstNumber: 0,
            operation: calculate.add,
            secondNumber: 0,
            result: null,
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
            <EqualsButton value={value} />
        );
    }

    handleEqualButtonClick(props) {
        this.state.secondNumber = parseInt(this.state.currentDisplay);
        this.state.result = calculate.calculate(this.state.firstNumber, this.state.secondNumber, this.state.operation);
        this.state.currentDisplay = this.state.result;
    }

    render() {
        return (
            <div>
                <h3 data-testid="Display">
                    {this.state.currentDisplay}
                </h3>
                <div>
                    {this.renderOperationsButton("C")}
                    {this.renderOperationsButton("/")}
                    {this.renderOperationsButton("X")}
                    {this.renderOperationsButton("-")}
                </div>
                <div>
                    {this.renderNumberButton("7")}
                    {this.renderNumberButton("8")}
                    {this.renderNumberButton("9")}
                    {this.renderOperationsButton("+")}
                </div>
                <div>
                    {this.renderNumberButton("4")}
                    {this.renderNumberButton("5")}
                    {this.renderNumberButton("6")}
                    {this.renderEqualsButton("=")}
                </div>
                <div>
                    {this.renderNumberButton("1")}
                    {this.renderNumberButton("2")}
                    {this.renderNumberButton("3")}
                    {this.renderNumberButton("0")}                  
                </div>
            </div>
        );
    }
}

export {Calculator};