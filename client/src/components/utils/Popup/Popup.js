import React from 'react'
import "./Popup.css";

const Popup = (props) => {
    return (
        <div className='popup'>
        <div className='popup_inner'>
          <h1>test</h1>
        <button onClick={props.closeHandler}>close me</button>
        </div>
      </div>
    )
}

export default Popup
