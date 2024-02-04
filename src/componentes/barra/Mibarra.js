import React, { useState, useEffect } from "react";
import {AppBar, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {useNavigate} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

import './Mibarraestilos.css'
import Menudebotones from "../menu/Menudebotones";
/*const navegar = useNavigate();
const cerrarsesion = () => {
  props.setLogueado(false)
  navegar(`/Iniciarsesion`)
}

const iramensajes = () => {
  navegar(`/Iniciarsesion`)
}*/

const Mibarra = (props) => {

  const [titulomibarra, setTitulomibarra] = useState('PANEL DE FORTALEZA');
  
  useEffect(() => { 
    const poneridioma = () => {
        if (props.idiomaestablecido === 'español'){
            setTitulomibarra('PANEL DE FORTALEZA')
        }
        if (props.idiomaestablecido === 'frances'){
          setTitulomibarra('PANNEAU FORTERESSE')
        }
        if (props.idiomaestablecido === 'ingles'){
          setTitulomibarra('STRENGTH PANEL')
        }
        if (props.idiomaestablecido === 'portugues'){
          setTitulomibarra('PAINEL DE FORTALEZA')
        }

    }
      poneridioma()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.idiomaestablecido])

  const [mostrarmenudebotones, setMostrarmenudebotones] = useState(false);

  const medidapantalla = () => {
      if (window.innerWidth < 481){
          setMostrarmenudebotones(false);
      }else if(window.innerWidth > 480 && window.innerWidth < 667){
          setMostrarmenudebotones(false);

      }else if(window.innerWidth > 668 && window.innerWidth < 867){
          setMostrarmenudebotones(true);

      }else if(window.innerWidth > 868 && window.innerWidth < 1000){
          setMostrarmenudebotones(true);

      }else if(window.innerWidth > 999){
          setMostrarmenudebotones(true);
     }
  }   
  
  
  window.addEventListener("resize", function(){
      // tu código aquí
      medidapantalla();

  });

  useEffect(() => {
      medidapantalla();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

/*<AppBar className="divappbar">
        <Toolbar className="divfilasexternotoolbar">
*/

  return(

<div className="divappbar">
        <div className="divfilasinternolefttoolbar">
            <IconButton  
                color="inherit" 
                aria-label="menu" 
                onClick={() => props.accionAbrirdrawer()}   
            > 
                <MenuIcon/> 
            </IconButton>
        </div>
        {mostrarmenudebotones ?
            <Menudebotones
              presionogrupo={props.presionogrupo}
              presionodevocional={props.presionodevocional}
              presionoconcordancia={props.presionoconcordancia}

            />
        :   null
        }
        <div className="divfilasinternocentertoolbar">
            <p className="parrafotitulobarra">
                 {titulomibarra}
            </p>
        </div>

        <div className="divfilasinternorighttoolbar">
            <p className="parrafousuariobarra">
                {props.usuarionombre.charAt(0).toUpperCase() + props.usuarionombre.slice(1)}&nbsp;&nbsp;
            </p>
            <PersonIcon />
        </div>

      </div>
  )

}

export default Mibarra;