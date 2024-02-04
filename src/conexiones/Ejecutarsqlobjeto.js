//import React from 'react';
import axios from 'axios';

const Ejecutarsqlobjeto = async (url, datos) => {
    try {
        const dir = url;
        const res = await axios(dir, {method: 'post',
        data: datos, 'mode': 'no-cors' });
        const  resp = await res.data;
        return resp;

    } catch (error) {
        console.error(error)
    }
}

export default Ejecutarsqlobjeto

// axios({
//     url: 'https://test.com/api/get_product',
//     method: 'post',
//     data: payload
//   })
//   .then(function (response) {
//       // your action after success
//       console.log(response);
//   })
//   .catch(function (error) {
//      // your action on error success
//       console.log(error);
//   });