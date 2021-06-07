import React from 'react'

import PropTypes from 'prop-types'

import "./styles.css";

const Button = ({ label, onClick, type }) => <button type={type} class="btn" onClick={onClick}> {label} </button>

const { string, func } = PropTypes

Button.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
}

export default Button