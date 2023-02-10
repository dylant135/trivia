import React from "react";

export default function End(props) {
    const correct = props.questions.map(a => {
        return <h4>{a.correct_answer}</h4>
    })
    return (
        <div className="end">
            <h2 className="theScore">You scored {props.score} out of 10</h2>
            <h2>Correct Answers:</h2>
            {correct}
        </div>
    )
}