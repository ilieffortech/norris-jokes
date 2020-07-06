import React from 'react'

const TextButton = ({ children, onClick }) => {
    console.log("text button render");
    return <button onClick={onClick} style={{ color: 'red' }}>{children}</button>
}

export default TextButton;