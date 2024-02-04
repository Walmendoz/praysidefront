import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Tareasestilos.css'
import { Scrollbars } from 'react-custom-scrollbars-2';

//import imagen from '../../imagenes/imagenmetas.jpg'
import IconButton from '@mui/material/IconButton';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChatIcon from '@mui/icons-material/Chat';


const Tareas = (props) => {
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
    const [placeholdersolicitaroracion, setPlaceholdersolicitaroracion] = useState('Escribe tu peticion');
    const [sworando, setSworando] = useState(1);
    const [lista, setLista] = useState([{congregacion: 'Concilio LatinoAmericano', pastor: 'Rufino Monterrosa'}]);

    // const lista = [
    //     // {nombremetas:'Todo lo puedo en Cristo que me fortalece',
    //     // lidermetas:'GLORIA'},
    //     // {nombremetas:'Jehova es mi refugio',
    //     // lidermetas:'CARLOS'},
    //     // {nombremetas:'SI Dios con nosotros, quien contra nosotros',
    //     // lidermetas:'DOLLY'},

    // ]
    	
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

    const checkboxorando = () => {
        // marcado es igual a 1 sin marcar es igual a 0
/*            if (fila.cumplido === 1){
                setRegistromatriz({ codigofase: fila.codigofase, 
                    nombre: fila.nombre, 
                    cumplido: 0, 
                    })
        
            }else{
        
                setRegistromatriz({ codigofase: fila.codigofase, 
                    nombre: fila.nombre,  
                    cumplido: 1, 
                    }) 
                  
        //
                    let arrayauxiliar =[]
                    if (arraydenotificar.length > 0){
                        for (var i = 0; i < arraydenotificar.length; i++) {
                            if (arraydenotificar[i].codigofase === fila.codigofase){            
                                var today = moment().format('YYMMDDHHmmss');
                                var random  = Math.random() * (9999 - 1000) + 1000
                                var codigoregistro  = (today + random).split('.')[0] 
                                var fechayhora = moment().format('YYYY-MM-DD HH:mm:ss')
                                var mensaje = fila.nombre + ', de: ' + referencia +' ' + nombrereferencia +  ', **  OK  **'
                                arrayauxiliar.push({registro: codigoregistro, 
                                    de: props.usuario,
                                    para: arraydenotificar[i].responsable,
                                    fechahora: fechayhora,
                                    mensaje: mensaje })
                            }
                        }
                    }
                    setArraydemensajes(arrayauxiliar)
        
        ///
                }*/
           
    }
        

    const ventanaprevia = () => {
        navegar(-1)
    }
  //style={{ width: '100%', height: 350 }}
//<PerfectScrollbar style={{ width: '100%', height: 'calc(100vh - 190px)', left: 'unset', right: '0' }}
//>
//</PerfectScrollbar>
    return (
        <div className='divfilasexternometas'>
            <div className='divtitulometas'>
                <div className='divparrafotitulometas'>
                    <p className='parrafotitulometas'>
                        Tareas 
                    </p>
                </div>
                <div className='iconometas'>
                <input
                      name="isGoing"
                      type="checkbox"
                      checked={sworando}
                      onChange={() => checkboxorando}
                       />  
                        Orando
                    </div>
            
            </div>
            <div className='separador'>
                </div>
            
            <Scrollbars style={{ width: '100%', height: '100%'}} >
                {lista.length > 0 ? (
                    lista.map((fila, index) => (
                        <div  
                        className='divtareascard'
                        onClick={() => props.iramyroom()}   

                    >
                        <div  
                            className='divtareascardarriba'
                        >
                            <p className='parrafocita'>
                                {fila.congregacion} 
                            </p>
                        </div>

                        <div  
                            className='divtareascardabajo'
                        >
                            <p className='parrafotexto'>
                            {fila.pastor} 
                            </p>
                        </div>
              
                    </div>

                    ))
                ) : null
                }    
            </Scrollbars>

            <div className='divexternoiconosmetas'>
                <div className='divinternoiconosmetas'>
                    <div className='iconometas'>
                        <IconButton  
                            color="inherit" 
                            aria-label="chat" 
                            onClick={() => props.accionAbrirdrawer()}   
                        > 
                            <ChatIcon/> 
                        </IconButton>
                        Pedir oracion
                    </div>

                    <div className='iconometas'>
                        <IconButton  
                            color="inherit" 
                            aria-label="add" 
                            onClick={() => props.accionAbrirdrawer()}   
                        > 
                            <AddBoxRoundedIcon/> 
                        </IconButton>
                        Nuevo metas
                    </div>
                    
                    <div className='iconometas'>
                        <IconButton  
                            color="inherit" 
                            aria-label="filter" 
                            onClick={() => props.accionAbrirdrawer()}   
                        > 
                            <FilterAltIcon/> 
                        </IconButton>
                        Filtrar
                    </div>
                </div>
            </div>
        </div>
  
)
}

export default Tareas;
