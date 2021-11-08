import { useEffect, useState } from "react"

const Timer = ({ questionNumber, setStopTime }) => {

  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if(timer === 0 ) return setStopTime(true)
    const interval = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000);

    return () => clearInterval(interval)
  }, [setStopTime, timer])

  useEffect(() => {
    setTimer(30)
  }, [questionNumber])


  return timer
}

export default Timer
