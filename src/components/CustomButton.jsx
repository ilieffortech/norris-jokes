import React from 'react'

const CustomButton = ({ children, onClick }) => {
    return <button onClick={onClick} className="customButton">{children}</button>
}

export default CustomButton;
