import { useState } from 'react'

const Button = ({ onClick, title }) => <> <button onClick={onClick}>{title}</button> </>

const Statistic = ({ title, count }) => <p><b>{title}:</b> {count}</p>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (1 * good + 0 * neutral + -1 * bad) / total
  const positive = good / total * 100 + " %"
  if(total){
    return (
      <>
        <h1>Statistics </h1>
        <Statistic title="good" count={good} />
        <Statistic title="neutral" count={neutral} />
        <Statistic title="bad" count={bad} />
        <Statistic title="all" count={total} />
        <Statistic title="average" count={average} />
        <Statistic title="positive" count={positive} />
      </>
    )
  }else{
    return <p>no feedback given</p>
  }
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral + 1)
  const badOne = () => setBad(bad + 1)

  return (
    <div>
      <h1>Feedback Form</h1>
      <Button onClick={goodOne} title="good" />
      <Button onClick={neutralOne} title="neutral" />
      <Button onClick={badOne} title="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App