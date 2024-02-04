import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css'
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2'

// Utilidades
import Ejecutarsqlnode from '../conexiones/Ejecutarsqlnode';
import Ejecutarsqlnodepost from '../conexiones/Ejecutarsqlnodepost';

//componentes
import Mibarra from '../componentes/barra/Mibarra'
import Misvinculaciones from '../componentes/misvinculaciones/Misvinculaciones';
import Redsocial from '../componentes/redsocial/Redsocial';
import Midrawer from '../componentes/drawer/Midrawer';
import Grupodeoracion from '../componentes/grupos/Grupodeoracion';
import Menudebotones from '../componentes/menu/Menudebotones';
import Publicidad from '../componentes/publicidad/Publicidad';
import Publicidadhorizontal from '../componentes/publicidad/Publicidadhorizontal';
import Crearministerio from '../componentes/misvinculaciones/Crearministerio';

const Mipanel = (props) => {
    const navegar = useNavigate();
    const [usuariosdeprueba, setUsuariosdeprueba] = useState([]);
    const [usuariosdepruebalogin, setUsuariosdepruebalogin] = useState([]);
    const [usuariosdepruebaconsulta, setUsuariosdepruebaconsulta] = useState([]);
    const [mostrargrupo, setMostrargrupo] = useState(false);
    const [mostrardevocional, setMostrardevocional] = useState(false);
    const [mostrarconcordancia, setMostrarconcordancia] = useState(false);
    const [mostrarpublicidad, setMostrarpublicidad] = useState(false);
    const [mostrarmenudebotones, setMostrarmenudebotones] = useState(false);
    const [openmodalministerio, setOpenmodalministerio] = useState(false);

    const [buscarministerio, setBuscarministerio] = useState(true);
    const [arraydeministerios, setArraydeministerios] = useState([]);
    const [okministerioregistrado, setOkministerioregistrado] = useState(false);

    const [buscargruposdeoracion, setBuscargruposdeoracion] = useState(true);
    const [arraydegruposdeoracion, setArraydegruposdeoracion] = useState([]);
    useEffect(() => {
        const obtenerministerios = () => {
            if (props.usuariocorreo !== '' && props.usuariocorreo !== undefined){
                var url = props.midominionode + `/vinculaciones/buscarministerios/${props.usuariocorreo}`;
                Ejecutarsqlnode(url).then((info) => {
                setArraydeministerios(info)
            })
            }        
        }
        obtenerministerios()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buscarministerio])

    useEffect(() => {
        const obtenergruposdeoracion = () => {
            if (props.usuariocorreo !== '' && props.usuariocorreo !== undefined){
                var url = props.midominionode + `/gruposdeoracion/buscargruposdeoracion`;
                Ejecutarsqlnode(url).then((info) => {
                setArraydegruposdeoracion(info)
            })
            }        
        }
        obtenergruposdeoracion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buscargruposdeoracion])

    // Al iniciar el componente
    useEffect(() => {
        const iniciarcomponente = () => {
            setArraydeministerios([])
            setBuscarministerio(!buscarministerio)

            setArraydegruposdeoracion([])
            setBuscargruposdeoracion(!buscargruposdeoracion)
        }
        iniciarcomponente()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const actualizarlistadeministerios = () => {
            setArraydeministerios([])
            setBuscarministerio(!buscarministerio)

            setArraydegruposdeoracion([])
            setBuscargruposdeoracion(!buscargruposdeoracion)
        }
        actualizarlistadeministerios()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [okministerioregistrado])

    // Probando servidor nodejs
// useEffect(() => {
//     const obtenerdatosusuarioprueba = () => {
//           var url = `https://ejemplosoga.herokuapp.com/usuariosprueba`;
//           Ejecutarsqlnode(url).then((info) => {
//             setUsuariosdeprueba(info)
//           })
    
//     }
//     obtenerdatosusuarioprueba()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [])


// useEffect(() => {
//     const obtenerusuariospruebaconsulta = () => {
//         var name = 'Bernardo'
//         var pais = 'CO'
//         var url = `https://ejemplosoga.herokuapp.com/usuariosprueba/consulta/`+ name + '/'+pais;

//           Ejecutarsqlnode(url).then((info) => {
//             setUsuariosdepruebaconsulta(info)
//           })
    
//     }
//     obtenerusuariospruebaconsulta()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [])

//  useEffect(() => {
//     const obtenerusuariospruebalogin = () => {
//         var datosobjeto =   {   nombre: 'Bernardo',
//                                 edad: '55',
//                                 genero :'M'
//                             }
//         var url = `https://ejemplosoga.herokuapp.com/usuariosprueba/login`;

//           Ejecutarsqlnodeobjeto(url,datosobjeto).then((info) => {
//             setUsuariosdepruebalogin(info)
//           })
    
//     }
//     obtenerusuariospruebalogin()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [])


// useEffect(() => {
//     const obtenerusuariospruebaconsulta = () => {
//         var objetodatos = {
//             nombre : 'walter steve',
//             pais : 'CO'
//         }
//         var url = `https://ejemplosoga.herokuapp.com/usuariosprueba/consulta`;

//           Ejecutarsqlnodeobjeto(url,objetodatos).then((info) => {
//             setUsuariosdepruebaconsulta(info)
//           })
    
//     }
//     obtenerusuariospruebaconsulta()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [])

const medidapantalla = () => {
        if (window.innerWidth < 481){
            setMostrargrupo(true);
            setMostrardevocional(false);
            setMostrarconcordancia(false);
            setMostrarpublicidad(false);
            setMostrarmenudebotones(true);
        }else if(window.innerWidth > 480 && window.innerWidth < 667){
            setMostrargrupo(true);
            setMostrardevocional(false);
            setMostrarconcordancia(false);
            setMostrarpublicidad(false);
            setMostrarmenudebotones(true);

        }else if(window.innerWidth > 668 && window.innerWidth < 867){
            setMostrargrupo(true);
            setMostrardevocional(true);
            setMostrarconcordancia(false);
            setMostrarpublicidad(false);
            setMostrarmenudebotones(false);

        }else if(window.innerWidth > 868 && window.innerWidth < 1000){
            setMostrargrupo(true);
            setMostrardevocional(true);
            setMostrarconcordancia(true);
            setMostrarpublicidad(false);
            setMostrarmenudebotones(false);

        }else if(window.innerWidth > 999){
            setMostrargrupo(true);
            setMostrardevocional(true);
            setMostrarconcordancia(true);
            setMostrarpublicidad(true);
            setMostrarmenudebotones(false);
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

    
    /* 
Get the size of the device screen
var screenWidth = screen.width;
var screenHeight = screen.height;
altura: 657 
ancho:  1366

// Get the browser window size
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Get the size of the entire webpage
const pageWidth  = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

                    {mostrarpublicidad ?
                        <div className='divroothijomipanelpublicidad'>
                            <Publicidad/>
                        </div>
                    :   null
                    }



*/
    useEffect(() => {
        if (props.logueado === false){
          navegar('/Iniciarsesion');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [abrirdrawer,setAbrirdrawer] = useState(false)

    const accionAbrirdrawer = () => {
        setAbrirdrawer(!abrirdrawer)
    }

    const iramyroom = () => {
        navegar('/Myroom');
    }
    

    const presionogrupo = () => {
        if (window.innerWidth < 481){
            setMostrargrupo(true);
            setMostrardevocional(false);
            setMostrarconcordancia(false);
        } else if(window.innerWidth > 480 && window.innerWidth < 667){
            setMostrargrupo(true);
            setMostrardevocional(false);
            setMostrarconcordancia(false);

        }else if(window.innerWidth > 668 && window.innerWidth < 867){
            setMostrargrupo(true);
            setMostrardevocional(true);
            setMostrarconcordancia(false);
        }

    }

    const presionodevocional = () => {
        if (window.innerWidth < 481){
            setMostrargrupo(false);
            setMostrardevocional(true);
            setMostrarconcordancia(false);
        } else if(window.innerWidth > 480 && window.innerWidth < 667){
            setMostrargrupo(false);
            setMostrardevocional(true);
            setMostrarconcordancia(false);
        }
    }

    const presionoconcordancia = () => {
        if (window.innerWidth < 481){
            setMostrargrupo(false);
            setMostrardevocional(false);
            setMostrarconcordancia(true);
        } else if(window.innerWidth > 480 && window.innerWidth < 667){
            setMostrargrupo(false);
            setMostrardevocional(false);
            setMostrarconcordancia(true);

        }else if(window.innerWidth > 668 && window.innerWidth < 867){
            setMostrargrupo(false);
            setMostrardevocional(true);
            setMostrarconcordancia(true);
        }

    }

/* Constantes necesarias para el uso de un MOdal  */
const abrircerrarmodalministerio = () => {
    setOpenmodalministerio(!openmodalministerio)

}

//   const ayudausuarios = () => {
//     setListadeayuda(arraydeusuarios)
//     setOpenmodal(true)
//   }

//   const seleccionado = (ayudacodigo, ayudanombre) => {
//     //variables del formulario 
//     setNombreseleccionado(ayudanombre)
//     setOpenmodal(false)
//     setMostrarresponsable(!mostrarresponsable)
//   }
/* Final de Constantes necesarias para el uso de un MOdal  */

return (
        <div className='divrootmipanel'>
            <Mibarra
                idiomaestablecido={props.idiomaestablecido}
                usuarionombre={props.usuarionombre}
                accionAbrirdrawer={accionAbrirdrawer}
                presionogrupo={presionogrupo}
                presionodevocional={presionodevocional}
                presionoconcordancia={presionoconcordancia}
            />
            
            <Midrawer 
                variant="temporary"
                abrirdrawer={abrirdrawer}
                accionAbrirdrawer={accionAbrirdrawer}
                usuarionombre={props.usuarionombre} setUsuarionombre={props.setUsuarionombre}
                usuariocorreo={props.usuariocorreo} setUsuariocorreo={props.setUsuariocorreo}
                midominio={props.midominio}
                idiomaestablecido={props.idiomaestablecido}
                logueado={props.logueado} setLogueado={props.setLogueado}
            />
        

            <div className='divroothijomipanel'>
                {mostrarmenudebotones ?
                    <div className='divroothijomipanelsuperior'>
                        <Menudebotones
                            presionogrupo={presionogrupo}
                            presionodevocional={presionodevocional}
                            presionoconcordancia={presionoconcordancia}
                        />
                    </div>
                :   null
                }
                <div className='divroothijomipanelcentral'>
                    {mostrargrupo ?
                        <div className='divroothijomipanelgrupo'>
                            <Grupodeoracion
                                usuariocorreo={props.usuariocorreo}
                                usuarionombre={props.usuarionombre} 
                                midominionode={props.midominionode}
                                arraydegruposdeoracion={arraydegruposdeoracion}
                            />
                            <div className='separadorgris'></div>
                            <Publicidadhorizontal/>
                        </div>

                    :   null
                    }

                    {mostrardevocional ?
                        <div className='divroothijomipaneldevocional'>
                            <Redsocial
                                usuariocorreo={props.usuariocorreo}
                                usuarionombre={props.usuarionombre} 
                                midominionode={props.midominionode}
                            
                            />
                            <div className='separadorgris'></div>
                            <Publicidadhorizontal/>
                        </div>
                    :   null
                    }

                    {mostrarconcordancia ?
                        <div className='divroothijomipanelconcordancia'>
                            <Misvinculaciones 
                                iramyroom = {iramyroom} 
                                abrircerrarmodalministerio={abrircerrarmodalministerio}
                                usuariocorreo={props.usuariocorreo}
                                usuarionombre={props.usuarionombre} 
                                arraydeministerios={arraydeministerios}
                            />
                            <div className='separadorgris'></div>
                            <Publicidadhorizontal/>
                        </div>
                    :   null
                    }

                </div>
                <Modal 
                open={openmodalministerio}
                onClose={abrircerrarmodalministerio}
            >
                <Crearministerio
                    abrircerrarmodalministerio={abrircerrarmodalministerio}  
                    midominionode={props.midominionode}
                    usuariocorreo={props.usuariocorreo}
                    usuarionombre={props.usuarionombre}
                    setOkministerioregistrado={setOkministerioregistrado}
                    okministerioregistrado={okministerioregistrado}
                />
            </Modal> 
            </div>

</div>


)
}

export default Mipanel;
