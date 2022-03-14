const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <>
      {props.parts.map((part) => <p> {part.name} {part.exercise}</p>)}
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part parts={props.parts} exercises={props.exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.parts.reduce(((acc, cur) => acc + cur.exercise), 0)}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', 
        exercise: 10
      }, 
      {
        name: 'Using props to pass data', 
        exercise: 7
      }, 
      {
        name: 'State of a component', 
        exercise: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App