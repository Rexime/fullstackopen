// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// React组件名称必须大写
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
// React组件的内容（通常）需要包含一个根元素
// const App = () => {
//   return (
//     <h1>Greetings</h1>
//     <Hello name="Maya" age={26 + 10} />
//     <Footer />
//   )
// }

// 使用根元素并不是唯一可行的选择。一个组件的array也是一个有效的解决方案。
// const App = () => {
//   return [
//     <h1>Greetings</h1>,
//     <Hello name="Maya" age={26 + 10} />,
//     <Footer />
//   ]
// }

// 由于根元素被强制规定了，我们在DOM树中有 "额外的 "div-elements。这可以通过使用fragments来避免，即用一个空元素来包装组件要返回的元素。
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App