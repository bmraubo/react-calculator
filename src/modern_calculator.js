import React from "react";
import { useState } from "react";

function Display({value}) {
    return <h3>{value}</h3>
}

function Button({value}) {
    return <button>{value}</button>
}

export default function ModernCalculator() {
    const [display, setDisplay] = useState("0")

    return (
        <div>
            <div>
                <Display value={display}/>
            </div>
            <div>
                <Button value="C"></Button>
                <Button value="/"></Button>
                <Button value="X"></Button>
                <Button value="-"></Button>
            </div>
            <div>
                <Button value="7"></Button>
                <Button value="8"></Button>
                <Button value="9"></Button>
                <Button value="+"></Button>
            </div>
            <div>
                <Button value="4"></Button>
                <Button value="5"></Button>
                <Button value="6"></Button>
                <Button value="="></Button>
            </div>
            <div>
                <Button value="1"></Button>
                <Button value="2"></Button>
                <Button value="3"></Button>
                <Button value="0"></Button>
            </div>
        </div>
        
        
    )
}