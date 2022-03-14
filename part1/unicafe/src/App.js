import { useState } from 'react'

const Button = ({ onClick, title }) => <> <button onClick={onClick}>{title}</button> </>

const Statistic = ({ title, count }) => <p><b>{title}:</b> {count}</p>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral + 1)
  const badOne = () => setBad(bad + 1)
  const total = good + neutral + bad
  const average =(1 * good + 0 * neutral + -1 * bad) / total
  const positive = good/total * 100 + " %"
  return (
    <div>
      <h1>Feedback Form</h1>
      <Button onClick={goodOne} title="good" />
      <Button onClick={neutralOne} title="neutral" />
      <Button onClick={badOne} title="bad" />
      <h1>Statistics </h1>
      <Statistic title="Good" count={good} />
      <Statistic title="Neutral" count={neutral} />
      <Statistic title="Bad" count={bad} />
      <Statistic title="All" count={total} />
      <Statistic title="Average" count={average} />
      <Statistic title="Positive" count={positive} />
    </div>
  )
}

export default App