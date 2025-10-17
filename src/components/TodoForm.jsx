import React from 'react'
import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onAdd?.(value)
    setValue('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Thêm công việc mới..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn primary" type="submit">Thêm</button>
    </form>
  )
}
