import React from "react";

export default function Q(props) {
    let answers = [
        {
            answer: props.correct,
            isSelected: false,
            isCorrect: true
        },
        {
            answer: props.incorrects[0],
            isSelected: false,
            isCorrect: false
        },
        {
            answer: props.incorrects[1],
            isSelected: false,
            isCorrect: false
        },
        {
            answer: props.incorrects[2],
            isSelected: false,
            isCorrect: false
        }
    ]
    answers.sort(() => Math.random() - 0.5)

    const [theQ, setTheQ] = React.useState(answers)

    function select(event) {

        const makeFalse = theQ.map(it => {
            if(it.isSelected) {
                return {...it, isSelected: false}
            } else {
                return it
            }
        })

        const text = event.target.textContent
        const t = theQ.filter(a => a.answer === text)
        const newArr = makeFalse.map(it => {
            if(it === t[0]) {
                return {...it, isSelected: true}
            } else {
                return it
            }
        })
        setTheQ(newArr)
        console.log(t)
    }
    return (
        <div className="q">
            <h2>{props.question}</h2>
            <h3 style={{
                backgroundColor: theQ[0].isSelected && 'red'
              }}
            onClick={select}>{theQ[0].answer}</h3>
            <h3 style={{
                backgroundColor: theQ[1].isSelected && 'red'
              }}
            onClick={select}>{theQ[1].answer}</h3>
            <h3 style={{
                backgroundColor: theQ[2].isSelected && 'red'
              }}
            onClick={select}>{theQ[2].answer}</h3>
            <h3 style={{
                backgroundColor: theQ[3].isSelected && 'red'
              }}
            onClick={select}>{theQ[3].answer}</h3>
            
        </div>
    )
}