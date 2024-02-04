import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Redsocialestilos.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import ReactAudioPlayer from 'react-audio-player';

import mensajealaconciencia from '../../audios/mensajes/20220726mc.mp3'
import imagen1 from '../../imagenes/imagen1.jpeg'
import imagen2 from '../../imagenes/imagen2.jpg'
import imagen3 from '../../imagenes/imagen3.jpeg'


const Redsocial = (props) => {
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
        {encabezado:'1 Juan 2:15:',
        imagen:imagen1,
        pie:'No améis al mundo, ni las cosas que están en el mundo. Si alguno ama al mundo, el amor del Padre no está en él.'},

        {encabezado:'1 Juan 2:15:',
        imagen:imagen2,
        pie:'No améis al mundo, ni las cosas que están en el mundo. Si alguno ama al mundo, el amor del Padre no está en él.'},

        {encabezado:'1 Juan 2:15:',
        imagen:imagen3,
        pie:'No améis al mundo, ni las cosas que están en el mundo. Si alguno ama al mundo, el amor del Padre no está en él.'}

    ]
    	
    	
    	
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

    const ventanaprevia = () => {
        navegar(-1)
    }
  //style={{ width: '100%', height: 350 }}
//<PerfectScrollbar style={{ width: '100%', height: 'calc(100vh - 190px)', left: 'unset', right: '0' }}
//>
//</PerfectScrollbar>
    return (
        <div className='divfilasexternodevocional'>
            <Scrollbars style={{ width: '100%', height: '100%'}} >
                <div className='divaudiodevocional'>
                    <div className='divparrafotituloaudiodevocional'>
                        <p className='parrafotituloaudiodevocional'>
                        Un mensaje a la consciencia 
                        </p>
                    </div>
            
                    <div className='audiodevocional'>
                        <ReactAudioPlayer
                            src={mensajealaconciencia}
                            autoPlay = {false}
                            controls
                        />
                   
                    </div>
                </div>

                <div className='divpromesadevocional'>
                    <p className='parrafopromesadevocional'>
                        Porque yo se los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos
                        de paz y no de mal, para daros el fin que esperaís. Jeremias 29:11  
                    </p>
                </div>

                <div className='divlecturadevocional'>
                    <div className='divtitulolecturadevocional'>
                        <p className='titulolecturadevocional'>
                            Leyendo la biblia en un año: Lectura de hoy 
                        </p>
                    </div>
                    <div className='divtextolecturadevocional'>
                        <p className='textolecturadevocional'>
                            Isaias 37 - 39, Salmos 76
                        </p>
                    </div>
                </div>
                <div className='separador'>
                </div>
                    

                {lista.length > 0 ? (
                    lista.map((fila, index) => (
                    <div  
                        className='divdevocionalcard'
                    >
                        <div  
                            className='divdevocionalcardarriba'
                            >
                            <p className='parrafocita2'>
                                {fila.encabezado} 
                            </p>
                        </div>

                        <div  
                            className='divdevocionalcardmedio'
                        >
                            <img className = 'imagendevocionalmedio' 
                                src={fila.imagen} alt = 'imagen'
                            />
                        </div>

                        <div  
                            className='divdevocionalcardabajo'
                        >
                            <p className='parrafotexto2'>
                                {fila.pie}
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

export default Redsocial;
