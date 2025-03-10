﻿import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h3>Detection alert!</h3>
                <p>A person without a protection mask has been detected!</p>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup


