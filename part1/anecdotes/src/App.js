import React, { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({title, text, voteCount}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{text}</div>
      <div>Has {voteCount} vote{voteCount !== 1 ? 's' : ''}</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [highestVote, setHighestVote] = useState(0)

  const setNextAnecdote = () => {
    let newSelected = selected
    do {
      newSelected = getRandomInt(anecdotes.length)
    } while (newSelected === selected)

    setSelected(newSelected)
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    if (newVotes[selected] > newVotes[highestVote]) {
      setHighestVote(selected)
    }
    setVotes(newVotes)
  }

  return (
    <div>
      <Anecdote title='Anecdote of the day' text={anecdotes[selected]} voteCount={votes[selected]} />
      <Button handleClick={voteAnecdote} text='Vote' />
      <Button handleClick={setNextAnecdote} text='Next anecdote' />
      <Anecdote title='Anecdote with most votes' text={anecdotes[highestVote]} voteCount={votes[highestVote]} />
    </div>
  )
}

export default App