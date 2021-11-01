import React, { useState } from 'react'

const Header = () => {
  return (
    <h1>
      give feedback
    </h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({text}) => {
  return (
    <div>
      {text}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text={'Good'} />
      <Button handleClick={handleNeutralClick} text={'Neutral'} />
      <Button handleClick={handleBadClick} text={'Bad'} />
      <Display text={`Good: ${good}`} />
      <Display text={`Neutral: ${neutral}`} />
      <Display text={`Bad: ${bad}`} />
      <Display text={`Total: ${good + neutral + bad}`} />
    </div>
  )
}

export default App