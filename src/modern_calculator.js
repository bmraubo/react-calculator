import React from "react";
import { useState } from "react";
import Calculate from "./calculate";

const calculate = new Calculate();

export default function ModernCalculator() {
    const [display, setDisplay] = useState("0")
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [operation, setOperation] = useState(calculate.add)

    const operations = {
        "X": calculate.multiply,
        "+": calculate.add,
        "-": calculate.subtract,
        "/": calculate.divide,
    };

    function Display({value}) {
        return <h3 data-testid="Display">{value}</h3>
    }

    function NumberButton({value}) {
        return <button onClick={() => {
                    if (display === "0") {
                        setDisplay(value)
                    } else {
                        setDisplay(display + value)
                    }
                }}>
                    {value}
                </button>
    }

    function OperationsButton({value}) {
        return <button onClick={() => {
            // lock in firstNumber
            setFirstNumber(parseInt(display))
            // lock in operation
            setOperation(operations[value])
            // display operation space operation sign space
            setDisplay(display + " " + value + " ")
        }}>{value}</button>
    }    

    function EqualsButton({value}) {
        return <button onClick={() => {
        }}>{value}</button>
    }

    return (
        <div>
            <div>
                <Display value={display}/>
            </div>
            <div>
                <Keypad NumberButton={NumberButton} EqualsButton={EqualsButton} OperationsButton={OperationsButton}/>
            </div>
        </div>
    )
}



function Keypad({NumberButton, EqualsButton, OperationsButton}) {
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





