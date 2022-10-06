import React from 'react'

function CustomeButton({width,height,
    backgroundColor,
    color,
    border,
    borderColor,
    fontSize,
    buttonText,}) {
  return (
    <button style={{width, height, backgroundColor, color, border, borderColor, fontSize}}>
           {buttonText}
    </button>
  )
}

export default CustomeButton
