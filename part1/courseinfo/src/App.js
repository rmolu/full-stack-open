const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises.reduce((acc, cur) => acc + cur)}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises = [10, 7, 14]
  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercise={exercises[0]}/>
      <Content part={part2} exercise={exercises[1]}/>
      <Content part={part3} exercise={exercises[2]}/>
      <Total exercises = {exercises} />
    </div>
  )
}

export default App