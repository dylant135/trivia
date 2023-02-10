import React from "react";

export default function Start(props) {
    return (
        <div className="start">
            <h3>You will be asked 10 multiple choice question. Click Start when ready to begin.</h3>
            <button className="startbtn" onClick={() => props.setMode('quiz')}>Start</button>
        </div>
    )
}