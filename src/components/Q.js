import React from "react";

export default function Q(props) {
    let answers = [
        {
            question: props.correct,
            isSelected: false,
            isCorrect: true
        },
        {
            question: props.incorrects[0],
            isSelected: false,
            isCorrect: false
        },
        {
            question: props.incorrects[1],
            isSelected: false,
            isCorrect: false
        },
        {
            question: props.incorrects[2],
            isSelected: false,
            isCorrect: false
        }
    ]
    answers.sort(() => Math.random() - 0.5)

    const [theQ, setTheQ] = React.useState(answers)

    function select(event) {
        for(let i = 0; i < 4; i++) {
            if(theQ[i].isSelected) {
                setTheQ(prevState => {
                    return {
                        ...prevState,
                        [theQ[i].isSelected]: false
                    }
                })
            }
        }
        const text = event.target.textContent
        const t = theQ.filter(a => a.question === text)
        setTheQ(prevState => {
            return {
                ...prevState,
                [t[0].isSelected]: true
            }
        })
        console.log(theQ)
    }
    return (
        <div className="q">
            <h2>{props.question}</h2>
            <h3 style={{
                backgroundColor: theQ[0].isSelected && 'red'
              }}
            onClick={select}>{theQ[0].question}</h3>
            <h3 style={{
                backgroundColor: theQ[1].isSelected && 'red'
              }}
            onClick={select}>{theQ[1].question}</h3>
            <h3 style={{
                backgroundColor: theQ[2].isSelected && 'red'
              }}
            onClick={select}>{theQ[2].question}</h3>
            <h3 style={{
                backgroundColor: theQ[3].isSelected && 'red'
              }}
            onClick={select}>{theQ[3].question}</h3>
            
        </div>
    )
}