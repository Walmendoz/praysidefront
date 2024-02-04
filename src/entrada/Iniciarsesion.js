import React, { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";


import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader";

// Imagenes
import logopersona from '../imagenes/persona-Ps-blue.png'

// Utilidades
import Ejecutarsqlnode from '../conexiones/Ejecutarsqlnode';
import '../App.css'

//<p onClick={() => navegar("/Crearcuenta")}>Deseo Registrame gratis</p>

const Iniciarsesion = (props) => {

    const navegar = useNavigate();
    //    const idioma = props.idiomaestablecido;
 
    //  useState
    const [resultadousuario, setResultadousuario] = useState([]);
    const [dataemail, setDataemail] = useState('-');
    const [dataclave, setDataclave] = useState('');
    const [logueando, setLogueando] = useState(false);
    const [tituloiniciarsesion, setTituloiniciarsesion] = useState('JUNTOS EN ORACION');
    const [bienvenidoiniciarsesion, setBienvenidoiniciarsesion] = useState('Bienvenido!');
    const [placeholderemail, setPlaceholderemail] = useState('Email');
    const [placeholderclave, setPlaceholderclave] = useState('Contraseña');
    const [iniciarSesion, setIiniciarSesion] = useState('Iniciar Sesión');
    const [labellinkcrearcuenta, setLabellinkcrearcuenta] = useState('Crear una cuenta');
    const [labellinkrecuperarclave, setLabellinkrecuperarclave] = useState('Recuperar contraseña');
    const [avisoemail, setAvisoemail] = useState('Email no encontrado');
    const [avisoclave, setAvisoclave] = useState('Contraseña no encontrada');
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    useEffect(() => {
        const obtenerdatosusuario = () => {
            if (dataemail !== '-' && dataemail !== undefined){
//                var url = props.midominio + `/apis/buscarusuario.php?email=${dataemail}`;
                var url = props.midominionode + `/usuarios/buscarusuariocorreo/${dataemail}`;
                Ejecutarsqlnode(url).then((info) => {
                setResultadousuario(info)
              })
        
            }  
        }
        obtenerdatosusuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataemail, dataclave])
    
     useEffect(() => { 
        const poneridioma = () => {
            if (props.idiomaestablecido === 'español'){
                setTituloiniciarsesion('JUNTOS EN ORACION')
                setBienvenidoiniciarsesion('Bienvenido!')
                setPlaceholderemail('Email')
                setPlaceholderclave('Contraseña')
                setIiniciarSesion('Iniciar Sesión')
                setLabellinkcrearcuenta('Crear una cuenta')
                setLabellinkrecuperarclave('Recuperar contraseña')
                setAvisoemail('Email no encontrado');
                setAvisoclave('Contraseña incorrecta');
            }
            if (props.idiomaestablecido === 'frances'){
                setTituloiniciarsesion('ENSEMBLE EN PRIÈRE')
                setBienvenidoiniciarsesion('Bienvenu!')
                setPlaceholderemail('E-mail')
                setPlaceholderclave('Mot de passe')
                setIiniciarSesion('Se connecter')
                setLabellinkcrearcuenta('créer un compte')
                setLabellinkrecuperarclave('Récupérer mot de passe')
                setAvisoemail('E-mail pas trouvé');
                setAvisoclave('Mot de passe incorrect');
            }
            if (props.idiomaestablecido === 'ingles'){
                setTituloiniciarsesion('PRAY SIDE BY SIDE')
                setBienvenidoiniciarsesion('Welcome!')
                setPlaceholderemail('Email')
                setPlaceholderclave('Password')
                setIiniciarSesion('Log in')
                setLabellinkcrearcuenta('Create an account')
                setLabellinkrecuperarclave('Recover password')
                setAvisoemail('Email Not found');
                setAvisoclave('Incorrect password');
            }
            if (props.idiomaestablecido === 'portugues'){
                setTituloiniciarsesion('JUNTOS EM ORAÇÃO')
                setBienvenidoiniciarsesion('Bem-vindo!')
                setPlaceholderemail('Email')
                setPlaceholderclave('Senha')
                setIiniciarSesion('Iniciar sessão')
                setLabellinkcrearcuenta('criar uma conta')
                setLabellinkrecuperarclave('Recuperar senha')
                setAvisoemail('Email nao encontrado');
                setAvisoclave('Senha incorreta');
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
            if (dataemail !== '-' && dataemail !== undefined){
                if (resultadousuario.length > 0){
                    setLogueando(false)
                    if (resultadousuario[0].clave === dataclave){   
                        props.setLogueado(true)
                        props.setUsuariocorreo(dataemail)
                        props.setUsuarionombre(resultadousuario[0].nombre)
                        props.setIdiomaestablecido(resultadousuario[0].idioma)

                        localStorage.setItem('logueado', 'true');
                        localStorage.setItem('email',dataemail);
                        localStorage.setItem('nombre',resultadousuario[0].nombre);
                        localStorage.setItem('idioma', resultadousuario[0].idioma);

                        navegar(`/Mipanel`)
                    } else {
                        Swal.fire(avisoclave)
                    }
                } else {
                    Swal.fire(avisoemail)
                    setLogueando(false)
                }
            }
        }
        buscardatos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultadousuario])
   
    const onSubmit = (data, evento) => {
        setLogueando(true)
        setDataemail(data.email)
        setDataclave(data.clave)

    }

//       <div className = {estilo.divimagen}>
//       <img src={imagenusuario} alt = 'Avatar de Usuario'/>
//    </div>
//):(<Loader type="BallTriangle" color="#0d47a1" height="50" width="50" />


    return (
        
        <Fragment>
            <div className='divrootiniciarsesion'>
                <div className='divroothijoiniciarsesion'>
                    <div className='divtituloiniciarsesion'>
                        <h3 className='htituloiniciarsesion'>{tituloiniciarsesion}</h3>
                    </div>
                    <div className='divbienvenidoiniciarsesion'>
                        <h4 className='htituloiniciarsesion'>{bienvenidoiniciarsesion}</h4>
                    </div>

                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className='divform'
                    >
                        <input 
                            placeholder = {placeholderemail}
                            className='campoiniciarsesion'
                            autocomplete = "email"
                            autoFocus = 'true'
                            {...register
                                ("email", 
                                    { required:{ value: true, message:"* Dato Obligatorio" },
                                    minLength:{value:4, message:"* Minimo cuatro caracteres"}}
                                )}
                        />
                        {errors.email && <span>{errors.email.message}</span>}

                        {/* include validation with required or other standard HTML validation rules */}
                        <input
                            className='campoiniciarsesion'
                            placeholder = {placeholderclave}
                            autocomplete = "current-password"
                            type='password'
                            {...register("clave", 
                                { required:{ value: true, message:"* Dato Obligatorio" }}
                            )} 
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.clave && <span>{errors.clave.message}</span>}

                        <input type="submit" className = 'botoniniciarsesion' value ={iniciarSesion}/>
                
                    </form>
                    {logueando? (<BarLoader color="#0d47a1" size={250} />
                    ):(<span></span>
                    )}

                    <div className = 'divlinkregistroexterno'>

                        <div className = 'divlinkregistrointerno'>
                            <div className = 'linkregistroboton'>
                                <Link to="/Crearcuenta" >{labellinkcrearcuenta}</Link>
                            </div>
                        </div>

                        <div className = 'divlinkregistrointerno'>
                            <div className = 'linkregistroboton'>
                                <Link to="/Recuperarclave" >{labellinkrecuperarclave}</Link>
                            </div>
                        </div>
    
                    </div>

                    <div className = 'divcolumnascenteriniciarsesion'>
                            <img className = 'imageniniciarsesion' 
                                src={logopersona} alt = 'prayside.com'
                            />
                    </div>

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

export default Iniciarsesion;

//  ):(<span>Cargando...</span>)}
// <Loader type="BallTriangle" color="#0d47a1" height="100" width="100" />
// <Loader type="Circles" color="#0d47a1" height="100" width="100" />
