import React from 'react'
import axios from 'axios';


function LandingPage() {

    const googleBtnHandler = () => {
        axios.get('/user/google')
        .then(res => console.log(res))
    }

    return (
        <div>
            This is Landing Page

            <button onClick={googleBtnHandler}>google</button>
        </div>
    )
}

export default LandingPage
