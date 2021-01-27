import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import { Button, ListGroup } from 'react-bootstrap';
import Popup from "../utils/Popup/Popup";
import "./Sections/LandingPage.css";
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
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div style={{ width: "20%", height: "100%", overflowY: "scroll"}}>
                <ListGroup>
                    {classes.map((item, index) => (
                        <ListGroup.Item action variant="secondary" key={index} onClick={onClickDayHandler}>
                            {item.title}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignContent: "center" ,width: "100%", backgroundColor: "black"}}>
                <div style={{color: "white"}}>
                    sdfdsf
                </div>
            </div>
            {showPopup ? <Popup closeHandler={closeBtnHandler} day={clickDay} /> : null}
        </div>
    );
}

export default LandingPage
