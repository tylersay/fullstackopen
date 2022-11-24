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
      Number of exercises {props.t[0].exercises + props.t[1].exercises + props.t[2].exercises}
    </p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header c={course.name} />
      <Content p1={course.parts[0].name}
        p2={course.parts[1].name}
        p3={course.parts[2].name}
        e1={course.parts[0].exercises}
        e2={course.parts[1].exercises}
        e3={course.parts[2].exercises} />
      <Total t={course.parts} />
    </>
  )
}

export default App