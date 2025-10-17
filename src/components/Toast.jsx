import React from 'react'

export default function Toast({ message, open }) {
  if (!open) return null
  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  )
}
