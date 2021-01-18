import React, {useState} from 'react'
import axios from 'axios';
import { Button, Form, Col, Row } from 'react-bootstrap';
import "./Popup.css";

const Popup = (props) => {
  const [title, setTitle] = useState("");
  const [enableTime, setEnableTime] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.currentTarget.value);
  }
  const enableTimeHandler = (e) => {
    setEnableTime(e.currentTarget.value);
  }

  const addClassHandler = (e) => {
    e.preventDefault();

    const body = {
      title: title,
      date: props.day,
      enableTime: enableTime
    }
    axios.post('/api/class/addClass', body).then(res => {
      alert("추가되었습니다.");
      props.closeHandler();
    })
  }

  return (
    <div className='popup'>
      <div className='popup_inner'>
        <h2>수업 추가하기</h2>
        <br />
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              수업제목
            </Form.Label>
            <Col sm="10">
              <Form.Control value={title} onChange={titleChangeHandler} placeholder="Title"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              수업날짜
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={props.day} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              출석가능
            </Form.Label>
            <Col sm="10">
              <Form.Control value={enableTime} onChange={enableTimeHandler} placeholder="Enable Attendence" />
            </Col>
          </Form.Group>
          <Button type="submit" onClick={addClassHandler}>추가</Button>
          <Button variant="danger" onClick={(props.closeHandler)}>취소</Button>
        </Form>
      </div>
    </div>
  )
}

export default Popup
