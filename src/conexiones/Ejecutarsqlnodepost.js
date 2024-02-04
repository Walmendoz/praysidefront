//import React from 'react';  axios.get('http://localhost:8080/item/' + id)                               'mode': 'no-cors', 
//'mode': 'no-cors', 

import axios from 'axios';

const Ejecutarsqlnodepost = async (url, data) => {

  try {
      const res = await axios.post(url, data)
      const  resp = await res.data;
//      console.log(resp)
      return resp;
  } catch (error) {
    console.error(error)
  }
}

export default Ejecutarsqlnodepost