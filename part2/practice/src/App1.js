//exercise
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState(
        'a new note...'//用来存储用户提交的输入，让我们把它设置为input元素的value属性
      )
    const [showAll, setShowAll] = useState(true)
  
    const addNote = (event) => {
      event.preventDefault()//防止提交表单的默认动作
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
        id: notes.length + 1,
      }
    
      setNotes(notes.concat(noteObject))
      setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
      }

    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

    return (
      <div>
        <h1>Notes</h1>
        <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
        <ul>
        {notesToShow.map(note =>
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input 
          value={newNote} 
          onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }
  export default App
