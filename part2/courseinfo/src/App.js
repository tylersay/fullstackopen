const Course = ({ headerText, parts }) => {
  // console.log('props', props)
  // const { headerText, parts } = props

  return (
    <div>
      <Header headerText={headerText} />
      <Content parts={parts} />
    </div>
  )
}

const Header = ({ headerText }) => {
  return (
    <h1>
      {headerText}
    </h1>
  )
}

const Part = ( {part} ) => {
// console.log('Part props', props)
// const {part} = props
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  )
}

const Content = ({ parts }) => {
  // console.log('props Content', props)
  // const { parts } = props
  // console.log('parts', parts)
  return (
    <div>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part} />)}
      </ul>
    </div>
  )
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course
    headerText={course.name}
    parts={course.parts}
  />
}

export default App