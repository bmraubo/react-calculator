import React from "react";
import { useState } from "react";
import Calculate from "./calculate";

const calculate = new Calculate();



export default function ModernCalculator() {
    const [display, setDisplay] = useState("0")
    const [firstNumber, setFirstNumber] = useState("0")
    const [secondNumber, setSecondNumber] = useState("0")
    const [operation, setOperation] = useState(calculate.add)

    function Display({value}) {
        return <h3 data-testid="Display">{value}</h3>
    }
    
    function NumberButton({value}) {
        return <button onClick={handleNumberButtonClick(value)}>{value}</button>
    }
    
    function OperationsButton({value}) {
        return <button>{value}</button>
    }
    
    function EqualsButton({value}) {
        return <button>{value}</button>
    }
    
    function handleEqualButtonClick() {
        // set second number
        // execute operation
        // update display
    }
    
    function handleNumberButtonClick({value}) {
        // add button value to display buffer
        if ({display} === "0") {
            setDisplay({value})
        } else {
            setDisplay({display} + {value})
        }
    }

    return (
        <div>
            <div>
                <Display value={display}/>
            </div>
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
                <NumberButton value="5"></NumberButton>a
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

module.exports = ModernCalculator;