import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function Button(props) {
  const { to, children, onClick } = props
  if(to) {
    return (
      <a href={to} onClick={onClick} className="btn-primary">
        <span className="btn-primary-inner">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button onClick={onClick} className="btn-primary">
      <span className="btn-primary-inner">
        {children}
      </span>
    </button>
  )
}

Button.defaultProps = {
  to: '',
  children: null,
  onClick: () => {},
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}
