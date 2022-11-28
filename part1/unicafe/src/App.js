import { useState } from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const StatsLine = ({ text, statsValue, hidden }) => {
  if (hidden === "positive") {
    return (<>
      {text} {statsValue}%
    </>)
  }
  else return (
    <>
      {text} {statsValue}
    </>
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
    <><table><tbody><tr>
      <td><StatsLine text='good' /></td>
      <td> <StatsLine statsValue={good} /></td>
    </tr>
      <tr>
        <td><StatsLine text='neutral' /></td>
        <td> <StatsLine statsValue={neutral} /></td>
      </tr>
      <tr>
        <td><StatsLine text='bad' /></td> 
        <td> <StatsLine statsValue={bad} /></td>
      </tr>
      <tr> 
        <td><StatsLine text='average' /> </td> 
        <td><StatsLine statsValue={(good - bad) / (good + neutral + bad)} /></td>
      </tr>
      <tr>
        <td><StatsLine text='positive' /></td> 
        <td> <StatsLine hidden='positive' statsValue={good / (good + neutral + bad) * 100} /></td>
      </tr></tbody>
    </table></>
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