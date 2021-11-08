import { useRef } from "react"

const Start = ({ setUsername }) => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value)
  }
  return (
    <div className="start">
      <input placeholder="Enter your name" className="start-input" ref={inputRef} />
      <button 
        className="start-button"
        onClick={handleClick}
      >Start</button>
    </div>
  )
}

export default Start
