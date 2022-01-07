import { useState } from "react";
import Calculate from "./calculate";

const calculate = new Calculate();

export default function ModernCalculator() {
    const [display, setDisplay] = useState("0")
    const [operation, setOperation] = useState("+")
    

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
            setOperation(value)
            setDisplay(display+value)
        }}>{value}</button>
    }
    
    function EqualsButton({value}) {
        return <button onClick={() => {
            var numbers = readDisplay()
            setDisplay(display)
            var result = calculate.calculate(numbers[0], numbers[1], operations[operation])
            setDisplay(result)
        }}>{value}</button>
    }

    function ClearButton({value}) {
        return <button onClick={() => {
            setOperation("+")
            setDisplay("0")
        }}>{value}</button>
    }

    function readDisplay() {
        let splitDisplay = display.split(operation)
        if (splitDisplay.length < 2) {
            return [parseInt(splitDisplay[0]), 0]
        } else {
            return [parseInt(splitDisplay[0]), parseInt(splitDisplay[1])]
        }
    }

    return (
        <div>
            <div>
                <Display value={display}/>
            </div>
            <div>
                <Keypad NumberButton={NumberButton} EqualsButton={EqualsButton} OperationsButton={OperationsButton} ClearButton={ClearButton}/>
            </div>
        </div>
    )
}



function Keypad({NumberButton, EqualsButton, OperationsButton, ClearButton}) {
    return (
        <div>
            <div>
                <ClearButton value="C"></ClearButton>
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





