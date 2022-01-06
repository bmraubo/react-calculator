import React from "react";
import ReactDOM from "react-dom";
import Calculate from "./calculate";

const calculate = new Calculate();
const operations = {
    "X": calculate.multiply,
    "+": calculate.add,
    "-": calculate.subtract,
    "/": calculate.divide,
    "=": calculate.calculate,
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

class Calculator extends React.Component {

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

    render() {
        return (
            <div>
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
                    {this.renderOperationsButton("=")}
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

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);