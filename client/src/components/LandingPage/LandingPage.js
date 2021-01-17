import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function LandingPage() {
    const [value, onChange] = useState(new Date());
    
    const onClickDayHandler = (value, e) => (
        <Popup>
            {console.log('asdf')}
            <div>Popup test</div>
        </Popup>
    )

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={onClickDayHandler}
      />
    </div>
  );
}

export default LandingPage
