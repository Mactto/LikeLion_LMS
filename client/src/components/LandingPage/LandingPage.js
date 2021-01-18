import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar';
import {Button, ListGroup} from 'react-bootstrap';
import Popup from "../utils/Popup/Popup";
import "./Sections/Calendar.css";
import axios from 'axios';

function LandingPage() {
    const [value, onChange] = useState(new Date());
    const [showPopup, setShowPopup] = useState(false);
    const [classes, setClasses] = useState([]);
    const [clickDay, setClickDay] = useState(value);

    useEffect(() => {
        axios.get('/api/class/getClass').then(res => {
            setClasses(res.data);
        })
    }, [])
    
    const onClickDayHandler = (value, e) => {
        setClickDay(value);
        setShowPopup(true);
    }

    const closeBtnHandler = () => {
        setShowPopup(false);
    }


  return (
    <div style={{display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
        <div style={{display: "flex"}}>
        <Calendar
            onChange={onChange}
            value={value}
            onClickDay={onClickDayHandler}
        />
        <ListGroup style={{width: "400px"}}>
            {classes.map((item, index) => (
            <ListGroup.Item action variant="secondary" key={index} onClick={onClickDayHandler}>
                {item.title}
            </ListGroup.Item>
            ))}
        </ListGroup>
        </div>
      {showPopup ? <Popup closeHandler={closeBtnHandler} day={clickDay}/> : null}
    </div>
  );
}

export default LandingPage
