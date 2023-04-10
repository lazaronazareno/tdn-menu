import { useEffect, useState } from "react"
import Finished from "./components/Finished"
import Question from "./components/Question"
import { Award, IQuestion } from "./types"
import './index.css'

export default function App() {
  const [questions, setQuestions] = useState<Array<IQuestion>>()
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [realAnswer, setRealAnswer] = useState('')
  const [userAnswer, setUserAnswer] = useState('')

  let isFinished = index >= 10
  const [loading, setLoading] = useState(true)

  function handleClick(answer: string) {
    setUserAnswer(answer)
    if (questions![index].respuesta_correcta === answer) {
      setScore(score => score + 1)
    }
    setRealAnswer(questions![index].respuesta_correcta)
    setTimeout(() => {
      setRealAnswer('')
      setIndex(index => index + 1)
    }, 5000);
  }

  function handleRedeem(redeemed: Award) {
    setScore((score) => score - redeemed.price)
  }

  const fetchData = async () => {
    const response = await fetch('https://tdn-menu-kasu.netlify.app/questions')
    const data = await response.json()

    const newQuestions = data.preguntas.sort(() => 0.5 - Math.random())
    setQuestions(newQuestions)
  };

  function playAgain() {
    setQuestions([])
    setLoading(true)
    setScore(0)
    setIndex(0)
    fetchData()

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  console.log('index app', index)

  return (
    <main>
      <h1>TDN Quiz</h1>
      {loading && (<span>Loading...</span>)}
      {questions && !loading && !isFinished && !realAnswer && (
        <Question questions={questions} index={index} onAnswer={handleClick} realAnswer={realAnswer} />
      )}
      {realAnswer && (
        <div className="question-container">
          {realAnswer === userAnswer ?
            <h2 className="correctAnswer">Respuesta Correcta</h2>
            :
            <h2 className="incorrectAnswer">Respuesta Incorrecta : la respuesta correcta era "{realAnswer}"</h2>
          }
        </div>
      )}
      {isFinished && (
        <>
          <Finished score={score} onRedeem={handleRedeem} />
          <button onClick={playAgain}>Jugar Nuevamente</button>
        </>
      )}
    </main>
  )
}