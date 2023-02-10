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
        let theScore = 0
        for(let i = 0; i < choices.length; i++) {
            if(choices[i].isCorrect) {
                theScore++
            }
        }
        props.setScore(theScore)
        props.setMode('end')
    }

    return (
        <div className="quiz">
            {theQuestions}
            <button className="submitbtn" onClick={submit}>Submit</button>
        </div>
    )
}