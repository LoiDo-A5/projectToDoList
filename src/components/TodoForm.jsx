import React from 'react'
import { useState } from 'react'

export default function TodoForm({ onAdd, onToast }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const title = value.trim()
    if (!title) {
      onToast?.('Vui lòng nhập nội dung công việc')
      return
    }
    onAdd?.(title)
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
