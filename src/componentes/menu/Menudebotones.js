import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Menudebotonesestilos.css'
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import ChurchIcon from '@mui/icons-material/Church';


// Imagenes
import logops from '../../imagenes/ps-icon-azul.png'

//componentes

const Menudebotones = (props) => {
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

 
    return (
            <div className='divfilasexternomenudebotones'>
                <div className='divlogops'>
                    <img className = 'imagenlogops' 
                        src={logops} alt = 'prayside.com'
                    />
                </div>

                <div className='divlogonombreps'>
                    <h4 className = 'botonmenudebotonesdos'>
                        Prayside
                    </h4>
                </div>
                <div className='diviconos'>
                    <IconButton  
                        color="inherit" 
                        aria-label="home" 
                        onClick={() => props.presionogrupo()}   
                    > 
                        <HomeOutlinedIcon/> 
                    </IconButton>
                </div>
                <div className='diviconos'>
                    <IconButton  
                        color="inherit" 
                        aria-label="devocional" 
                        onClick={() => props.presionodevocional()}   
                    > 
                        <GroupsOutlinedIcon/> 
                    </IconButton>
                </div>
                <div className='diviconos'>
                    <IconButton  
                        color="inherit" 
                        aria-label="concordancia" 
                        onClick={() => props.presionoconcordancia()}   
                    > 
                        <ChurchOutlinedIcon/> 
                    </IconButton>
                </div>
            </div>

)
}

export default Menudebotones;
