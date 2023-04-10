import { IQuestion } from "../types";

export default function Question({
  questions,
  index,
  onAnswer,
  realAnswer
}
  :
  {
    questions: IQuestion[];
    index: number;
    onAnswer: (answer: string) => void,
    realAnswer: string
  }) {
  return (
    <div className="question-container">
      <h2>{questions[index].pregunta}</h2>
      <div className="question-container__questions">
        {[...questions[index].respuestas]
          .sort(() => 0.5 - Math.random())
          .map((answer) => (
            <button onClick={() => onAnswer(answer)} key={answer}>{answer}</button>
          ))}
      </div>
    </div>
  )
}