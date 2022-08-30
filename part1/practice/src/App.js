
// const Header = (props)=>{//显示课程的名称
//   return (
//     <h1>{props.course}</h1>
//   )
// }
// const Part = (props)=>{
//   return(<p>{props.part} {props.exercises}</p>)
// }

// const Content = (props)=>{//显示各部分及其练习的数量
//   return (
//     <div>
//       <Part part={props.parts[0].name}/>
//       <Part part={props.parts[1].name}/>
//       <Part part={props.parts[2].name}/>
//     </div>
//   )
// }

// const Total = (props)=>{//显示练习的总数量
//   return (
//   <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//       <Header course = {course.name} />
//       <Content parts={course.parts}/>
//       <Total parts={course.parts} />
//     </div>
//   )
// }

// export default App

// import { useState } from 'react'

// // const Display = ({ counter }) => {
// //   return (
// //     <div>{counter}</div>
// //   )
// // }
// const Display = ({ counter }) => <div>{counter}</div>

// // const Button = (props) => {
// //   return (
// //     <button onClick={props.onClick}>
// //       {props.text}
// //     </button>
// //   )
// // }
// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [ counter, setCounter ] = useState(0)//counter变量被分配了state的初始值，即0。变量setCounter被分配给一个函数，该函数将被用来修改状态。

//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)
//   //应用调用setTimeout函数并传递给它两个参数：一个用于增加计数器状态的函数和一个一秒钟的超时。
//   // setTimeout(
//   //   () => setCounter(counter + 1),//修改状态的函数setCounter被调用时，React重新渲染组件，这意味着组件函数的函数体被重新执行。
//   //   1000
//   // )
  

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }


// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left + 1,
//       right: clicks.right
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       left: clicks.left,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)//不能用在条件语句or循环里，只能在组件的函数体内部调用
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   // debugger
//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

//   const hello = (who) => {
//     const handler = () => {
//       console.log('hello', who)
//     }
//     return handler
//   }
//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }


//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }

// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

import { useState } from 'react'

const Button=({onClick,text})=>{
  return(
    <button onClick = {onClick} >{text}</button>
  )
}

const StatisticLine=(props)=>{
  return(<tr><th>{props.text}</th>
  <td>{props.value}</td></tr>)
}
const Statistics=(props)=>{
  if (props.all==0)
  return (<h5>No feedback given</h5>)
  else 
  return(<>
    <h2>statistics</h2>
    <table>
      <thead>

      </thead>
      <tbody>
    <StatisticLine text="good" value={props.good}></StatisticLine>
    <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
    <StatisticLine text="bad" value={props.bad}></StatisticLine>
    <StatisticLine text="all" value={props.all}></StatisticLine>
    <StatisticLine text="average" value={(props.sum/props.all).toFixed(1)}></StatisticLine>
    <StatisticLine text="positive" value={(props.good/props.all*100).toFixed(1)+'%'}></StatisticLine>
    </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      {/* <button onClick={IncreaseGood}>good</button> */}
      <Button onClick={()=>{setGood(good+1);setAll(all+1);setSum(sum+1)}} text='good'></Button>
      <Button onClick={() => {setNeutral(neutral+1);setAll(all+1);}} text='neutral'></Button>
      <Button onClick={() =>{setBad(bad+1);setAll(all+1);setSum(sum-1)}} text='bad'></Button>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} sum={sum}></Statistics>

    </div>
    
  )
}

export default App