const Header = (props) => {
  console.log("Header props", props)
  return (
    <div>
      <h1>{props.c}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.p} {props.ex}
    </p>
  )
}

const Content = (props) => {
  console.log("content props", props)
  return (
    <div>
      <Part p={props.p1} ex={props.e1} />
      <Part p={props.p2} ex={props.e2} />
      <Part p={props.p3} ex={props.e3} />

    </div>
  )
}



const Total = (props) => {
  return (
    <p>
      Number of exercises {props.t}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header c={course} />
      <Content p1={part1.name} p2={part2.name} p3={part3.name} e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
      <Total t={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App