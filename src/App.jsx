import React from 'react'
import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  function getId() {
    try {
      if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
        return window.crypto.randomUUID()
      }
    } catch {}
    return Math.random().toString(36).slice(2) + Date.now().toString(36)
  }
  const [toast, setToast] = useState({ open: false, message: '' })
  const [todos, setTodos] = useState([
    { id: getId(), title: 'Mua thực phẩm cho tuần', completed: false },
    { id: getId(), title: 'Gọi điện cho khách hàng A', completed: false },
    { id: getId(), title: 'Dọn dẹp hộp thư đến', completed: false },
  ])

  function showToast(message) {
    setToast({ open: true, message })
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast({ open: false, message: '' }), 2000)
  }

  function addTodo(title) {
    if (!title.trim()) return
    setTodos((prev) => [{ id: getId(), title, completed: false }, ...prev])
    showToast('Đã thêm công việc')
  }

  function toggleTodo(id) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    showToast('Đã xoá công việc')
  }

  function updateTodo(id, newTitle) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t)))
    showToast('Đã cập nhật công việc')
  }

  return (
    <div className="container">
      <h1 className="app-title">To-Do List</h1>
      <TodoForm onAdd={addTodo} onToast={(msg) => showToast(msg)} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={updateTodo}
      />
      <Toast message={toast.message} open={toast.open} />
    </div>
  )
}
