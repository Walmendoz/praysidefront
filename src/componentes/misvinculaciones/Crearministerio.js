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
import Ejecutarsqlnode from '../../conexiones/Ejecutarsqlnode';
import Ejecutarsqlnodepost from '../../conexiones/Ejecutarsqlnodepost';
import './Misvinculacionesestilos.css'

//<p onClick={() => navegar("/Crearcuenta")}>Deseo Registrame gratis</p>

const Crearministerio = (props) => {

    const navegar = useNavigate();
// console.log(props)
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
    const [tipo, setTipo] = useState(0);
    const [idiomapreferente, setIdiomapreferente] = useState('');
    const [dataemail, setDataemail] = useState('-');
    const [dataclave, setDataclave] = useState('');
    const [registrando, setRegistrando] = useState(false);
    const [okparagrabar, setOkparagrabar] = useState(false);
    const [visibilidad, setVisibilidad] = useState('Privado');
    const [religion, setReligion] = useState('');

    const [fechaok, setFechaok] = useState(true);
    const [idiomapreferenteok, setIdiomapreferenteok] = useState(true);
    const [paisok, setPaisok] = useState(true);
    const [provinciaok, setProvinciaok] = useState(true);
    const [ciudadok, setCiudadok] = useState(true);

    const [titulopagina, setTitulopagina] = useState('JUNTOS EN ORACION');
    const [tituloventana, setTituloventana] = useState('Creacion de Ministerio!');

    const [placeholdertipo, setPlaceholdertipo] = useState('Tipo de ministerio');
    const [placeholdernombre, setPlaceholdernombre] = useState('Nombres');
    const [placeholdercobertura, setPlaceholdercobertura] = useState('Cobertura por');
    const [placeholderidioma, setPlaceholderidioma] = useState('Idioma de su preferencia');
    const [placeholderpais, setPlaceholderpais] = useState('Pais');
    const [placeholderprovincia, setPlaceholderprovincia] = useState('Region');
    const [placeholderciudad, setPlaceholderciudad] = useState('Ciudad');
    const [placeholderdireccion, setPlaceholderdireccion] = useState('Direccion');
    const [placeholdertelefono, setPlaceholdertelefono] = useState('Telefono');
    const [placeholderemail, setPlaceholderemail] = useState('Correo electronico');
    const [placeholdervisibilidad, setPlaceholdervisibilidad] = useState('Visibilidad');

    const [labelbotoncrearministerio, setLabelbotoncrearministerio] = useState('Crear ministerio');
    const [labelbotonnosoyrobot, setLabelbotonnosoyrobot] = useState('No soy un robot');
    const [labeltipo, setLabeltipo] = useState('Tipo ministerio:');
    const [labelnombre, setLabelnombre] = useState('Nombre:');
    const [labelcobertura, setLabelcobertura] = useState('Cobertura:');
    const [labelidioma, setLabelidioma] = useState('Idioma:');
    const [labelreligion, setLabelreligion] = useState('Identidad Religiosa:');
    const [labelderesidencia, setLabelderesidencia] = useState('Ubicacion ministerio');
    
    const [labelerrordefecha, setLabelerrordefecha] = useState('');
    const [labelerrordeidioma, setLabelerrordeidioma] = useState('');
    const [labelerrordepais, setLabelerrordepais] = useState('');
    const [labelerrordeprovincia, setLabelerrordeprovincia] = useState('');
    const [labelerrordeciudad, setLabelerrordeciudad] = useState('');
    const [labeldireccion, setLabeldireccion] = useState('Direccion');
    const [labeltelefono, setLabeltelefono] = useState('Telefono');
    const [labelemail, setLabelemail] = useState('Correo Electronico');
    const [labelvisibilidad, setLabelvisibilidad] = useState('Visibilidad');

    const [avisoemail, setAvisoemail] = useState('Cuenta ya existe');
    const [avisoemailinvalido, setAvisoemailinvalido] = useState('Cuenta de correo incorrecta');
    const [avisocuentabiencreada, setAvisocuentabiencreada] = useState('Cuenta creada exitosamente');
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
//    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
  //      defaultValues : props.filactual
    //});

    // Valores por defecto
    useEffect(() => {
        const valoresinicialesdelform = () => {
            setValue("fechanacimiento", moment().format('YYYY-MM-DD'));

        }
        valoresinicialesdelform()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
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
//                    var url = props.midominio + `/apis/buscarprovincias.php?pais=${pais}`;
                    var url = props.midominionode + `/regionales/buscarprovincias/${pais}`;
                  Ejecutarsqlnode(url).then((info) => {
                    setArraydeprovincias(info)
                  })
                }            
            }
            obtenerprovincias()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pais])
    // Buscar datos basicos

    useEffect(() => {
        const obtenerdatosusuario = () => {
            if (dataemail !== '-' && dataemail !== undefined){
//              var url = props.midominio + `/apis/buscarusuario.php?email=${dataemail}`;
                var url = props.midominionode + `/usuarios/buscarusuariocorreo/${dataemail}`;
                Ejecutarsqlnode(url).then((info) => {
                setResultadousuario(info)
              })
        
            }  
        }
        obtenerdatosusuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataemail, dataclave])
    
    // Grabar ministerio
    useEffect(() => {
        const grabarministerio =(arraydedatosparagrabar) => {
            if (okparagrabar === true){
                if (arraydedatosparagrabar.length > 0){
 //                   console.log(arraydedatosparagrabar)
//                    var url = props.midominio + `/apis/crearcuenta.php`
                    var url = props.midominionode + `/vinculaciones/crearministerio`
                    Ejecutarsqlnodepost(url,arraydedatosparagrabar).then((info) => {
                        setArrayejecutado(info)
                        props.setOkministerioregistrado(!props.okministerioregistrado)
                        props.abrircerrarmodalministerio()
                        Swal.fire('Ministerio creado')
                    })
    
                }
            }        
        }
        grabarministerio(arraydedatosparagrabar)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arraydedatosparagrabar])    

    useEffect(() => { 
        const poneridioma = () => {
            if (props.idiomaestablecido === 'español'){
                setTitulopagina('JUNTOS EN ORACION')
                setTituloventana('Creacion de ministerio!')

                setPlaceholderemail('Correo electronico')
                setPlaceholdernombre('Nombres');
                setPlaceholdercobertura('Cobertura');
                setPlaceholdertipo('Tipo ministerio');
                setPlaceholderidioma('Idioma de su preferencia');
                setPlaceholderpais('Pais');
                setPlaceholderprovincia('Region');
                setPlaceholderciudad('Ciudad');
            
                setAvisoemail('Cuenta ya existe');
                setAvisocuentabiencreada('Cuenta creada exitosamente');
                setAvisoemailinvalido('Cuenta de correo invalida');

                setLabelbotoncrearministerio('Crear ministerio')
                setLabelbotonnosoyrobot('No soy un  robot')
                setLabeltipo('Tipo ministerio: ');
                setLabelnombre('Nombre:');
                setLabelcobertura('Cobertura:');
                setLabelidioma('Idioma:');
                setLabelreligion('Identidad Religiosa:');

                setLabelderesidencia('Ubicacion ministerio: ');

                setLabelerrordefecha('Fecha de Nacimiento invalida');
                setLabelerrordeidioma('Selecione un idioma');
                setLabelerrordepais('Selecione un pais');
                setLabelerrordeprovincia('Selecione una region');
                setLabelerrordeciudad('Selecione una ciudad');

                setLabeldireccion('Direccion');
                setLabeltelefono('Telefono');
                setLabelemail('Correo Electronico');
                setLabelvisibilidad('Visibilidad');
                            
            }
            if (props.idiomaestablecido === 'frances'){
                setTitulopagina('ENSEMBLE EN PRIÈRE')
                setTituloventana('créer un ministère!')

                setPlaceholderemail('Email')
                setPlaceholdernombre('Nom');
                setPlaceholdercobertura('Couverture');
                setPlaceholdertipo('Type ministère');
                setPlaceholderidioma('Langue de votre choix');
                setPlaceholderpais('Pays');
                setPlaceholderprovincia('Région');
                setPlaceholderciudad('Ville');

                setAvisoemail('Le compte existe déjà');
                setAvisocuentabiencreada('Compte créé avec succès');
                setAvisoemailinvalido('Email invalide');

                setLabelbotoncrearministerio('créer compte')
                setLabelbotonnosoyrobot('Je ne suis pas un robot')
                setLabeltipo('Type ministère: ');
                setLabelnombre('Nom:');
                setLabelcobertura('Couverture:');
                setLabelidioma('Langue:');
                setLabelreligion('Identité religieuse:');
                setLabelderesidencia('Lieu de ministère:');

                setLabelerrordefecha('Date de naissance invalide');
                setLabelerrordeidioma('Sélectionnez une langue');
                setLabelerrordepais('Choisissez un pays');
                setLabelerrordeprovincia('Sélectionnez une région');
                setLabelerrordeciudad('Sélectionnez une ville');

                setLabeldireccion('Adresse');
                setLabeltelefono('Téléphone');
                setLabelemail('Correo Electronico');
                setLabelvisibilidad('Visibilidad');

            }
            if (props.idiomaestablecido === 'ingles'){
                setTitulopagina('PRAY SIDE BY SIDE')
                setTituloventana('Create an ministry!')

                setPlaceholderemail('Email')
                setPlaceholdernombre('Names');
                setPlaceholdercobertura('Coverage');
                setPlaceholdertipo('Ministry type');
                setPlaceholderidioma('Language of your preference');
                setPlaceholderpais('Country');
                setPlaceholderprovincia('Region');
                setPlaceholderciudad('City');

                setAvisoemail('Account already exists');
                setAvisocuentabiencreada('Account created successfully');
                setAvisoemailinvalido('Invalid email');

                setLabelbotoncrearministerio('Create account')
                setLabelbotonnosoyrobot('I am not a robot')
                setLabeltipo('Ministry type: ');
                setLabelnombre('Name:');
                setLabelcobertura('Coverage:');
                setLabelidioma('Language:');
                setLabelreligion('Religious identity:');
                setLabelderesidencia('Current place of ministry:');

                setLabelerrordefecha('Invalid date of birth');
                setLabelerrordeidioma('Select a language');
                setLabelerrordepais('Select a country');
                setLabelerrordeprovincia('Select a region');
                setLabelerrordeciudad('Select a city');

                setLabeldireccion('Address');
                setLabeltelefono('Phone');
                setLabelemail('Email');
                setLabelvisibilidad('Visibility');

            }
            if (props.idiomaestablecido === 'portugues'){
                setTitulopagina('JUNTOS EM ORAÇÃO')
                setTituloventana('criar uma ministério!')

                setPlaceholderemail('Email')
                setPlaceholdernombre('Nomes');
                setPlaceholdercobertura('Covertura');
                setPlaceholdertipo('tipo ministério');
                setPlaceholderidioma('Idioma de sua preferência');
                setLabelreligion('Identidade religiosa:');
                setPlaceholderpais('País');
                setPlaceholderprovincia('Região');
                setPlaceholderciudad('Cidade');

                setAvisoemail('Essa conta já existe');
                setAvisocuentabiencreada('Conta criada com sucesso');
                setAvisoemailinvalido('e-mail inválido');
                
                setLabelbotoncrearministerio('criar conta')
                setLabelbotonnosoyrobot('Eu não sou um robô')
                setLabeltipo('tipo ministério: ');
                setLabelnombre('Nome:');
                setLabelcobertura('Cobertura:');
                setLabelidioma('Idioma:');
                setLabelderesidencia('Local de ministério:');

                setLabelerrordefecha('Data de nascimento inválida');
                setLabelerrordeidioma('Selecione um idioma');
                setLabelerrordepais('Selecione um pais');
                setLabelerrordeprovincia('Selecione uma região');
                setLabelerrordeciudad('Selecione uma cidade');

                setLabeldireccion('Endereço');
                setLabeltelefono('Telefone');
                setLabelemail('Email');
                setLabelvisibilidad('Visibilidade');
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
            if (dataemail !== '-' && dataemail !== undefined){
                if (resultadousuario.length > 0){
                    Swal.fire(avisoemail)
                }else{
                  setPagina(2)
                }
            }
        }
        buscardatos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultadousuario])
   
    const validaremail = (email) =>{
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
    }

    const preparardatosnosoyrobot = (data) => {
        setArraydedatosparagrabar([])
        const valido = validaremail(data.email);
        if (valido === false){
            setPagina(1)
            Swal.fire(avisoemailinvalido)
        }else{ 
            setDataemail(data.email)
            setDataclave(data.clave)
            let arraytemporal =[]
            arraytemporal.push({
                email: data.email, 
                clave: data.clave,
                nombre: data.nombre,
                apellido: data.apellido,
                pregunta: data.pregunta,
                respuesta: data.respuesta
                })
            setArraydedatosnosoyrobot(arraytemporal)
        }
    }

    const preparardatosparagrabar = (data) => {

        setArraydedatosparagrabar([])
        let arrayparagrabar =[]

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

                                    arrayparagrabar.push({
                                                        usuariocorreo: props.usuariocorreo,
                                                        tipo: tipo,
                                                        nombre: data.nombre,
                                                        idioma: idiomapreferente,
                                                        pais: pais,
                                                        provincia: provincia,
                                                        ciudad: ciudad,
                                                        direccion: data.direccion,
                                                        telefono: data.telefono,
                                                        email: data.email,
                                                        visibilidad: visibilidad,
                                                        religion: religion,
                                            })
                                    setArraydedatosparagrabar(arrayparagrabar)
                                    setOkparagrabar(true)
                                }
                            }
                        }
                    }
                }
            }
        }
    



