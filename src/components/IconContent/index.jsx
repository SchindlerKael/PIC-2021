import React from 'react'

import PropTypes from 'prop-types'

import "./styles.css";

const IconContent = ({ icon, onClick, disabled }) => <button class="icon" onClick={onClick} disabled={disabled}> {icon} </button>

const { string, func } = PropTypes

IconContent.propTypes = {
  icon: string.isRequired,
  onClick: func.isRequired,
}

export default IconContent