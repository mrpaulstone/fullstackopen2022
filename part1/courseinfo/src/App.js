const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part1 = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  return (
    <div>
      {part1} {exercises1}
    </div>
  )
}

const Part2 = () => {
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  return (
    <div>
      {part2} {exercises2}
    </div>
  )
}

const Part3 = () => {
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      {part3} {exercises3}
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Part1 />
    <Part2 />
    <Part3 />
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content  />
      <Total />
    </div>
  )
}


export default App