//this is work for part2

// import Note from './components/Note'
// const App = ({ notes }) => {
  
//     return (
//       <div>
//         <h1>Notes</h1>
//         <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />//必须为Note组件定义key属性，而不是像以前那样为li标签定义。
//         )}
//         {/* 由map方法生成的元素，必须有一个唯一的键值：一个叫做key的属性。 */}
//       </ul>
//       </div>
//     )
//   }
  
//   export default App

import Courses from "./components/Courses"

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
      <Courses courses={courses}></Courses>
    )
  }
  
export default App