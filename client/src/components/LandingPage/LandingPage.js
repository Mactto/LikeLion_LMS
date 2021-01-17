import React, {useState} from 'react'
import Calendar from 'react-calendar';
import "./Sections/Calendar.css";
import {Button, ListGroup} from 'react-bootstrap';
import Popup from "../utils/Popup/Popup";

function LandingPage() {
    const [value, onChange] = useState(new Date());
    const [showPopup, setShowPopup] = useState(false);
    
    const onClickDayHandler = (value, e) => {
        setShowPopup(true);
    }

    const closeBtnHandler = () => {
        setShowPopup(false);
    }

    const addClassHandler = () => {
        
    }

  return (
    <div style={{display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
        <div style={{display: "flex"}}>
        <Calendar
            onChange={onChange}
            value={value}
        />
        <ListGroup style={{width: "400px"}}>
            <ListGroup.Item action variant="secondary" onClick={onClickDayHandler}>
                Success
            </ListGroup.Item>
        </ListGroup>
        </div>
        <Button variant="primary" onClick={{addClassHandler}}>수업추가</Button>
      {showPopup ? <Popup closeHandler={closeBtnHandler}/> : null}
    </div>
  );
}

export default LandingPage
