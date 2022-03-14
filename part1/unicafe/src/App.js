import { useState } from 'react'

const Button = ({ onClick, title }) => <> <button onClick={onClick}>{title}</button> </>

const Statistic = ({ title, total }) => <p>{title}: {total}</p>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral + 1)
  const badOne = () => setBad(bad + 1)

  return (
    <div>
      <h1>Feedback Form </h1>
      <Button onClick={goodOne} title="good" />
      <Button onClick={neutralOne} title="neutral" />
      <Button onClick={badOne} title="bad" />
      <h1>Statistics </h1>
      <Statistic title="Good" total={good} />
      <Statistic title="Neutral" total={neutral} />
      <Statistic title="Bad" total={bad} />
    </div>
  )
}

export default App