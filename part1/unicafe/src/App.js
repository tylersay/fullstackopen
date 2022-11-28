import { useState } from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const Stats = ({ statName, statValue, allClick, good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else return (
    <><br />
      good {good}
      <br />neutral {neutral}
      <br />bad {bad}
      <br /> average {(good - bad) / (good + neutral + bad)}
      <br /> positive {good / (good + neutral + bad) * 100}%
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allClick = good + bad + neutral
  console.log(allClick)

  const addGood = () => {
    setGood(good + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='good' handleClick={addGood} />
      <Button text='neutral' handleClick={addNeutral} />
      <Button text='bad' handleClick={addBad} />
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App