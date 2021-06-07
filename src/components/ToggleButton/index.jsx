import React from 'react'

import { AiOutlineStop } from 'react-icons/ai';

import "./styles.css";

const ToggleButton = ({ icon, onClick, value, disabled }) => {

  return (
    <button class="icon" onClick={onClick} disabled={disabled}>
      {!value ? icon : <AiOutlineStop/>} 
    </button>
  )
}

export default ToggleButton