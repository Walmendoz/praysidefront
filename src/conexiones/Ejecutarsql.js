//import React from 'react';
import axios from 'axios';

const Ejecutarsql = async (url) => {
    try {
        const dir = url;
        const res = await axios(dir, { 'mode': 'no-cors' });
        const  resp = await res.data;
        return resp;

    } catch (error) {
        console.error(error)
    }
}

export default Ejecutarsql