import React from "react";

export default function End(props) {
    return (
        <div className="end">
            <h1>End</h1>
            <h2>You scored {props.score} out of 10</h2>
        </div>
    )
}