import React from "react";
import Q from "./Q";

export default function Quiz(props) {
    const theQuestions = props.questions.map(x => {
        return <Q
            key={x.correct_answer}
            question={x.question}
            correct={x.correct_answer}
            incorrects={x.incorrect_answers}
            setQuestions={props.setQuestions}
        />
    })

    return (
        <div className="quiz">
            <h1>Quiz</h1>
            {theQuestions}
        </div>
    )
}