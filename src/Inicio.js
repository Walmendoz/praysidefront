//import logo from './logo.svg';
import React, {useState, useEffect}from 'react';
import {useNavigate} from 'react-router-dom'

const mipagina = window.location.href
var idiomaalmacenado = localStorage.getItem('idioma');
var emailalmacenado = localStorage.getItem('email');
var nombrealmacenado = localStorage.getItem('nombre');
var logueadoalmacenado = localStorage.getItem('logueado');
//const miStorage = window.localStorage
//localStorage.setItem('idioma', 'ingles');
//localStorage.removeItem('miGato');
// Elimina todos los elementos
//localStorage.clear();
function Inicio(props) {
  const navegar = useNavigate();
 
  useEffect(() => {
    const obtenerconfiguracion = () => {
        if(logueadoalmacenado !== null){
          if(logueadoalmacenado === 'true'){          
            props.setUsuariocorreo(emailalmacenado)
            props.setUsuarionombre(nombrealmacenado)
            props.setIdiomaestablecido(idiomaalmacenado)
            navegar('/Mipanel')
          }else{
            props.setIdiomaestablecido(idiomaalmacenado)
            navegar('/Iniciarsesion')
          }
        }else{
          props.setIdiomaestablecido('ingles')
          localStorage.setItem('idioma', 'ingles');
          navegar('/Iniciarsesion')
        }
      }  
      obtenerconfiguracion()
  }, [])    
  //  [] arreglo vacio para que se ejecute una sola vez al cargar el componente

}

export default Inicio;
