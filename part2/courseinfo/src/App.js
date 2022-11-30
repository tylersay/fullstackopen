const Course = ({ course }) => {
  console.log('course', course)
  // const { headerText, parts } = props

  return (
    <div>
      <Header headerText={course.name} />
      {console.log('course.parts', course.parts)}
      <Content parts={course.parts} />
      {/* {course.map(({ name, exercises, id }) =>
        <Content key={id} contentName={name}
          contentExercises={exercises} />
      )} */}
    </div>
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
      <Total p={parts} />
    </div>
  )
}

const Header = ({ headerText }) => {
  console.log('headerText', headerText)
  return (
    <h2>
      {headerText}
    </h2>
  )
}



const Part = ({ part }) => {
  // console.log('Part props', props)
  // const {part} = props
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  )
}

const Total = ({ p }) => {
  // console.log('p', p)
  // console.log('p.exercises', p.exercises)
  const exercisesArr = p.reduce((a, b) => a + b.exercises, 0)
  // console.log('exercisesArr', exercisesArr)
  return (
    <div>
      <b>
        total of {exercisesArr} exercises
      </b>
    </div>
  )
}





const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course key={course.id} course={course} />)}
    </>

  )
}

export default App