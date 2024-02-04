import React, { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader";
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

// Imagenes

// Utilidades
import Ejecutarsqlnode from '../conexiones/Ejecutarsqlnode';
import Ejecutarsqlnodeput from '../conexiones/Ejecutarsqlnodeput';
import Ejecutarsqlnodedelete from '../conexiones/Ejecutarsqlnodedelete';
import '../App.css'

//<p onClick={() => navegar("/Crearcuenta")}>Deseo Registrame gratis</p>

const Editarcuenta = (props) => {

    const navegar = useNavigate();
 
    //  useState
    const [resultadousuario, setResultadousuario] = useState([]);
    const [arraydedatosparagrabar, setArraydedatosparagrabar] = useState([]);
    const [arraydedatosnosoyrobot, setArraydedatosnosoyrobot] = useState([]);
    const [arraydepaises, setArraydepaises] = useState([]);
    const [arraydeciudades, setArraydeciudades] = useState([]);
    const [listadeciudades, setListadeciudades] = useState([]);
    const [arraydeprovincias, setArraydeprovincias] = useState([]);
    const [arrayejecutado, setArrayejecutado] = useState([]);
    
    const [pagina, setPagina] = useState(1);
    const [pais, setPais] = useState('');
    const [provincia, setProvincia] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [genero, setGenero] = useState('');
    const [idiomapreferente, setIdiomapreferente] = useState('');
    const [nombregenero, setNombregenero] = useState('');
    const [dataemail, setDataemail] = useState('-');
    const [dataclave, setDataclave] = useState('');
    const [registrando, setRegistrando] = useState(false);
    const [okparagrabar, setOkparagrabar] = useState(false);
    const [okregistrado, setOkregistrado] = useState(false);
    const [sweliminar, setSweliminar] = useState(false);

    const [fechaok, setFechaok] = useState(true);
    const [generook, setGenerook] = useState(true);
    const [idiomapreferenteok, setIdiomapreferenteok] = useState(true);
    const [paisok, setPaisok] = useState(true);
    const [provinciaok, setProvinciaok] = useState(true);
    const [ciudadok, setCiudadok] = useState(true);

    const [titulopagina, setTitulopagina] = useState('JUNTOS EN ORACION');
    const [tituloventana, setTituloventana] = useState('Datos de mi cuenta');

    const [placeholderclave, setPlaceholderclave] = useState('Contraseña');
    const [placeholdernombre, setPlaceholdernombre] = useState('Nombres');
    const [placeholderapellido, setPlaceholderapellido] = useState('Apellidos');
    const [placeholderpregunta, setPlaceholderpregunta] = useState('Pregunta de recuperacion contraseña');
    const [placeholderrespuesta, setPlaceholderrespuesta] = useState('Respuesta');
    const [placeholdergenero, setPlaceholdergenero] = useState('Genero');
    const [placeholderidioma, setPlaceholderidioma] = useState('Idioma de su preferencia');
    const [placeholderpais, setPlaceholderpais] = useState('Pais');
    const [placeholderprovincia, setPlaceholderprovincia] = useState('Region');
    const [placeholderciudad, setPlaceholderciudad] = useState('Ciudad');

    const [labelbotonactualizarcuenta, setLabelbotonactualizarcuenta] = useState('Actualizar');
    const [labelbotoneliminarcuenta, setLabelbotoneliminarcuenta] = useState('Borrar cuenta');
    const [labelparrafopregunta, setLabelparrafopregunta] = useState('');
    const [labelfechadenacimiento, setLabelfechadenacimiento] = useState('');
    const [labelgenero, setLabelgenero] = useState('');
    const [labelgeneromasculino, setLabelgeneromasculino] = useState('');
    const [labelgenerofemenino, setLabelgenerofemenino] = useState('');
    const [labelgenerootro, setLabelgenerootro] = useState('');
    const [labelderesidencia, setLabelderesidencia] = useState('');
    
    const [labelerrordefecha, setLabelerrordefecha] = useState('');
    const [labelerrordegenero, setLabelerrordegenero] = useState('');
    const [labelerrordeidioma, setLabelerrordeidioma] = useState('');
    const [labelerrordepais, setLabelerrordepais] = useState('');
    const [labelerrordeprovincia, setLabelerrordeprovincia] = useState('');
    const [labelerrordeciudad, setLabelerrordeciudad] = useState('');

    const [avisocuentabiencreada, setAvisocuentabiencreada] = useState('Actualizacion exitosa');
    const [avisocuentaeliminada, setAvisocuentaeliminada] = useState('Cuenta ha sido eliminada');
    const [avisocuentaeliminadatitle, setAvisocuentaeliminadatitle] = useState("Seguro?")
    const [avisocuentaeliminadatext, setAvisocuentaeliminadatext] = useState("La informacion eliminada no se puede recuperar!")
    const [avisocuentaeliminadacancel, setAvisocuentaeliminadacancel] = useState(`Cancelar`)
    const [avisocuentaeliminadaconfirm, setAvisocuentaeliminadaconfirm] = useState(`Si, Eliminar`)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
//    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
  //      defaultValues : props.filactual
    //});

    // Valores por defecto
    useEffect(() => {
        const leercorreo = () => {
            setDataemail(props.usuariocorreo)
        }
        leercorreo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        const obtenerdatosusuario = () => {
            if (dataemail !== '-' && dataemail !== undefined){
//                var url = props.midominio + `/apis/buscardatosusuario.php?email=${dataemail}`;
                var url = props.midominionode + `/usuarios/buscardatosusuario/${dataemail}`;
                Ejecutarsqlnode(url).then((info) => {
                setResultadousuario(info)
              })
        
            }  
        }
        obtenerdatosusuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataemail])

    useEffect(() => {
        const valoresinicialesdelform = () => {
            if (resultadousuario !== undefined){
                if (resultadousuario.length > 0){
                    setValue("clave", resultadousuario[0].clave);
                    setValue("nombre", resultadousuario[0].nombre);
                    setValue("apellido", resultadousuario[0].apellido);
                    setValue("pregunta", resultadousuario[0].pregunta);
                    setValue("respuesta", resultadousuario[0].respuesta);
                    setValue("fechanacimiento", moment(resultadousuario[0].fechanacimiento).format('YYYY-MM-DD'));

                    setGenero(resultadousuario[0].genero);
                    setIdiomapreferente(resultadousuario[0].idioma);
                    setPais(resultadousuario[0].pais);
                    setProvincia(resultadousuario[0].provincia);
                    setCiudad(resultadousuario[0].ciudad);
                    
                    if (resultadousuario[0].genero == 0 ){
                        setNombregenero('masculino');
                    } 
                    if (resultadousuario[0].genero == 1 ){
                        setNombregenero('femenino');
                    } 
                    if (resultadousuario[0].genero == 2 ){
                        setNombregenero('otro');
                    } 
                } 
            }
        }
        valoresinicialesdelform()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[resultadousuario])
    
    // Buscar datos basicos
    useEffect(() => {
        const obtenerpaises = () => {
//            var url = props.midominio + `/apis/buscarpaises.php`;
            var url = props.midominionode + `/regionales/buscarpaises`;
            Ejecutarsqlnode(url).then((info) => {
                setArraydepaises(info)
              })
        
        }
        obtenerpaises()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const obtenerciudades = () => {
            if (pais !== '' && pais !== undefined){
//                var url = props.midominio + `/apis/buscarciudades.php?pais=${pais}`;
                var url = props.midominionode + `/regionales/buscarciudades/${pais}`;
                Ejecutarsqlnode(url).then((info) => {
                setArraydeciudades(info)
              })
            }        
        }
        obtenerciudades()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pais])
        
        useEffect(() => {
            const obtenerprovincias = () => {
                if (pais !== '' && pais !== undefined){
  ///                  var url = props.midominio + `/apis/buscarprovincias.php?pais=${pais}`;
                    var url = props.midominionode + `/regionales/buscarprovincias/${pais}`;
                    Ejecutarsqlnode(url).then((info) => {
                    setArraydeprovincias(info)
                  })
                }            
            }
            obtenerprovincias()
            //buscarlistadeciudadesp()

            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pais])

    useEffect(() => {
        const buscarlistadeciudades = () => {
            const arrayfiltrado = arraydeciudades.filter(fila => fila.provinciacodigo === provincia || fila.provinciacodigo ==='' )
            if (arrayfiltrado.length>0){
                setListadeciudades(arrayfiltrado);
            }
        } 
    
        buscarlistadeciudades()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provincia, arraydeciudades])

    const buscarlistadeciudadesp = () => {
        const arrayfiltrado = arraydeciudades.filter(fila => fila.provinciacodigo === provincia || fila.provinciacodigo ==='' )
        if (arrayfiltrado.length>0){
            setListadeciudades(arrayfiltrado);
        }
    } 

    // Buscar datos basicos

    // Grabar cuenta
    useEffect(() => {
        const actualizarcuenta =(arraydedatosparagrabar) => {

            if (okparagrabar === true){
                if (arraydedatosparagrabar.length > 0){
//                        var url = props.midominio + `/apis/actualizarcuenta.php`
                    var url = props.midominionode + `/usuarios/cambiarcuenta`
                    Ejecutarsqlnodeput(url,arraydedatosparagrabar).then((info) => {
                        setArrayejecutado(info)
                        setOkregistrado(true)
                    })
    
                }
            }        
        }
        actualizarcuenta(arraydedatosparagrabar)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arraydedatosparagrabar])    

    useEffect(() => {
        const irainicio =(arraydedatosparagrabar) => {
            if (okregistrado === true){
                Swal.fire(avisocuentabiencreada)
                navegar(-1)
            }        
        }
        irainicio()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [okregistrado])    

  // Eliminar usuario
  useEffect(() => {
    const grabareliminar = () => {
        if (dataemail !== '' && sweliminar === true){
//            var url = props.midominio + `/apis/eliminarusuario.php?email=${dataemail}`;
            var url = props.midominionode + `/usuarios/eliminarcuenta/${dataemail}`
            Ejecutarsqlnodedelete(url).then((info) => {
                setArrayejecutado(info)
            })
            navegar('/Iniciarsesion')
    }}
        grabareliminar()
    }, [sweliminar])

    const eliminar = () => {
        Swal.fire({  
            title: avisocuentaeliminadatitle,
            text: avisocuentaeliminadatext,
            showCancelButton: true,  
            cancelButtonText: avisocuentaeliminadacancel,
            confirmButtonText: avisocuentaeliminadaconfirm,  
        }).then((result) => {  
              /* Read more about isConfirmed, isDenied below */  
              if (result.isConfirmed) {    
                setSweliminar(true)
                Swal.fire(avisocuentaeliminada)
            }
          });
    }
    useEffect(() => { 
        const poneridioma = () => {
            if (props.idiomaestablecido === 'español'){
                setTitulopagina('JUNTOS EN ORACION')
                setTituloventana('Datos de mi cuenta')

                setPlaceholderclave('Contraseña')
                setPlaceholdernombre('Nombres');
                setPlaceholderapellido('Apellidos');
                setPlaceholderpregunta('Pregunta para recuperar contraseña');
                setPlaceholderrespuesta('Respuesta');
                setPlaceholdergenero('Genero');
                setPlaceholderidioma('Idioma de su preferencia');
                setPlaceholderpais('Pais');
                setPlaceholderprovincia('Region');
                setPlaceholderciudad('Ciudad');
            
                setAvisocuentabiencreada('Actualizacion exitosa');
                setAvisocuentaeliminada('Cuenta eliminada');
                setAvisocuentaeliminadatitle("Seguro?")
                setAvisocuentaeliminadatext("La informacion eliminada no se puede recuperar!")
                setAvisocuentaeliminadacancel(`Cancelar`)
                setAvisocuentaeliminadaconfirm(`Si, Eliminar`)
    
                setLabelbotonactualizarcuenta('Guardar cambios')
                setLabelbotoneliminarcuenta('Borrar cuenta')
                setLabelparrafopregunta('Responder una pregunta es un sistema eficaz para recuperar contraseñas');
                setLabelfechadenacimiento('Fecha de nacimiento D/M/A:');
                setLabelgenero('Genero: ');
                setLabelgeneromasculino('Masculino');
                setLabelgenerofemenino('Femenino');
                setLabelgenerootro('Otro');
                setLabelderesidencia('Lugar de residencia actual: ');

                setLabelerrordefecha('Fecha de Nacimiento invalida');
                setLabelerrordegenero('Selecione un genero');
                setLabelerrordeidioma('Selecione un idioma');
                setLabelerrordepais('Selecione un pais');
                setLabelerrordeprovincia('Selecione una region');
                setLabelerrordeciudad('Selecione una ciudad');
            
            }
            if (props.idiomaestablecido === 'frances'){
                setTitulopagina('ENSEMBLE EN PRIÈRE')
                setTituloventana('Détails de mon compte')

                setPlaceholderclave('Mot de passe')
                setPlaceholdernombre('Des noms');
                setPlaceholderapellido('noms de famille');
                setPlaceholderpregunta('Question pour récupérer mot de passe');
                setPlaceholderrespuesta('Réponse');
                setPlaceholdergenero('Le genre');
                setPlaceholderidioma('Langue de votre choix');
                setPlaceholderpais('Pays');
                setPlaceholderprovincia('Région');
                setPlaceholderciudad('Ville');

                setAvisocuentabiencreada('mise à jour réussie');
                setAvisocuentaeliminada('Compte supprimé');
                setAvisocuentaeliminadatitle("tu es sûr?")
                setAvisocuentaeliminadatext("Les informations supprimées ne peuvent pas être récupérées!")
                setAvisocuentaeliminadacancel(`Annuler`)
                setAvisocuentaeliminadaconfirm(`Oui, supprimer`)

                setLabelbotonactualizarcuenta('Sauvegarder')
                setLabelbotoneliminarcuenta('Supprimer le compte')
                setLabelparrafopregunta('Répondre à une question est un système efficace pour récupérer les mots de passe');
                setLabelfechadenacimiento('Date de naissance J/M/A:');
                setLabelgenero('Le genre: ');
                setLabelgeneromasculino('Masculin');
                setLabelgenerofemenino('Féminin');
                setLabelgenerootro('Autre');
                setLabelderesidencia('Lieu de résidence actuel:');

                setLabelerrordefecha('Date de naissance invalide');
                setLabelerrordegenero('Sélectionnez un genre');
                setLabelerrordeidioma('Sélectionnez une langue');
                setLabelerrordepais('Choisissez un pays');
                setLabelerrordeprovincia('Sélectionnez une région');
                setLabelerrordeciudad('Sélectionnez une ville');
            }
            if (props.idiomaestablecido === 'ingles'){
                setTitulopagina('PRAY SIDE BY SIDE')
                setTituloventana('My account details')

                setPlaceholderclave('Password')
                setPlaceholdernombre('Names');
                setPlaceholderapellido('Lastnames');
                setPlaceholderpregunta('Password recovery question');
                setPlaceholderrespuesta('Answer');
                setPlaceholdergenero('Gender');
                setPlaceholderidioma('Language of your preference');
                setPlaceholderpais('Country');
                setPlaceholderprovincia('Region');
                setPlaceholderciudad('City');

                setAvisocuentabiencreada('Successful update');
                setAvisocuentaeliminada('Account deleted');
                setAvisocuentaeliminadatitle("Sure?")
                setAvisocuentaeliminadatext("Deleted information cannot be recovered!")
                setAvisocuentaeliminadacancel(`Cancel`)
                setAvisocuentaeliminadaconfirm(`Yes, Delete`)

                setLabelbotonactualizarcuenta('Save changes')
                setLabelbotoneliminarcuenta('Delete account')
                setLabelparrafopregunta('Answering a question is an effective system to recover passwords');
                setLabelfechadenacimiento('Date of Birth D/M/Y:');
                setLabelgenero('Gender: ');
                setLabelgeneromasculino('Male');
                setLabelgenerofemenino('Female');
                setLabelgenerootro('Other');
                setLabelderesidencia('Current place of residence:');

                setLabelerrordefecha('Invalid date of birth');
                setLabelerrordegenero('Select a genre');
                setLabelerrordeidioma('Select a language');
                setLabelerrordepais('Select a country');
                setLabelerrordeprovincia('Select a region');
                setLabelerrordeciudad('Select a city');
            }
            if (props.idiomaestablecido === 'portugues'){
                setTitulopagina('JUNTOS EM ORAÇÃO')
                setTituloventana('Detalhes da minha conta')

                setPlaceholderclave('Senha')
                setPlaceholdernombre('Nomes');
                setPlaceholderapellido('Sobrenomes');
                setPlaceholderpregunta('Pergunta para recuperação de senha');
                setPlaceholderrespuesta('Resposta');
                setPlaceholdergenero('Gênero');
                setPlaceholderidioma('Idioma de sua preferência');
                setPlaceholderpais('País');
                setPlaceholderprovincia('Região');
                setPlaceholderciudad('Cidade');

                setAvisocuentabiencreada('Atualização bem sucedida');
                setAvisocuentaeliminada('Conta deletada');
                setAvisocuentaeliminadatitle("Certeza?")
                setAvisocuentaeliminadatext("As informações excluídas não podem ser recuperadas!")
                setAvisocuentaeliminadacancel(`Cancelar`)
                setAvisocuentaeliminadaconfirm(`Sim, Excluir`)

                setLabelbotonactualizarcuenta('Salvar mudanças')
                setLabelbotoneliminarcuenta('Deletar conta')
                setLabelparrafopregunta('Responder a uma pergunta é um sistema eficaz para recuperar senhas');
                setLabelfechadenacimiento('Data de nascimento D/M/A:');
                setLabelgenero('Gênero: ');
                setLabelgeneromasculino('Masculino');
                setLabelgenerofemenino('Feminino');
                setLabelgenerootro('Outro');
                setLabelderesidencia('Local de residência atual:');

                setLabelerrordefecha('Data de nascimento inválida');
                setLabelerrordegenero('Selecione um gênero');
                setLabelerrordeidioma('Selecione um idioma');
                setLabelerrordepais('Selecione um pais');
                setLabelerrordeprovincia('Selecione uma região');
                setLabelerrordeciudad('Selecione uma cidade');
            }

        }
           poneridioma()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.idiomaestablecido])

  
    const ventanaprevia = () => {
        navegar(-1)
    }

    const preparardatosparagrabar = (data) => {

        setArraydedatosparagrabar([])
        setOkparagrabar(false)
        setRegistrando(false)
        setFechaok(false)

        if (moment(data.fechanacimiento).isBefore(moment().subtract(10, "years"))) {
            setFechaok(true)
            setGenerook(false)
            if (genero !== -1 && genero !== ''){
                setGenerook(true)
                setIdiomapreferenteok(false)
                if (idiomapreferente !== -1 && idiomapreferente !== ''){
                    setIdiomapreferenteok(true)
                    setPaisok(false)
                    if (pais !== ''){
                        const arrayfiltrado = arraydepaises.filter(fila => fila.paiscodigodos === pais )
                        if (arrayfiltrado.length>0){
                            setPaisok(true)
                            setProvinciaok(false)
                            if (provincia !== ''){
                                const arrayfiltradot = arraydeprovincias.filter(fila => fila.provinciacodigo === provincia)
                                if (arrayfiltradot.length>0){
                                    setProvinciaok(true)
                                    setCiudadok(false)
                                    if (ciudad !== ''){

                                        const arrayfiltradop = listadeciudades.filter(fila => fila.ciudadcodigo === ciudad )
                                        if (arrayfiltradop.length>0){
                                            setCiudadok(true)
                                            setRegistrando(true)
                                            let arrayparagrabar =[]
                                            arrayparagrabar.push({
                                                email: dataemail, 
                                                clave: data.clave,
                                                nombre: data.nombre,
                                                apellido: data.apellido,
                                                pregunta: data.pregunta,
                                                respuesta: data.respuesta,
                                                fechanacimiento: data.fechanacimiento,
                                                genero: genero,
                                                nombregenero: nombregenero,
                                                idioma: idiomapreferente,
                                                pais: pais,
                                                provincia: provincia,
                                                ciudad: ciudad
                                            })
                                            setArraydedatosparagrabar(arrayparagrabar)
                                            setOkparagrabar(true)
                                            props.setIdiomaestablecido(idiomapreferente)
                                            localStorage.setItem('idioma',idiomapreferente);
                                    
                                        }

                                    }

                                }   

                            }

                        }
                    }
                }
            }        
        }    
    }

    const generoseleccionado = (e) => {
        setGenero(e.target.value);
        if (e.target.value == 0 ){
            setNombregenero('masculino');
        } 
        if (e.target.value == 1 ){
            setNombregenero('femenino');
        } 
        if (e.target.value == 2 ){
            setNombregenero('otro');
        } 
    }

    const paisseleccionado = (e) => {
        if (e.target.value !== -1){
            setPais(e.target.value);
        }
    }

    const provinciaseleccionada = (e) => {
        if (e.target.value !== -1){
            setProvincia(e.target.value);
        } 
    }
    const ciudadseleccionada = (e) => {
        if (e.target.value !== -1){
            setCiudad(e.target.value);
            }
        }
    const idiomaseleccionado = (e) => {
        if (e.target.value !== -1){
            setIdiomapreferente(e.target.value);
        } 
    }

    const actualizarcuentasubmit = (data, evento) => {
        preparardatosparagrabar(data)
    }

    return (
        
        <Fragment>
            <div className='divrootiniciarsesion'>
                <div className='divroothijoiniciarsesion'>
                    <div className='divtituloiniciarsesion'>
                        <h3 className='htituloiniciarsesion'>{titulopagina}</h3>
                    </div>
                    <div className='divfilasexternoclose'>
                            <div className='divfilasinternoleftclose'>
                            </div>

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
                            onSubmit={handleSubmit(actualizarcuentasubmit)} 
                            className='divform'
                        >
                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{placeholderclave}:
                                </label>
                                <input
                                    name="clave" 
                                    className='campocrearcuenta'
                                    placeholder = {placeholderclave}
                                    autocomplete = "new-password"
                                    type='password'
                                    {...register("clave", 
                                        { required:{ value: true, message:" *" }}
                                    )} 
                                />
                                {errors.clave && <span>{errors.clave.message}</span>}
                            </div>

                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{placeholdernombre}:
                                </label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    placeholder = {placeholdernombre}
                                    className='campocrearcuenta'
                                    autocomplete = "username"
                                    {...register
                                        ("nombre", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.nombre && <span>{errors.nombre.message}</span>}

                            </div>

                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{placeholderapellido}:
                                </label>
                                <input 
                                    type="text" 
                                    name="apellido" 
                                    placeholder = {placeholderapellido}
                                    className='campocrearcuenta'
                                    autocomplete = "username"
                                    {...register
                                        ("apellido", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.apellido && <span>{errors.apellido.message}</span>}

                            </div>

                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{placeholderpregunta}:
                                </label>
                                <input 
                                    type="text" 
                                    name="pregunta" 
                                    placeholder = {placeholderpregunta}
                                    className='campocrearcuenta'
                                    autocomplete = "username"
                                    {...register
                                        ("pregunta", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.pregunta && <span>{errors.pregunta.message}</span>}

                            </div>

                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{placeholderrespuesta}:
                                </label>
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

                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{labelfechadenacimiento}
                                </label>
                                <input
                                    className='campotextofecha150'
                                    name="fechanacimiento" 
                                    type="date"
                                    {...register(
                                        "fechanacimiento",{required: {value: true, message: '*'}}
                                    )}
                                />
                                {errors?.fechanacimiento?.message}
                            </div>
                            
                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >{labelgenero}
                                </label>
                                <select 
                                    name='generos' 
                                    id='idgeneros'
                                    className='camposelect'
                                    onChange={generoseleccionado}
                                    value={genero}
                                >
                                    <option value={-1}>{placeholdergenero}</option>
                                    <option value={0}>{labelgeneromasculino}</option>
                                    <option value={1}>{labelgenerofemenino}</option>
                                    <option value={2}>{labelgenerootro}</option>
                                </select>
                                                
                            </div>

                            <div className='divfilasleft'>
                                <label
                                    className='etiqueta'
                                    >Idioma:
                                </label>
                                <select 
                                    placeholder = 'idioma de la plataforma'
                                    name='idiomas' 
                                    id='ididiomas'
                                    className='camposelect'
                                    onChange={idiomaseleccionado}
                                    value={idiomapreferente}  
                                >
                                    <option value='-1'>{placeholderidioma}</option>
                                    <option value='ingles'>English</option>
                                    <option value='español'>Español</option>
                                    <option value='frances'>Française</option>
                                    <option value='portugues'>Portugues</option>
                                </select>

                            </div>

                            <div className='divcolumnasnormal'>
                                <label
                                    className='etiqueta'
                                >{labelderesidencia}
                                </label>
                            </div>

                            <div className='divfilasleft'>
                                {arraydepaises.length >0 ?(
                                    <select 
                                        name='paises' 
                                        id='idpaises'
                                        className='camposelect'
                                        onChange={paisseleccionado}
                                        value={pais}
                                    >
                                            <option value={-1}>{placeholderpais}</option>

                                            {arraydepaises.map((item, i) => (
                                            <option key = {i} value={item.paiscodigodos}>{item.paisnombre}</option>
                                            ))}
                                        </select>

                                ):(
                                    <select 
                                        name='paises' 
                                        id='idpaises'
                                        className='camposelectplaceholder'
                                        onChange={paisseleccionado}
                                    >
                                        <option value={-1}>{placeholderpais}</option>
                                    </select>
                                )}
                            </div>
    
                            <div className='divfilasleft'>
                                {arraydeprovincias.length >0 ?(
                                    <select 
                                        name='provincia' 
                                        id='idprovincia'
                                        className='camposelect'
                                        onChange={provinciaseleccionada}
                                        value={provincia}
                                    >
                                            <option value={-1}>{placeholderprovincia}</option>

                                        {arraydeprovincias.map((item, i) => (
                                            <option key = {i} value={item.provinciacodigo}>{item.provincianombre}</option>
                                        ))}
                                    </select>
                                ):(
                                    <select 
                                        name='provincia' 
                                        id='idprovincia'
                                        className='camposelectplaceholder'
                                        onChange={provinciaseleccionada}
                                    >
                                            <option value={-1}>{placeholderprovincia}</option>
                                    </select>

                                )}
                            </div>

                            <div className='divfilasleft'>
                                {listadeciudades.length >0 ?(
                                    <select 
                                        name='ciudad' 
                                        id='idciudad'
                                        className='camposelect'
                                        onChange={ciudadseleccionada}
                                        value={ciudad}
                                    >

                                        <option value={-1}>{placeholderciudad}</option>
                                        {listadeciudades.map((item, i) => (
                                            <option key = {i} value={item.ciudadcodigo}>{item.ciudadnombre}</option>
                                        ))}
                                    </select>
                                ):(
                                    <select 
                                        name='ciudad' 
                                        id='idciudad'
                                        className='camposelectplaceholder'
                                        onChange={ciudadseleccionada}
                                    >
                                        <option value={-1}>{placeholderciudad}</option>
                                    </select>
                                            
                                )}

                            </div>

                            <input type="submit" className = 'botoniniciarsesion' value ={labelbotonactualizarcuenta}/>
                            {fechaok !== true ?(
                                <div className='divcolumnascenternormal'>
                                <p
                                        className='parrafoerror'
                                        >{labelerrordefecha}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            
                            {generook !== true ?(
                                <div className='divcolumnascenternormal'>
                                <p
                                        className='parrafoerror'
                                        >{labelerrordegenero}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}

                            {idiomapreferenteok !== true ?(
                                <div className='divcolumnascenternormal'>
                                <p
                                        className='parrafoerror'
                                        >{labelerrordeidioma}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            
                            {paisok !== true ?(
                                <div className='divcolumnascenternormal'>
                                <p
                                        className='parrafoerror'
                                        >{labelerrordepais}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            {provinciaok !== true ?(
                                <div className='divcolumnascenternormal'>
                                <p
                                        className='parrafoerror'
                                        >{labelerrordeprovincia}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            {ciudadok !== true ?(
                                <div className='divcolumnascenternormal'>
                                    <p
                                        className='parrafoerror'
                                        >{labelerrordeciudad}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                

                        </form>
                        <div className='divcolumnascenternormal'>
                            <button 
                                className = 'botonlink'
                                onClick={eliminar}>{labelbotoneliminarcuenta}
                            </button>
                        </div>

                        {registrando? (<BarLoader color="#0d47a1" size={250} />
                    ):(<span></span>
                    )}

                    <div className='divcopyrightiniciarsesion'>
                            
                        <p className='parrafocopyrightiniciarsesion'>
                            Prayside.com 2022
                        </p>

                    </div>


                </div>
            </div>
        </Fragment>
        
    )
}

export default Editarcuenta;


