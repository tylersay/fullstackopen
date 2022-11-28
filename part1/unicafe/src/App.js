import { useState } from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const Stats = ({statName, statValue}) => (
  <><br/>
  {statName} {statValue}
  </>
)


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
      <Button text='good' handleClick={addGood}/>
      <Button text='neutral' handleClick={addNeutral}/>
      <Button text='bad' handleClick={addBad}/>
      <h1>Statistics</h1>
      <Stats statName='Good' statValue={good} />
      <Stats statName='neutral' statValue={neutral} />
      <Stats statName='bad' statValue={bad} />


    </div>
  )
}

export default App