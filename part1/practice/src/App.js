
const Header = (props)=>{//显示课程的名称
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props)=>{
  return(<p>{props.part} {props.exercises}</p>)
}

const Content = (props)=>{//显示各部分及其练习的数量
  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  )
}

const Total = (props)=>{//显示练习的总数量
  return (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
    <div>
      <Header course = {course} />
      <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App