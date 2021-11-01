import React, { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>
      {text}
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

const Statistics = ({data}) => {
  const { good, neutral, bad } = data

  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const score = good - bad
  const average = score/total
  const positive = good/total*100

  return (
    <div>
      <Display text={`Good: ${good}`} />
      <Display text={`Neutral: ${neutral}`} />
      <Display text={`Bad: ${bad}`} />
      <Display text={`Total: ${total}`} />
      <Display text={`Average: ${average}`} />
      <Display text={`Positive: ${positive}%`} />
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

  const data = {
    good,
    neutral,
    bad
  }

  return (
    <div>
      <Header text={'give feedback'}/>
      <Button handleClick={handleGoodClick} text={'Good'} />
      <Button handleClick={handleNeutralClick} text={'Neutral'} />
      <Button handleClick={handleBadClick} text={'Bad'} />
      <Header text={'statistics'} />
      <Statistics data={data} />
    </div>
  )
}

export default App