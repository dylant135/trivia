import React from "react";

export default function Start(props) {
    return (
        <div className="start">
            <h1>Start</h1>
            <button className="startbtn" onClick={() => props.setMode('quiz')}>Start</button>
        </div>
    )
}