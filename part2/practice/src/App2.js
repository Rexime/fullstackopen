//homework2.6-2.10
import { useState } from 'react'

const Filter=(props)=>{
    return(
        <div>
        filter shown with: 
        <input 
        value={props.search}
        onChange={props.handleSearchChange}
        />
      </div>
    )
}

const PersonForm=(props)=>{
    return(
        <form onSubmit={props.addName}>
        <div>
          name: 
          <input 
          value={props.newName}
          onChange={props.handleNameChange}
          />
        </div>
        <div>
        number: 
        <input 
            value={props.newNum}
            onChange={props.handleNumChange}
            />  
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
        </form>
    )
}

const Persons=({showInfo})=>{
    return (<>{showInfo.map((person,id)=>
        <p key={id}>{person.name}  {person.number}</p>
      )}</>)
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()//防止提交表单的默认动作
    const flag = persons.filter(person=>person.name===newName)
    if(flag.length>0){
        window.alert(`${newName} is already added to phonebook`)
    }
    else{
    const nameObject = {
      name:newName,
      number:newNum
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    }
    }

  const showInfo = showAll
    ? persons
    : persons.filter(person=>person.name.match(new RegExp(search,'i')))

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumChange = (event) => {
        console.log(event.target.value)
        setNewNum(event.target.value)
    }

    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
        setShowAll(!showAll)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange}></Filter>
      <h2>add a new</h2>
      {/* <div>debug: {newName}</div> */}
      <PersonForm newName={newName} newNum={newNum} handleNameChange={handleNameChange} handleNumChange={handleNumChange} addName={addName}></PersonForm>
      <h2>Numbers</h2>
      <Persons showInfo={showInfo}></Persons>
    </div>
  )
}

export default App