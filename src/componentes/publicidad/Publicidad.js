import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Publicidadestilos.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import imagen1 from '../../imagenes/anunciantes/fresaldssand01h.png'
import imagen2 from '../../imagenes/anunciantes/mendozmall01h.png'
import imagen3 from '../../imagenes/anunciantes/tids03v.png'
import imagen4 from '../../imagenes/anunciantes/waldo01p.png'

const Publicidad = (props) => {
    const navegar = useNavigate();

    useEffect(() => {
        if (props.logueado === false){
          navegar('/Iniciarsesion');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [labelsolicitaoracion, setLabelsolicitaoracion] = useState('Solicita oracion');
    const [labelconsejeria, setLabelconsejeria] = useState('Consejeria');
    const [labelcursos, setLabelcursos] = useState('Cursos gratis');
    const [labelapoyoministerial, setLabelapoyoministerial] = useState('Apoyo ministerial');

    const lista = [
        {nombre:'Grupo de oracion Cristo viene pronto',
        cantidad:'12 personas orando'},
        {nombre:'Grupo de oracion Cristo viene pronto',
        cantidad:'12 personas orando'},
        {nombre:'Grupo de oracion Cristo viene pronto',
        cantidad:'12 personas orando'}
    ]
    useEffect(() => { 
        const poneridioma = () => {
            if (props.idiomaestablecido === 'español'){
                setLabelsolicitaoracion('Solicita oracion');
                setLabelconsejeria('Consejeria');
                 setLabelcursos('Cursos gratis');
                setLabelapoyoministerial('Apoyo ministerial');
                        
            }
            if (props.idiomaestablecido === 'frances'){
                setLabelsolicitaoracion('Solicita oracion');
                setLabelconsejeria('Consejeria');
                 setLabelcursos('Cursos gratis');
                setLabelapoyoministerial('Apoyo ministerial');
            }
            if (props.idiomaestablecido === 'ingles'){
                setLabelsolicitaoracion('Solicita oracion');
                setLabelconsejeria('Consejeria');
                 setLabelcursos('Cursos gratis');
                setLabelapoyoministerial('Apoyo ministerial');
            }
            if (props.idiomaestablecido === 'portugues'){
                setLabelsolicitaoracion('Solicita oracion');
                setLabelconsejeria('Consejeria');
                 setLabelcursos('Cursos gratis');
                setLabelapoyoministerial('Apoyo ministerial');
            }

        }
           poneridioma()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.idiomaestablecido])

    const ventanaprevia = () => {
        navegar(-1)
    }
  
    return (
      <div className='divfilasexternopublicidad'>
          <img className = 'imagenanunciante' 
              src={imagen1} alt = 'imagen1'
          />
          <img className = 'imagenanunciante' 
              src={imagen2} alt = 'imagen2'
          />
          <img className = 'imagenanunciante' 
              src={imagen3} alt = 'imagen3'
          />
          <img className = 'imagenanunciante' 
              src={imagen4} alt = 'imagen4'
          />
      </div>
  
)
}

export default Publicidad;
