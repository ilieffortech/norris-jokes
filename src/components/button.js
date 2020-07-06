import React from 'react'

const Button = ({ joke, toggleAction, children, style, onClick }) => {
    console.log('toggleAction', toggleAction);
    console.log('onClick', onClick);
    if (!style) return <button onClick={() => toggleAction(joke)} >{children}</button>
    switch (style) {
        case "joke-action-button":
            return <button onClick={() => toggleAction(joke)} className='joke-action-button' style={{ color: 'red' }}>{children}</button>
        case "text_box_button":
            return <button onClick={() => toggleAction(joke)} className='text-box-button'>{children}</button>
        default:
            return <button onClick={() => toggleAction(joke)} >{children}</button>
    }

}




export default Button;
