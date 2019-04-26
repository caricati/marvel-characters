import React from 'react'
import './button.css'

export default ({ to, children }) => (
  <a href={to} className="btn-primary">
    <span className="btn-primary-inner">
      {children}
    </span>
  </a>
)