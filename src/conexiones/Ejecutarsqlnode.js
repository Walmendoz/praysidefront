//import React from 'react';
import axios from 'axios';

/*        const resp = await axios.get(url, { 'mode': 'no-cors' });
        return resp;

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Auth-Token': '97e0d315477f435489cf04904c9d0e6co',
      };

        */
const Ejecutarsqlnode = async (url) => {

  try {
    const res = await axios.get(url);
    const  resp = await res.data;
    return resp;

  } catch (error) {
    console.error(error)
  }
}
export default Ejecutarsqlnode