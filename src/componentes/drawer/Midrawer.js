import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

import Drawer from '@mui/material/Drawer';
import {Toolbar} from "@mui/material"
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import './Midrawerestilos.css'

const Midrawer = (props) => {

// procedimiento propio
    const navegar = useNavigate();
    var b = true
    const estilo = ''
    const [opcioneditarmicuenta, setOpcioneditarmicuenta] = useState('Editar mi cuenta');
    const [opcioncerrarsesion, setOpcioncerrarsesion] = useState('Cerrar sesion');

    useEffect(() => { 
        const poneridioma = () => {
            if (props.idiomaestablecido === 'español'){
                setOpcioneditarmicuenta('Editar mi cuenta')  
                setOpcioncerrarsesion('Cerrar sesion')
            
            }
            if (props.idiomaestablecido === 'frances'){
                setOpcioneditarmicuenta('Modifier mon compte')  
                setOpcioncerrarsesion('Se déconnecter')

            }
            if (props.idiomaestablecido === 'ingles'){
                setOpcioneditarmicuenta('Edit my account')  
                setOpcioncerrarsesion('Log out')

            }
            if (props.idiomaestablecido === 'portugues'){
                setOpcioneditarmicuenta('Editar minha conta')  
                setOpcioncerrarsesion('Fechar Sessão')

            }
    
        }
          poneridioma()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.idiomaestablecido])

    const verificarpermiso = (procedimiento) => {
        if (procedimiento !== '/Iniciarsesion'){
            if (b){
                navegar(procedimiento);
            }else{
                mostraralerta();    
            }
        }else{
            props.setLogueado(false)
            props.setUsuarionombre('')
            props.setUsuariocorreo('')
            localStorage.setItem('logueado', 'false');
            localStorage.setItem('email','');
            localStorage.setItem('nombre','');
            navegar(procedimiento);
        }
    }

    const mostraralerta =() =>{
        Swal.fire('Usted no tiene Permisos Para Trabajar en esta Opcion!')
     }


    return(
        <Drawer 
            className={estilo.drawer}
            variant={props.variant}
            open={props.abrirdrawer}
            onClose={props.accionAbrirdrawer ? props.accionAbrirdrawer : null}
            anchor="left"

            classes={{
                paper:estilo.drawerPaper,
            }}
        >
                  <Toolbar />
      <Divider />
            <List>
                <ListItemButton onClick={() => verificarpermiso('/Editarcuenta')}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={opcioneditarmicuenta} />
                </ListItemButton>

                <ListItemButton onClick={() => verificarpermiso('/Iniciarsesion')}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary={opcioncerrarsesion} />
                </ListItemButton>
            </List>
            <Divider />

        </Drawer>
    )


}
export default Midrawer;


/*    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Midrawer;*/


