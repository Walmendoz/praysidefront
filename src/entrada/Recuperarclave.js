import React, { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";

import {useNavigate} from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
// ...


//import ArrowBack from '@mui/icons-material/AccessibilityNew';
// Imagenes

// Utilidades
import Ejecutarsqlnode from '../conexiones/Ejecutarsql';

// Archivos css
import '../App.css'

//<p onClick={() => navegar("/Crearcuenta")}>Deseo Registrame gratis</p>

const Recuperarclave = (props) => {

    const navegar = useNavigate();
 
    //  useState
    const [resultadousuario, setResultadousuario] = useState([]);
    
    const [pagina, setPagina] = useState(1);
    const [pregunta, setPregunta] = useState('');
    const [dataemail, setDataemail] = useState('-');
    const [clave, setClave] = useState('');
    const [swbuscarcorreo, setSwbuscarcorreo] = useState(false);
    const [swresultadousuario, setSwresultadousuario] = useState(false);
    const [swnotificacioniniciada, setSwnotificacioniniciada] = useState(false);

    const [titulopagina, setTitulopagina] = useState('JUNTOS EN ORACION');
    const [tituloventana, setTituloventana] = useState('Recuperar contraseña!');
    const [placeholderemail, setPlaceholderemail] = useState('Correo electronico');
    const [placeholderrespuesta, setPlaceholderrespuesta] = useState('Respuesta');

    const [labelbotonsiguiente, setLabelbotonsiguiente] = useState('Verificar correo');
    const [labelbotonrecuperarclave, setLabelbotonrecuperarclave] = useState('Recuperar contraseña');

    const [avisoemail, setAvisoemail] = useState('Correo no encontrado');
    const [avisorespuestamal, setAvisorespuestamal] = useState('Respuesta errada');
    const [avisorespuestabien, setAvisorespuestabien] = useState('La contraseña es: ');

    const initialFormState = { email: '', respuesta:  ''}
    const [arraydedatosiniciales, setArraydedatosiniciales] = useState(initialFormState)

//    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues : arraydedatosiniciales
    });

    // Valores por defecto
    useEffect(() => {
        const valoresinicialesdelform = () => {
            setValue("email",arraydedatosiniciales.email);
            setValue("respuesta",arraydedatosiniciales.respuesta);
        }
        valoresinicialesdelform()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const obtenerdatosusuario = () => {
            if (dataemail !== '-' && dataemail !== undefined){
//                var url = props.midominio + `/apis/buscarclave.php?email=${dataemail}`;
                var url = props.midominionode + `/usuarios/buscarclave/${dataemail}`;
                Ejecutarsqlnode(url).then((info) => {
                setResultadousuario(info)
              })
        
            }  
        }
        obtenerdatosusuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataemail, swbuscarcorreo])
    
    useEffect(() => { 
        const poneridioma = () => {
            if (props.idiomaestablecido === 'español'){
                setTitulopagina('JUNTOS EN ORACION')
                setTituloventana('Recuperar contraseña')

                setPlaceholderemail('Correo electronico')
                setPlaceholderrespuesta('Respuesta')

                setLabelbotonsiguiente('Verificar correo');
                setLabelbotonrecuperarclave('Recuperar contraseña');

                setAvisoemail('Correo no encontrado');
                setAvisorespuestamal('Respuesta errada');
                setAvisorespuestabien('La contraseña es: ');
            
            }
            if (props.idiomaestablecido === 'frances'){
                setTitulopagina('ENSEMBLE EN PRIÈRE')
                setTituloventana('Récupérer mot de passe')

                setPlaceholderemail('E-mail')
                setPlaceholderrespuesta('Réponse')

                setLabelbotonrecuperarclave('Récupérer mot de passe');
                setLabelbotonsiguiente('Vérifier E-mail');

                setAvisoemail('E-mail introuvable');
                setAvisorespuestamal('Mauvaise réponse');
                setAvisorespuestabien('Le mot de passe est: ');
            }
            if (props.idiomaestablecido === 'ingles'){
                setTitulopagina('PRAY SIDE BY SIDE')
                setTituloventana('Recover password')

                setPlaceholderemail('Email')
                setPlaceholderrespuesta('Answer')

                setLabelbotonrecuperarclave('Recover password');
                setLabelbotonsiguiente('Check mail');

                setAvisoemail('Email not found');
                setAvisorespuestamal('Wrong answer');
                setAvisorespuestabien('The password is: ');
            }
            if (props.idiomaestablecido === 'portugues'){
                setTitulopagina('JUNTOS EM ORAÇÃO')
                setTituloventana('Recuperar senha')
                setPlaceholderemail('Email')
                setPlaceholderrespuesta('Resposta')
                setLabelbotonrecuperarclave('Recuperar senha');
                setLabelbotonsiguiente('Verificar e-mail');

                setAvisoemail('Email não encontrado');
                setAvisorespuestamal('Resposta errada');
                setAvisorespuestabien('A senha é: ');
            }

        }
           poneridioma()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.idiomaestablecido])

      const cambiaridioma = (idioma) => {
        //variables de campos del formulario 
        props.setIdiomaestablecido(idioma)
        localStorage.setItem('idioma', idioma);
    }

    useEffect(() => {
        const buscardatos = () => {
            setPagina(1)
            if (swresultadousuario !== false){
                if (resultadousuario.length > 0){
                    setPregunta(resultadousuario[0].pregunta)
                    setPagina(2)
                }else{
                    Swal.fire(avisoemail)
                }
            }
        }
        buscardatos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultadousuario])
   
