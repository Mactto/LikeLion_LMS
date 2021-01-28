import React, { useState, useEffect } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import Popup from "../utils/Popup/Popup";
import "./Sections/LandingPage.css";
import axios from 'axios';
import Navbar from '../navbar/navbar';
import QRCode from "react-qr-code";

function LandingPage(props) {
    const [date, onChange] = useState(new Date());
    const [showPopup, setShowPopup] = useState(false);
    const [classes, setClasses] = useState([]);
    const [clickDay, setClickDay] = useState(date);
    const [classInfo, setClassInfo] = useState(undefined);

    useEffect(() => {
        axios.get('/api/class/getClass').then(res => {
            setClasses(res.data);
        })
    }, [])

    const onClickDayHandler = (e) => {
        const body = {
            id: e.target.value
        }
        axios.post("/api/class/getClassInfo", body).then(res => {
            setClassInfo(res.data.classInfo);
        })
    }

    const closeBtnHandler = () => {
        setShowPopup(false);
    }


    const doAttendenceHandler = () => {

    }

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: 'column' }}>
            <Navbar />
            <div style={{ height: "100%", display: "flex", flexDirection: "row"}}>
            <div style={{ width: "20%", height: "90%", overflowY: "scroll"}}>
                <ListGroup>
                    {classes.map((item, index) => (
                        <ListGroup.Item action variant="secondary" value={item._id} key={index} onClick={onClickDayHandler}>
                            {item.title}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,width: "100%", backgroundColor: "black"}}>
                <div style={{width: "80%", height: "80%", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    {classInfo === undefined ?
                        <div>세션을 선택해주세요</div>
                        :
                        <div>
                        <ul>
                            <li>{classInfo.title}</li>
                            <li>{classInfo.date}</li>
                            <li>{classInfo.enableTime}</li>
                        </ul>
                        <QRCode
                            value={`http://localhost:3000/attendance/?${classInfo._id}`}
                            size={290}
                            level={"H"}
                            includeMargin={true}
                        />
                        </div>   
                    }
                </div>
            </div>
            </div>
            {showPopup ? <Popup closeHandler={closeBtnHandler} day={clickDay} /> : null}
        </div>
    );
}

export default LandingPage
