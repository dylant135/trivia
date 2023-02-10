import React from "react";

export default function Start(props) {
    return (
        <div className="start">
            <h4>You will be asked 10 multiple choice question. Click Start when ready to begin.</h4>
            <button className="startbtn" onClick={() => props.setMode('quiz')}>Start</button>
        </div>
    )
}