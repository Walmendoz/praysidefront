import React, {useState, useEffect} from 'react';
import Tabladeayuda from './Tabladeayuda';
import IconButton from '@material-ui/core/IconButton';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Scrollbars } from 'react-custom-scrollbars';

const Ayudabuscar =  (props) => {
    const [listainicial, setListainicial] = useState([])    
    const [listafiltrada, setListafiltrada] = useState([])
    // Iniciar Matriz de datos
    useEffect(() => {
        setListainicial(props.listadeayuda)
        setListafiltrada(props.listadeayuda)
    },[] )
    
    const filtrar = (e) => {
        var found = listainicial.filter(elemento => 
                        elemento.codigo.toUpperCase().includes(e.target.value.toUpperCase()) || 
                        elemento.nombre.toUpperCase().includes(e.target.value.toUpperCase())
                    )
        setListafiltrada(found)
    }

    return(
        <div className={props.estilo.ventanamodalayudabuscar}>
            <div className={props.estilo.divcolumnas}>
                <div className={props.estilo.divfilasrightcienporciento}>
                    <IconButton 
                        className={props.estilo.contenedorbotonicono}
                        aria-label="cerrar"
                        onClick={() => props.abrircerrarmodal()}
                    >
                    <CancelRoundedIcon 
                        className={props.estilo.botoniconobuscar}
                        fontSize='small'
                    />
                    </IconButton>            

                </div>                    
                <div className={props.estilo.divtituloh2}>
                    <h3 className={props.estilo.tituloh2}>Busqueda de Datos</h3>
                </div>

                <input 
                    className={props.estilo.campotextoayuda}
                    type="text" 
                    name="buscar"
                    placeholder='Que estas buscando...'
                    onChange={filtrar}
                />
                <Scrollbars style={{ width: '100%', height: 350  }}>
                    <Tabladeayuda 
                        listadeayuda={listafiltrada} 
                        seleccionado={props.seleccionado}                
                        estilo={props.estilo}
                    />
                </Scrollbars>     
            </div>
        </div>
    )

}

export default Ayudabuscar;

