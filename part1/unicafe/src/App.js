import { useState } from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const StatsLine = ({ text, statsValue }) => {
  if (text === "positive") {
    return (<div>
      {text} {statsValue}%
    </div>)
  }
  else return (
  <div>
    {text} {statsValue}
  </div>
  )
}


const Stats = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else return (
    <>
      <StatsLine text='good' statsValue={good} />
      <StatsLine text='neutral' statsValue={neutral} />
      <StatsLine text='bad' statsValue={bad} />
      <StatsLine text='average' statsValue={(good - bad) / (good + neutral + bad)} />
      <StatsLine text='positive' statsValue={good / (good + neutral + bad) * 100} />
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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