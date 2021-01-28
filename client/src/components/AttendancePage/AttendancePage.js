import React, {useEffect} from 'react'
import axios from 'axios';

function AttendancePage(props) {
    useEffect(() => {
        const body = {
            classId: props.location.search,
        }
        axios.post('/api/class/attendence', body).then(res => {
            console.log(res);
        })
    }, [])

    return (
        <div>
            출석이 완료되었습니다!
        </div>
    )
}

export default AttendancePage
