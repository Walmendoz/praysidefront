import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

// Utilidades
import Ejecutarsqlnode from '../conexiones/Ejecutarsqlnode';
import Ejecutarsqlnodepost from '../conexiones/Ejecutarsqlnodepost';

//componentes
import Mibarra from '../componentes/barra/Mibarra'
import Estructura from './estructura/Estructura';
import Metas from './estructura/Metas';
import Tareas from './estructura/Tareas';
import Midrawer from '../componentes/drawer/Midrawer';
import Menudebotones from '../componentes/menu/Menudebotones';
import Publicidad from '../componentes/publicidad/Publicidad';
import Publicidadhorizontal from '../componentes/publicidad/Publicidadhorizontal';

const Myroom = (props) => {
    const navegar = useNavigate();
    const [usuariosdeprueba, setUsuariosdeprueba] = useState([]);
    const [usuariosdepruebalogin, setUsuariosdepruebalogin] = useState([]);
    const [usuariosdepruebaconsulta, setUsuariosdepruebaconsulta] = useState([]);
    const [mostrargrupo, setMostrargrupo] = useState(false);
    const [mostrardevocional, setMostrardevocional] = useState(false);
    const [mostrarconcordancia, setMostrarconcordancia] = useState(false);
    const [mostrarpublicidad, setMostrarpublicidad] = useState(false);
    const [mostrarmenudebotones, setMostrarmenudebotones] = useState(false);
    const [placeholdersolicitaroracion, setPlaceholdersolicitaroracion] = useState('Busca una palabra en la biblia');
    const [archivocargado, setArchivocargado] = useState('');

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


// console.log('usuariosdeprueba')
// console.log(usuariosdeprueba)

// console.log('usuariosdepruebaconsulta')
// console.log(usuariosdepruebaconsulta)

// console.log('usuariosdepruebalogin')
// console.log(usuariosdepruebalogin)

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

Multiples imagenes
import { useEffect, useState } from "react";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function App() {
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const images = [], fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result)
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        }
        fileReader.readAsDataURL(file);
      })
    };
    return () => {
      isCancel = true;
      fileReaders.forEach(fileReader => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [imageFiles]);
  return (
    <div className="App">
      <form>
        <p>
          <label htmlFor="file">Upload images</label>
          <input
            type="file"
            id="file"
            onChange={changeHandler}
            accept="image/png, image/jpg, image/jpeg"
            multiple
          />
        </p>
      </form>
      {
        images.length > 0 ?
          <div>
            {
              images.map((image, idx) => {
                return <p key={idx}> <img src={image} alt="" /> </p>
              })
            }
          </div> : null
      }
    </div>
  );
}

export default App;


subir Imagen con ftp
npm i ftp multer multer-ftp
const ftp = require('ftp');
const multer = require('multer');
const ftpStorage = require('multer-ftp');

const ftpClient = new ftp();
    ftpClient.connect({
        port: //puerto del servidor,
        host: 'hostname',
        user: 'username',
        password: 'password'
    });

const storage = new ftpStorage({
        basepath: 'ubicacion destino del servidor',
        connection: ftpClient,
        destination: (req, file, options, cb) => {
            cb(null, 'path-destino');
        }
    });

const upload = multer({storage, fileFilter});

exports.upload = upload.single('nombre-campo-formulario');
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

// Subir imagenes    


    const imageMimeType = /image\/(png|jpg|jpeg)/i;
    const rutadestino  = props.midominionode + `/imagenes/cargarimagen`;
    const [name, setName] = useState('imagendeprueba');
    const [file, setFile] = useState(null);
    const [archivos, setArchivos] = useState(null);
    const [rutaorigen, setRutaorigen] = useState(null);

    const archivoseleccionado = (e) => {
        const archivo = e.target.files[0];
        console.log('El archivo es: ', archivo)
        if (!archivo.type.match(imageMimeType)) {
            alert("Image mime type is not valid");
            return;
        }
        setFile(archivo);
        setArchivos(archivo);
    }

    const prepararimagenasubir = (e) => {
        e.preventDefault()
        subirimagen(name,file)
    }    

    const subirimagen = async(nombre, archivo) => {
//        console.log('La ruta destino es:', rutadestino)
//        console.log('el nombre es:', name)
//        console.log('el archivo es:', file)
        const form = new FormData;
        form.append('file',archivo,'form-data')
        //console.log('El form es: ', JSON.stringify(form))
        console.log( 'El file es: ', form.get('file') )
        //console.log('La ruta origen es: ',rutaorigen )

        //        await axios.post(rutadestino,form,{headers: {'Content-Type':'multipart/form-data'}})
        await axios.post(rutadestino, form.get('file'))
        .then((response) => {
            console.log(response.data)
        })
        .catch(error=>{
            console.log('mensaje de error', error)
        })
    }

    // Previsualizar la Imagen
    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setRutaorigen(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);
  
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
                <button onClick={() => navegar(-1)}>Go back</button>
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

                <div className='divbuscarconcordancia'>
        
                    <div className='divinputbuscarconcordancia'>
                        <input 
                            type='text'
                            name='oracion'
                            placeholder={placeholdersolicitaroracion}
                            className = 'inputbuscarconcordancia'
                            onChange={() => props.eliminar()}>
                        </input>

                        <div className='diviconosbuscarconcordancia'>
                            <div className='iconobuscarconcordancia'>
                                <IconButton  
                                    color="inherit" 
                                    aria-label="menu" 
                                    onClick={() => props.accionAbrirdrawer()}   
                                >
                                    <SearchIcon/> 
                                </IconButton>
                            </div>
                        </div>
                    </div>

                </div>


                <>
                    <form onSubmit={prepararimagenasubir} enctype="multipart/form-data">
                        <p>
                        <label htmlFor='image'> Browse images  </label>
                        <input
                            type="file"
                            id='idimage'
                            name='image'
                            accept='.png, .jpg, .jpeg'
                            onChange={archivoseleccionado}
                        />
                        </p>
                        <p>
                        <input type="submit" value="Submit" />
                        </p>
                    </form>
                    {rutaorigen ?
                        <p className="img-preview-wrapper">
                        {
                            <img src={rutaorigen} alt="preview" width= '150px' height= '200px'/>
                        }
                        </p> : null}
                </>


                <div className='divroothijomipanelcentral'>
                    <div className='divroothijomipanelgrupo'>
                        <Estructura/>
                        <div className='separadorgris'>

                        </div>
                        <Publicidadhorizontal/>
                </div>

                    <div className='divroothijomipanelgrupo'>
                        <Metas/>
                        <div className='separadorgris'></div>
                        <Publicidadhorizontal/>
                    </div>

                    <div className='divroothijomipaneldevocional'>
                        <Tareas/>
                        <div className='separadorgris'></div>
                        <Publicidadhorizontal/>
                    </div>
                </div>
            </div>

</div>


)
}

export default Myroom;
