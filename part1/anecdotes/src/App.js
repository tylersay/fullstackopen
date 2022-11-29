import { useState } from 'react'

const Button = ({ handleClick, buttonText }) => {
  return (
    <button onClick={handleClick}>
      {buttonText}
    </button>
  )
}

const DisplayAnecdote = ({ title, anecdote, votes, highest }) => {
  if (highest == 0 && title=="Anexdote with most votes") {
    return <div><h1>{title}</h1>No votes yet</div>
  }
  return (
    <div>
      <h1>{title}</h1>
      {anecdote}
      <p />
      has {votes} votes</div>

  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))


  const handleNext = () => {
    const randAnecdote = Math.floor(Math.random() * (anecdotes.length))
    console.log(anecdotes[randAnecdote])
    setSelected(randAnecdote)
  }

  const handleClick = () => {
    console.log('clicked')
  }

  console.log(points)

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const highest = points.reduce((a, b) => Math.max(a, b), -Infinity)
  const indexMostVoted = points.indexOf(highest)
  const anecdoteMostVoted = anecdotes[indexMostVoted]
  // console.log(indexMostVoted)
  // console.log(anecdoteMostVoted)



  return (
    <div>

      <DisplayAnecdote title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={points[selected]}
        highest={highest} />
      <p/>
      <Button handleClick={handleVote} buttonText="vote" />
      <Button handleClick={handleNext} buttonText="Next anecdote" />
      <p/>
      <DisplayAnecdote title="Anexdote with most votes"
        anecdote={anecdoteMostVoted} votes={highest} 
        highest={highest} />

    </div>
  )
}

export default App