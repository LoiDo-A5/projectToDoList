import React from 'react'
import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

export default function App() {
  function getId() {
    try {
      if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
        return window.crypto.randomUUID()
      }
    } catch {}
    return Math.random().toString(36).slice(2) + Date.now().toString(36)
  }
  const [todos, setTodos] = useState([
    { id: getId(), title: 'Học React: Component/Props/State', completed: true },
    { id: getId(), title: 'Xây dựng UI To-Do List', completed: false },
    { id: getId(), title: 'Thêm chức năng thêm/xóa/sửa', completed: false },
  ])

  function addTodo(title) {
    if (!title.trim()) return
    setTodos((prev) => [{ id: getId(), title, completed: false }, ...prev])
  }

  function toggleTodo(id) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  function updateTodo(id, newTitle) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t)))
  }

  return (
    <div className="container">
      <h1 className="app-title">To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={updateTodo}
      />
    </div>
  )
}
