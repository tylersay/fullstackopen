const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.p1} exercise={props.e1}/>
      <Part part={props.p2} exercise={props.e2}/>
      <Part part={props.p3} exercise={props.e3}/>


    </div>
  )
}



const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App