import React from 'react'

import PropTypes from 'prop-types'

// import ToolTip from "../ToolTip/index";

import "./styles.css";

const InputRange = ({minValue, maxValue, stepValue, onChange}) => {
  return (
    <div className="inputRange">
      {/* <ToolTip label={20}/> */}
      <input type="range" min={minValue} max={maxValue} step={stepValue} onChange={onChange}></input>
    </div>
  )
}

// const { string, func } = PropTypes

// InputRange.propTypes = {
//   label: string.isRequired,
//   onClick: func.isRequired,
// }

export default InputRange