import React from 'react'
import { useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)

  function handleSave(e) {
    e.preventDefault()
    const title = draft.trim()
    if (!title) return
    onEdit?.(todo.id, title)
    setIsEditing(false)
  }

  return (
    <li className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle?.(todo.id)}
        />
      </label>

      {isEditing ? (
        <form className="edit-form" onSubmit={handleSave}>
          <input
            className="input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            autoFocus
          />
          <button className="btn" type="button" onClick={() => setIsEditing(false)}>Huỷ</button>
          <button className="btn primary" type="submit">Lưu</button>
        </form>
      ) : (
        <>
          <span className="title">{todo.title}</span>
          <div className="actions">
            <button className="btn" onClick={() => setIsEditing(true)}>Sửa</button>
            <button className="btn danger" onClick={() => onDelete?.(todo.id)}>Xoá</button>
          </div>
        </>
      )}
    </li>
  )
}
