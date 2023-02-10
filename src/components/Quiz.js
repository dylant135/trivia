import React from "react";
import Q from "./Q";

export default function Quiz(props) {
    const [choices, setChoices] = React.useState([])

    let count = 0
    const theQuestions = props.questions.map(x => {
        count++
        return <Q
            key={count}
            id={count}
            question={x.question}
            correct={x.correct_answer}
            incorrects={x.incorrect_answers}
            setQuestions={props.setQuestions}
            choices={choices}
            setChoices={setChoices}
        />
    })

    function submit() {
        console.log(choices)
    }

    return (
        <div className="quiz">
            <h1>Quiz</h1>
            {theQuestions}
            <button onClick={submit}>Submit</button>
        </div>
    )
}