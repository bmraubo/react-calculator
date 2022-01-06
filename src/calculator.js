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
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function OperationsButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function EqualsButton(props) {
    return (
        <button onClick={props.onClick}>
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
            <NumberButton value={value} onClick={() => this.handleNumberButtonClick(value)}/>
        );
    }

    renderOperationsButton(value) {
        return (
            <OperationsButton value={value} />
        );
    }

    renderEqualsButton(value) {
        return (
            <EqualsButton value={value} onClick={() => this.handleEqualButtonClick()}/>
        );
    }

    handleNumberButtonClick(value) {
        console.log('num click')
        if (this.state.currentDisplay === "0") {
            this.setState({
                firstNumber: this.state.firstNumber,
                secondNumber: this.state.secondNumber,
                operation: this.state.operation,
                result: this.state.result,
                currentDisplay: value,
            })
        } else {
            this.setState({
                firstNumber: this.state.firstNumber,
                secondNumber: this.state.secondNumber,
                operation: this.state.operation,
                result: this.state.result,
                currentDisplay: this.state.currentDisplay + value,
            })
        }
    }

    handleEqualButtonClick(props) {
        console.log("equals")
        this.setState({
            firstNumber: this.firstNumber,
            secondNumber: parseInt(this.state.currentDisplay),
            operation: this.operation,
            result: calculate.calculate(this.state.firstNumber, this.state.secondNumber, this.state.operation),
            currentDisplay: this.state.result.toString(),
        })
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