import { useState, useEffect } from 'react'
import './app.css'
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';
import { moneyPyramid, questions } from './data'

function App() {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stopTime, setStopTime] = useState(false)
  const [earned, setEarned] = useState("$ 0")


  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [questionNumber])
  return (
    <div className="app">
      {username ? (
      <>
      <div className="main">
          {stopTime ? (<h1 className="end-text">You earned {earned}.</h1>) :
            (
              <>
                <p className="username">Welcome: {username}</p>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStopTime={setStopTime}
                      questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia data={questions}
                    setStopTime={setStopTime}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber} />
                </div>
              </>
            )}
        </div><div className="pyramid">
            <ul className="money-list">
              {moneyPyramid.map(mon => (
                <li className={questionNumber === mon.id ? "money-list-item active" : "money-list-item"}>
                  <span className="money-list-item-number">{mon.id}</span>
                  <span className="money-list-item-amount">{mon.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} />}
    </div>
  );
}

export default App;
