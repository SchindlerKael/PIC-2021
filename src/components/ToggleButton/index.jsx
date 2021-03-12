import React from 'react'

import PropTypes from 'prop-types'

import { AiOutlineStop } from 'react-icons/ai';

import "./styles.css";

const ToggleButton = ({ icon, onClick, value, disabled }) => {

  return (
    <button class="icon" onClick={onClick} disabled={disabled}>
      {!value ? icon : <AiOutlineStop/>} 
    </button>
  )
}


// const { string, func } = PropTypes

// ToggleButton.propTypes = {
//   icon: string.isRequired,
//   onClick: func.isRequired,
// }

export default ToggleButton