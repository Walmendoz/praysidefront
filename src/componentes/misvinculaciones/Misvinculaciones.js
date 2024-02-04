import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Misvinculacionesestilos.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

// Utilidades
import Ejecutarsqlnode from '../../conexiones/Ejecutarsqlnode';

const Misvinculaciones = (props) => {
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
    	
/*    1 Juan 3:17:	Pero el que tiene bienes de este mundo y ve a su hermano tener necesidad, y cierra contra él su corazón, ¿cómo mora el amor de Dios en él?
    1 Juan 4:7:	Amados, amémonos unos a otros; porque el amor es de Dios. Todo aquel que ama, es nacido de Dios, y conoce a Dios.
*/
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


    //style={{ width: '100%', height: 350 }}
//<PerfectScrollbar style={{ width: '100%', height: 'calc(100vh - 190px)', left: 'unset', right: '0' }}
//>
//</PerfectScrollbar>
    return (
        <div className='divcolumnasexternomisvinculaciones'>
            <div className='divfilasinternomisvinculaciones'>

                <div className='divtitulomisvinculaciones'>
                    <p className='parrafotitulomisvinculaciones'>
                        Mis Vinculaciones
                    </p>
                </div>
            
                <div className='divexternoiconosmisvinculaciones'>
                    <div className='divinternoiconosmisvinculaciones'>
                        <div className='iconomisvinculaciones'>
                            <IconButton  
                                color="inherit" 
                                aria-label="add" 
                                onClick={() => props.abrircerrarmodalministerio()}   
                                > 
                            <AddIcon/> 
                            </IconButton>
                        </div>
                        <div className='divtituloiconosmisvinculaciones'>
                            <p className='parrafotituloiconosmisvinculaciones'>
                                Ministerio
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Scrollbars style={{ width: '100%', height: '100%'}} >
                {props.arraydeministerios.length > 0 ? (
                    props.arraydeministerios.map((fila, index) => (
                    <div  
                        className='divmisvinculacionescard'
                        onClick={() => props.iramyroom()}   

                    >
                        <div  
                            className='divmisvinculacionescardarriba'
                        >
                            <p className='parrafocitamisvinculaciones'>
                                {fila.nombre} 
                            </p>
                        </div>

                        <div  
                            className='divmisvinculacionescardabajo'
                        >
                            <p className='parrafotextomisvinculaciones'>
                            {fila.emailpropietario} 
                            </p>
                        </div>
              
                    </div>

                    ))
                ) : null
                }    
            </Scrollbars>


        </div>
  
    )
}

export default Misvinculaciones;
