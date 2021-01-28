/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        console.log(props);
        var info = {};
        useEffect(() => {
            axios.get('/api/user/auth').then(res => {
                if (res.data.success === false) {
                    props.history.push('/login');
                } else {
                    info = res.data;
                    props.history.push('/');
                }
            })
        }, [])

        return (
            <SpecificComponent {...props} userInfo={info} />
        )
    }
    return AuthenticationCheck
}