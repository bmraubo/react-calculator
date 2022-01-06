import React from "react";
import { useState } from "react";
import Calculate from "./calculate";

const calculate = new Calculate();

export default function ModernCalculator() {
    const [display, setDisplay] = useState("0")
    const [firstNumber, setFirstNumber] = useState("0")
    const [secondNumber, setSecondNumber] = useState("0")
    const [operation, setOperation] = useState(calculate.add)

    return (
        <div>
            <div>
                <Display value={display}/>
            </div>
            <div>
                <Keypad />
            </div>
        </div>
    )
}

function Display({value}) {
    return <h3 data-testid="Display">{value}</h3>
}

function Keypad() {
    return (
        <div>
            <div>
                <OperationsButton value="C"></OperationsButton>
                <OperationsButton value="/"></OperationsButton>
                <OperationsButton value="X"></OperationsButton>
                <OperationsButton value="-"></OperationsButton>
            </div>
            <div>
                <NumberButton value="7"></NumberButton>
                <NumberButton value="8"></NumberButton>
                <NumberButton value="9"></NumberButton>
                <OperationsButton value="+"></OperationsButton>
            </div>
            <div>
                <NumberButton value="4"></NumberButton>
                <NumberButton value="5"></NumberButton>
                <NumberButton value="6"></NumberButton>
                <EqualsButton value="="></EqualsButton>
            </div>
            <div>
                <NumberButton value="1"></NumberButton>
                <NumberButton value="2"></NumberButton>
                <NumberButton value="3"></NumberButton>
                <NumberButton value="0"></NumberButton>
            </div>
        </div>
    )
}

function NumberButton({value}) {
    return <button>{value}</button>
}

function OperationsButton({value}) {
    return <button>{value}</button>
}

function EqualsButton({value}) {
    return <button>{value}</button>
}
