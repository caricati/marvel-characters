import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
import './modal.css'

const rootPortal = document.getElementById('root-portal')

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    rootPortal.appendChild(this.el)
  }

  componentWillUnmount() {
    rootPortal.removeChild(this.el);
  }

  render() {
    const { open, children, id } = this.props
    const classList = [
      'modal-overlay',
      open ? 'modal-open' : '',
    ]

    return ReactDOM.createPortal(
      (
        <div id={id} className={classList.filter(item => !!item).join(' ')}>
          <section className="modal-container">
            {children}
          </section>
        </div>
      ),
      this.el,
    )
  }
}

Modal.defaultProps = {
  open: false,
  children: null,
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
}