{/*
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
                                                email: arraydedatosnosoyrobot[0].email, 
                                                clave: arraydedatosnosoyrobot[0].clave,
                                                nombre: arraydedatosnosoyrobot[0].nombre,
                                                apellido: arraydedatosnosoyrobot[0].apellido,
                                                pregunta: arraydedatosnosoyrobot[0].pregunta,
                                                respuesta: arraydedatosnosoyrobot[0].respuesta,
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

                                        }

                                    }

                                }   

                            }

                        }
                    }
                }
            }        
        }    
    */}    

    }

    const tiposeleccionado = (e) => {
        if (e.target.value !== -1){
            setTipo(e.target.value);
        }
    }

    const paisseleccionado = (e) => {
        if (e.target.value !== -1){
            setPais(e.target.value);
        }
    }

    const visibilidadseleccionada = (e) => {
        if (e.target.value !== -1){
            setVisibilidad(e.target.value);
        }
    }

    const religionseleccionada = (e) => {
        if (e.target.value !== -1){
            setReligion(e.target.value);
        }
    }

    useEffect(() => {
        const buscarlistadeciudades = () => {
            const arrayfiltrado = arraydeciudades.filter(fila => fila.provinciacodigo === provincia || fila.provinciacodigo ==='' )
            if (arrayfiltrado.length>0){
                setListadeciudades(arrayfiltrado);
            }
        } 
    
        buscarlistadeciudades()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provincia])

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


    const nosoyrobotsubmit = (data, evento) => {
        preparardatosnosoyrobot(data)
    }

    const crearministeriosubmit = (data, evento) => {
        preparardatosparagrabar(data)
    }

    return (
        
        <div className='ventanamodalcrearministerio'>
            <div className='divpadrecrearministerio'>
                <div className='divhijocrearministerio'>
                    <div className='divtitulocrearministerio'>
                        <h3 className='htitulocrearministerio'>{titulopagina}</h3>
                    </div>
                    <div className='divfilasexternoclosecrearministerio'>
                        <div className='divfilasinternoleftclose'>
                        </div>

                        <div className='divfilainternocenterclosecrearministerio'>
                            <h4 className='htitulocrearministerio'>{tituloventana}</h4>
                        </div>
                        <div className='divfilasinternorightclosecrearministerio'>
                            <IconButton aria-label="close"                         
                                    onClick={() => props.abrircerrarmodal()}
                                    >
                                <CloseIcon>
                                </CloseIcon>
                            </IconButton>
                        </div>
                    </div>

                        <form 
                            onSubmit={handleSubmit(crearministeriosubmit)} 
                            className='divformcrearministerio'
                        >

                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labeltipo}
                                </label>
                                <select 
                                    name='tipo' 
                                    id='idtipo'
                                    className='camposelectcrearministerio'
                                    onChange={tiposeleccionado}
                                    value={tipo}
                                >
                                    <option value={-1}>Escoger un tipo</option>
                                    <option value={1}>{'Fundacion-Corporacion'}</option>
                                    <option value={2}>{'Concilio'}</option>
                                    <option value={3}>{'Congregacion'}</option>
                                    <option value={4}>{'Ministerio'}</option>
                                    <option value={5}>{'Grupo de Oracion o Celula'}</option>
                                    <option value={6}>{'Evento'}</option>
                                    <option value={7}>{'Otro'}</option>
                                </select>
                                                
                            </div>

                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labelnombre}
                                </label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    placeholder = {placeholdernombre}
                                    className='campocrearministerio'
                                    autocomplete = "username"
                                    {...register
                                        ("nombre", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.nombre && <span>{errors.nombre.message}</span>}

                            </div>

                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labelcobertura}
                                </label>
                                <input 
                                    type="text" 
                                    name="cobertura" 
                                    placeholder = {placeholdercobertura}
                                    className='campocrearministerio'
                                    autocomplete = "username"
                                    {...register
                                        ("cobertura", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.cobertura && <span>{errors.cobertura.message}</span>}

                            </div>

                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labelidioma}
                                </label>
                                <select 
                                    placeholder = {placeholderidioma}
                                    name='idiomas' 
                                    id='ididiomas'
                                    className='camposelectcrearministerio'
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

                            <div className='divfilasleftcrearministerio'>
                                {arraydepaises.length >0 ?(
                                    <select 
                                        name='paises' 
                                        id='idpaises'
                                        className='camposelectcrearministerio'
                                        onChange={paisseleccionado}
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
                                        className='camposelectplaceholdercrearministerio'
                                        onChange={paisseleccionado}
                                    >
                                        <option value={-1}>{placeholderpais}</option>
                                    </select>
                                )}
                            </div>
    
                            <div className='divfilasleftcrearministerio'>
                                {arraydeprovincias.length >0 ?(
                                    <select 
                                        name='provincia' 
                                        id='idprovincia'
                                        className='camposelectcrearministerio'
                                        onChange={provinciaseleccionada}
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
                                        className='camposelectplaceholdercrearministerio'
                                        onChange={provinciaseleccionada}
                                    >
                                            <option value={-1}>{placeholderprovincia}</option>
                                    </select>

                                )}
                            </div>

                            <div className='divfilasleftcrearministerio'>
                                {listadeciudades.length >0 ?(
                                    <select 
                                        name='ciudad' 
                                        id='idciudad'
                                        className='camposelectcrearministerio'
                                        onChange={ciudadseleccionada}
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
                                        className='camposelectplaceholdercrearministerio'
                                        onChange={ciudadseleccionada}
                                    >
                                        <option value={-1}>{placeholderciudad}</option>
                                    </select>
                                            
                                )}

                            </div>


                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labeldireccion}
                                </label>
                                <input 
                                    type="text" 
                                    name="direccion" 
                                    placeholder = {placeholderdireccion}
                                    className='campocrearministerio'
                                    autocomplete = "username"
                                    {...register
                                        ("direccion", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.direccion && <span>{errors.direccion.message}</span>}

                            </div>
                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labeltelefono}
                                </label>
                                <input 
                                    type="text" 
                                    name="telefono" 
                                    placeholder = {placeholdertelefono}
                                    className='campocrearministerio'
                                    autocomplete = "username"
                                    {...register
                                        ("telefono", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.telefono && <span>{errors.telefono.message}</span>}

                            </div>
                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labelemail}
                                </label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder = {placeholderemail}
                                    className='campocrearministerio'
                                    autocomplete = "email"
                                    {...register
                                        ("email", 
                                            { required:{ value: true, message:" *" }}
                                        )}
                                />
                                {errors.email && <span>{errors.email.message}</span>}

                            </div>
                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labelvisibilidad}
                                </label>
                                <select 
                                    placeholder = 'idioma de la plataforma'
                                    name='visibilidad' 
                                    id='idvisibilidad'
                                    className='camposelectcrearministerio'
                                    onChange={visibilidadseleccionada}
                                    value={visibilidad}  
                                >
                                    <option value='-1'>{'Escoja una Opcion'}</option>
                                    <option value='publico'>Publico</option>
                                    <option value='privado'>Privado</option>
                                </select>

                            </div>

                            <div className='divfilasleftcrearministerio'>
                                <label
                                    className='etiquetacrearministerio'
                                    >{labelreligion}
                                </label>
                                <select 
                                    placeholder = 'identidad religiosa'
                                    name='religion' 
                                    id='idreligion'
                                    className='camposelectcrearministerio'
                                    onChange={religionseleccionada}
                                    value={religion}  
                                >
                                    <option value={-1}>{'Escoja una Opcion'}</option>
                                    <option value={1}>Cristiano Catolico</option>
                                    <option value={2}>Cristiano Evangelico Trinitario</option>
                                    <option value={3}>Cristiano Evangelico Unitario Pentecostal</option>
                                    <option value={4}>Judaismo </option>
                                    <option value={5}>Mesianico</option>
                                    <option value={6}>Musulman</option>
                                    <option value={7}>Testigo de Jehova</option>
                                    <option value={8}>Otros</option>
                                </select>

                            </div>

                            <input type="submit" className = 'botoncrearministerio' value ={labelbotoncrearministerio}/>

                            {fechaok !== true ?(
                                <div className='divcolumnascenternormalcrearministerio'>
                                <p
                                        className='parrafoerrorcrearministerio'
                                        >{labelerrordefecha}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            
                            {idiomapreferenteok !== true ?(
                                <div className='divcolumnascenternormalcrearministerio'>
                                <p
                                        className='parrafoerrorcrearministerio'
                                        >{labelerrordeidioma}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            
                            {paisok !== true ?(
                                <div className='divcolumnascenternormalcrearministerio'>
                                <p
                                        className='parrafoerrorcrearministerio'
                                        >{labelerrordepais}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            {provinciaok !== true ?(
                                <div className='divcolumnascenternormalcrearministerio'>
                                <p
                                        className='parrafoerror1'
                                        >{labelerrordeprovincia}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                            {ciudadok !== true ?(
                                <div className='divcolumnascenternormalcrearministerio'>
                                    <p
                                        className='parrafoerrorcrearministerio'
                                        >{labelerrordeciudad}
                                    </p>
                                </div>
                            ):(<span></span>
                            )}
                

                        </form>



                    {registrando? (<BarLoader color="#0d47a1" size={250} />
                    ):(<span></span>
                    )}


                </div>
            </div>
        </div>
        
    )
}


export default Crearministerio;


