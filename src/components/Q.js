import React from "react";

export default function Q(props) {
    let answers = [
        {
            id: props.id,
            answer: decodeURIComponent(props.correct),
            isSelected: false,
            isCorrect: true
        },
        {
            id: props.id,
            answer: decodeURIComponent(props.incorrects[0]),
            isSelected: false,
            isCorrect: false
        },
        {
            id: props.id,
            answer: decodeURIComponent(props.incorrects[1]),
            isSelected: false,
            isCorrect: false
        },
        {
            id: props.id,
            answer: decodeURIComponent(props.incorrects[2]),
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
        //console.log(props.choices)
        const newArr = makeFalse.map(it => {
            if(it === t[0]) {
                return {...it, isSelected: true}
            } else {
                return it
            }
        })

        let arr = [...props.choices]
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].id === t[0].id) {
                arr.splice(i, 1)
                //props.setChoices(arr)
            }
        }
        console.log(arr)
      
        props.setChoices([
            ...arr,
            {
                id: t[0].id,
                answer: t[0].answer,
                isSelected: true,
                isCorrect: t[0].isCorrect
            }
        ])
        setTheQ(newArr)
    }

    return (
        <div className="q">
            <h2>{decodeURIComponent(props.question)}</h2> 
            <h3 style={{
                backgroundColor: theQ[0].isSelected && '#1b2330'
              }}
            onClick={select}>{theQ[0].answer}</h3>
            <h3 style={{
                backgroundColor: theQ[1].isSelected && '#1b2330'
              }}
            onClick={select}>{theQ[1].answer}</h3>
            <h3 style={{
                backgroundColor: theQ[2].isSelected && '#1b2330'
              }}
            onClick={select}>{theQ[2].answer}</h3>
            <h3 style={{
                backgroundColor: theQ[3].isSelected && '#1b2330'
              }}
            onClick={select}>{theQ[3].answer}</h3>
            
        </div>
    )
}