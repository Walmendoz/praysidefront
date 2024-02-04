//import React from 'react';  axios.get('http://localhost:8080/item/' + id)                               'mode': 'no-cors', 
//'mode': 'no-cors', 

import axios from 'axios';

const Ejecutarsqlnodeput = async (url, data) => {

  try {
      const res = await axios.put(url, data)
      const  resp = await res.data;
      return resp;
  } catch (error) {
    console.error(error)
  }
}

export default Ejecutarsqlnodeput