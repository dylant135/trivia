import React from 'react';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz'
import End from './components/End'

function App() {
  const [mode, setMode] = React.useState('start')
  const [score, setScore] = React.useState(0)

  const [questions, setQuestions] = React.useState()
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, [])

  return (
    <div className="App">
      <h1>Trivia</h1>
      {mode === 'start' && <Start setMode={setMode} />}
      {mode === 'quiz' && 
        <Quiz
          questions={questions}
          setMode={setMode}
          score={score}
          setScore={setScore}
      />}
      {mode === 'end' && 
        <End
          score={score}
          questions={questions}
      />}
    </div>
  );
}

export default App;