/*
    const presionarClickB = () => {
        setOpenb(!openb);
    };
    
    const presionarClickO = () => {
        setOpeno(!openo);
    };
    
    const presionarClickC = () => {
        setOpenc(!openc);
    };

    const presionarClickR = () => {
        setOpenr(!openr);
    };

    const mostraralerta =() =>{
        swal('Usted no tiene Permisos Para Trabajar en esta Opcion!')
     }

//    const CustomLink = () =>  history.push('/Contenedor');
//    onClick={() => history.push('/Home')}
//    onClick={verificarpermiso}

    //    <div className={estilo.toolbar}></div> esto es para dejar espacio arriba de 240
//    <Divider/> y se coloca despues del drawer antes del list nav

    // UseState
    const [resultadoderechos, setResultadoderechos] = useState([]);

    useEffect(() => {
        const obtenerderechos = (usuario) => {
            var url = props.midominio + `/apis/buscarpermisos.php?usuario=${usuario}`;
            Ejecutarsql(url).then((info) => {
                setResultadoderechos(info)
            })           
      }  
      obtenerderechos(props.usuario)

    }, [props.usuario])


    const verificarpermiso = (opcion, procedimiento) => {
        const permiso = resultadoderechos.filter(item => item.programa === opcion) 

        if (permiso.length > 0){
            history.push(procedimiento);
        }else{
            mostraralerta();    
        }
    }

    return(
        <Drawer 
            className={estilo.drawer}
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
            anchor="left"

            classes={{
                paper:estilo.drawerPaper,
            }}
        >

            <List 
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader 
                        component="div" 
                        id="nested-list-subheader"
                    >
                        Menu de Opciones
                    </ListSubheader>
                }
            >
                <ListItem button 
                  onClick={presionarClickB} 
                  className={estilo.botontitulomenu}
                  >
                    <ListItemIcon>
                        <StorageIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="BASE DE DATOS" />
                    {openb ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openb} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button 
                           onClick={verificarpermisoParametros}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Parametros" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoAreas}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Areas" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoUsuarios}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Usuarios" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoPermisos}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Permisos" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoProcesos}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Procesos" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoFases}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Fases de Proceso" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGBA07','/Cargos')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Cargos" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGBA08','/Funciones')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Funciones de cargos" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGBA09','/Criterios')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Criterios a evaluar" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGBA10','/Notificaciones')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Notificaciones" className={estilo.opcionmenu}/>
                        </ListItem>

                    </List>
                </Collapse>


                <ListItem button 
                  onClick={presionarClickO}
                  className={estilo.botontitulomenu}
                >
                    <ListItemIcon>
                        <ListAltIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="OPERACIONES" />
                    {openo ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openo} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button 
                            onClick={verificarpermisoTareas}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Asignacion de tarea" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoMistareas}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Tareas pendientes" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoMedidor}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Medidor de Gestion" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={verificarpermisoIniciarproceso}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Iniciar un Proceso" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGOP05','/Mantenimientoproceso')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Mantnmiento Proceso" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGOP06','/Evaluardesempeno')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Evaluar desempeño" className={estilo.opcionmenu}/>
                        </ListItem>

                    </List>
                </Collapse>

                <ListItem button 
                  onClick={presionarClickC}
                  className={estilo.botontitulomenu}
                >
                    <ListItemIcon>
                        <EqualizerIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="CONSULTAS" />
                    {openc ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openc} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button 
                            onClick={verificarpermisoMigestion}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Mi Gestion de Tareas" className={estilo.opcionmenu}/>
                        </ListItem>
                    
                        <ListItem button 
                            onClick={verificarpermisoEstadoproceso}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Trazabilidad Proceso" className={estilo.opcionmenu}/>
                        </ListItem>
                    
                        <ListItem button 
                            onClick={() => verificarpermiso('SOGCO03','/Midesempeno')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Mi desempeño" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            onClick={() => verificarpermiso('SOGCO04','/Michat')}
                            className={estilo.botonopcionmenu}>
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Mi chat" className={estilo.opcionmenu}/>
                        </ListItem>

                    </List>
                </Collapse>

                <ListItem button 
                  onClick={presionarClickR}
                  className={estilo.botontitulomenu}
                >
                    <ListItemIcon>
                        <PrintIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="REPORTES" />
                    {openr ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openr} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button 
                        className={estilo.botonopcionmenu}
                        onClick={verificarpermisoGestionusuario}
                        >
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Gestion por usuario" className={estilo.opcionmenu}/>
                        </ListItem>

                        <ListItem button 
                            className={estilo.botonopcionmenu}
                            onClick={verificarpermisoGestionempresa}
                            >
                            <ListItemIcon>
                            <FiberManualRecordIcon className={estilo.iconoopcion} />
                            </ListItemIcon>
                            <ListItemText primary="Desempeño empresa" className={estilo.opcionmenu}/>
                        </ListItem>

                    </List>
                </Collapse>

                <Divider/>
            </List>

        </Drawer>
    )
}
export default Midrawer

*/