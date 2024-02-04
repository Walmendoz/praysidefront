//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Opciones de navegacion
import Iniciarsesion from "./entrada/Iniciarsesion";
import Crearcuenta from "./entrada/Crearcuenta";
import Recuperarclave from "./entrada/Recuperarclave";
import Mipanel from "./entrada/Mipanel";
import Editarcuenta from "./entrada/Editarcuenta";
import Myroom from "./organizacion/Myroom";

const mipagina = window.location.href;
var idiomaalmacenado = localStorage.getItem("idioma");
var emailalmacenado = localStorage.getItem("email");
var nombrealmacenado = localStorage.getItem("nombre");
var logueadoalmacenado = localStorage.getItem("logueado");
//const miStorage = window.localStorage
//console.log(miStorage)
//localStorage.setItem('idioma', 'ingles');
//localStorage.removeItem('miGato');
// Elimina todos los elementos
//localStorage.clear(); claro radicado numero: 5086737, 4488220002220943

function App() {
  const [usuariocorreo, setUsuariocorreo] = useState("");
  const [usuarionombre, setUsuarionombre] = useState("");
  const [midominio, setMidominio] = useState("");
  const [midominionode, setMidominionode] = useState("");
  const [idiomaestablecido, setIdiomaestablecido] = useState("");
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    const obtenerconfiguracion = () => {
      //      setMidominio(mipagina.split('com')[0] + 'com')
      //      setMidominionode('https://ejemplosoga.herokuapp.com')
      //setMidominionode('https://node-railway-production-af98.up.railway.app')
      //setMidominionode("https://node-railway-production-b4f9.up.railway.app");
      setMidominionode("https://praysideback.app.mendozapps.com");

      if (logueadoalmacenado !== null) {
        if (logueadoalmacenado === "true") {
          setUsuariocorreo(emailalmacenado);
          setUsuarionombre(nombrealmacenado);
          setIdiomaestablecido(idiomaalmacenado);
          setLogueado(true);
        } else {
          setIdiomaestablecido(idiomaalmacenado);
        }
      } else {
        setIdiomaestablecido("ingles");
        localStorage.setItem("idioma", "ingles");
      }
    };
    obtenerconfiguracion();
  }, []);
  //  [] arreglo vacio para que se ejecute una sola vez al cargar el componente

  return (
    <div className="App-header">
      <Routes>
        <Route
          path="/Crearcuenta"
          element={
            <Crearcuenta
              midominio={midominio}
              midominionode={midominionode}
              idiomaestablecido={idiomaestablecido}
              setIdiomaestablecido={setIdiomaestablecido}
              logueado={logueado}
              setLogueado={setLogueado}
            />
          }
        />
        <Route
          path="/Recuperarclave"
          element={
            <Recuperarclave
              midominio={midominio}
              midominionode={midominionode}
              idiomaestablecido={idiomaestablecido}
              setIdiomaestablecido={setIdiomaestablecido}
              logueado={logueado}
              setLogueado={setLogueado}
            />
          }
        />

        <Route
          path="/Editarcuenta"
          element={
            <Editarcuenta
              usuariocorreo={usuariocorreo}
              setUsuariocorreo={setUsuariocorreo}
              usuarionombre={usuarionombre}
              setUsuarionombre={setUsuarionombre}
              midominio={midominio}
              midominionode={midominionode}
              idiomaestablecido={idiomaestablecido}
              setIdiomaestablecido={setIdiomaestablecido}
              logueado={logueado}
              setLogueado={setLogueado}
            />
          }
        />

        <Route
          exact
          path="/Iniciarsesion"
          element={
            <Iniciarsesion
              usuariocorreo={usuariocorreo}
              setUsuariocorreo={setUsuariocorreo}
              usuarionombre={usuarionombre}
              setUsuarionombre={setUsuarionombre}
              midominio={midominio}
              midominionode={midominionode}
              idiomaestablecido={idiomaestablecido}
              setIdiomaestablecido={setIdiomaestablecido}
              logueado={logueado}
              setLogueado={setLogueado}
            />
          }
        />

        <Route
          exact
          path="/Mipanel"
          element={
            <Mipanel
              usuariocorreo={usuariocorreo}
              setUsuariocorreo={setUsuariocorreo}
              usuarionombre={usuarionombre}
              setUsuarionombre={setUsuarionombre}
              midominio={midominio}
              midominionode={midominionode}
              idiomaestablecido={idiomaestablecido}
              setIdiomaestablecido={setIdiomaestablecido}
              logueado={logueado}
              setLogueado={setLogueado}
            />
          }
        />

        <Route
          exact
          path="/Myroom"
          element={
            <Myroom
              usuariocorreo={usuariocorreo}
              setUsuariocorreo={setUsuariocorreo}
              usuarionombre={usuarionombre}
              setUsuarionombre={setUsuarionombre}
              midominio={midominio}
              midominionode={midominionode}
              idiomaestablecido={idiomaestablecido}
              setIdiomaestablecido={setIdiomaestablecido}
              logueado={logueado}
              setLogueado={setLogueado}
            />
          }
        />
        {logueado ? (
          <Route
            exact
            path="/"
            element={
              <Mipanel
                usuariocorreo={usuariocorreo}
                setUsuariocorreo={setUsuariocorreo}
                usuarionombre={usuarionombre}
                setUsuarionombre={setUsuarionombre}
                midominio={midominio}
                midominionode={midominionode}
                idiomaestablecido={idiomaestablecido}
                setIdiomaestablecido={setIdiomaestablecido}
                logueado={logueado}
                setLogueado={setLogueado}
              />
            }
          />
        ) : (
          <Route
            exact
            path="/"
            element={
              <Iniciarsesion
                usuariocorreo={usuariocorreo}
                setUsuariocorreo={setUsuariocorreo}
                usuarionombre={usuarionombre}
                setUsuarionombre={setUsuarionombre}
                midominio={midominio}
                midominionode={midominionode}
                idiomaestablecido={idiomaestablecido}
                setIdiomaestablecido={setIdiomaestablecido}
                logueado={logueado}
                setLogueado={setLogueado}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
