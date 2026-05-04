import { useState } from 'react'
import './App.css'

export default function App() {
  const [items, setItems] = useState([])
  const [draft, setDraft] = useState('')

  function logGoodEvening() {
    console.log('Good evening folks!')
  }

  function addItem(e) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text }])
    setDraft('')
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <main className="app">
      <h1>To-do</h1>

      <button className="test-button" type="button" onClick={logGoodEvening}>
        Test button
      </button>

      <form className="add" onSubmit={addItem}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="New task"
          aria-label="New task"
        />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p className="empty">No tasks yet.</p>
      ) : (
        <ul className="list">
          {items.map((item) => (
            <li key={item.id}>
              <span className="text">{item.text}</span>
              <button type="button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
