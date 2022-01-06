import React from "react";
import ReactDOM from "react-dom";
import Calculate from "./calculate";

const calculate = new Calculate();
const operations = {
    "X": calculate.multiply,
    "+": calculate.add,
    "-": calculate.subtract,
    "/": calculate.divide,
};

function Button(props) {
    return (
        <button>
            {props.value}
        </button>
    )
}

class Calculator extends React.Component {

    renderButton(value) {
        return (
            <Button value={value} />
        )
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderButton("C")}
                    {this.renderButton("/")}
                    {this.renderButton("X")}
                    {this.renderButton("-")}
                </div>
                <div>
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton("+")}
                </div>
                <div>
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton("=")}
                </div>
                <div>
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton(0)}                  
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);