// Borrar clave despues de 5 segundos
    const actualizarnotificacion = () =>{
      setClave('')
    } 

    const iniciarnotificacion = () =>{
        const intervalo = setInterval(actualizarnotificacion, 8000);
        return () => clearInterval(intervalo);
      } 

    // useEffect(() => {
    //   const intervalo = setInterval(actualizarnotificacion, 8000);
    //   return () => clearInterval(intervalo);
    // }, []);

    const ventanaprevia = () => {
        navegar(`/`)
    }

    const formularioprevio = () => {
        setPagina(1)
    }

    const buscarcuentasubmit = (data, evento) => {
        setDataemail(data.email)
        setSwbuscarcorreo(!swbuscarcorreo)
        setSwresultadousuario(true)    
    }
    const verificarrespuestasubmit = (datos, evento) => {
        if(resultadousuario[0].respuesta.toLowerCase() === datos.respuesta.toLowerCase()){
            setClave(avisorespuestabien+resultadousuario[0].clave)
            if(swnotificacioniniciada !== true){
                iniciarnotificacion()
                setSwnotificacioniniciada(true)
            }
        }else{
            setClave(avisorespuestamal)
        }
    }

    return (
        
        <Fragment>
            <div className='divrootiniciarsesion'>
                <div className='divroothijoiniciarsesion'>
                    <div className='divtituloiniciarsesion'>
                        <h3 className='htituloiniciarsesion'>{titulopagina}</h3>
                    </div>
                    
                    <div className='divfilasexternoclose'>
                        {pagina === 2?(
                            <div className='divfilasinternoleftclose'>
                                <IconButton aria-label="back"                         
                                    onClick={() => formularioprevio()}
                                >
                                    <ArrowBackIcon>
                                    </ArrowBackIcon>
                                </IconButton>
                            </div>
                        ):(
                            <div className='divfilasinternoleftclose'>
                            </div>
                        )}

                        <div className='divfilainternocenterclose'>
                            <h4 className='htituloiniciarsesion'>{tituloventana}</h4>
                        </div>
                        <div className='divfilasinternorightclose'>
                            <IconButton aria-label="close"                         
                                onClick={() => ventanaprevia()}
                            >
                                <CloseIcon>
                                </CloseIcon>
                            </IconButton>
                        </div>
                    </div>

                        <form 
                            onSubmit={handleSubmit(buscarcuentasubmit)} 
                            className='divform'
                        >
                            <div className='divfilasleft'>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder = {placeholderemail}
                                    className='campocrearcuenta'
                                    autocomplete = "email"
                                    autoFocus = 'true'
                                    {...register
                                        ("email", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.email && <span>{errors.email.message}</span>}

                            </div>

                            <input type="submit" className = 'botoniniciarsesion' value ={labelbotonsiguiente}/>
                        </form>
                        {pagina === 2?(

                        <form 
                            onSubmit={handleSubmit(verificarrespuestasubmit)} 
                            className='divform'
                        >
                            <div className='divcolumnasnormal'>
                                <p
                                    className='parrafonormal'
                                    >{pregunta}?
                                </p>
                            </div>
                            <div className='divfilasleft'>
                                <input 
                                    type="text" 
                                    name="respuesta" 
                                    placeholder = {placeholderrespuesta}
                                    className='campocrearcuenta'
                                    autocomplete = "off"
                                    {...register
                                        ("respuesta", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.respuesta && <span>{errors.respuesta.message}</span>}

                            </div>

                            <input type="submit" className = 'botoniniciarsesion' value ={labelbotonrecuperarclave}/>

                            <div className='divcolumnascenternormal'>
                                <p
                                    className='parrafoerror'
                                    >{clave}
                                </p>
                            </div>
                
                        </form>
                    ):(
                        <span></span>
                    )}

                    <div className='divcopyrightiniciarsesion'>
                            
                        <p className='parrafocopyrightiniciarsesion'>
                            Prayside.com 2022
                        </p>

                    </div>

                    <div className = 'divfilascenteridiomas'>
                            
                        <p className='parrafoidiomas' onClick={() => cambiaridioma('ingles')}>
                            &nbsp;English&nbsp;
                        </p>
                        <p className='parrafoidiomas' onClick={() => cambiaridioma('español')}>
                            &nbsp;Español&nbsp;
                        </p>
                        <p className='parrafoidiomas' onClick={() => cambiaridioma('frances')}>
                            &nbsp;Française&nbsp;
                        </p>
                        <p className='parrafoidiomas' onClick={() => cambiaridioma('portugues')}>
                            &nbsp;Portugues&nbsp;
                        </p>


                    </div>

                </div>
            </div>
        </Fragment>
        
    )
}


export default Recuperarclave;


