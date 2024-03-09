import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Componente from "./components/Componente.jsx"; 
// import Propiedades from "./components/Propiedades.jsx";
// import Estado from "./components/Estado.jsx";
// import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
// import RenderizadoElementos from "./components/RenderizadoElementos.jsx";
// import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos.jsx";
// import ComunicacionComponentes from "./components/ComunicacionComponentes.jsx";
// import CicloVida from "./components/CicloVida.jsx";
// import AjaxApis from "./components/AjaxApis.jsx";
// import ContadorHooks from "./components/ContadorHooks.jsx";
// import ScrollHooks from "./components/ScrollHooks.jsx";
// import RelojHooks from "./components/RelojHooks.jsx";
// import AjaxHooks from "./components/AjaxHooks.jsx";
// import HooksPersonalizados from "./components/HooksPersonalizados.jsx";
import Referencias from "./components/Referencias.jsx";
// import Formularios from "./components/Formularios";
// import Estilos from "./components/Estilos";
// import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
  <section>
          {/* <Componente msg="Hola soy un Componente Funcional Expresado desde una propiedad" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Jon", correo: "jonmircha@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como Prop" />
            }
            />
          <hr />
           <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks /> */}
          {/* <hr />
          <HooksPersonalizados /> */}
          <hr />
          <Referencias />
          </section>
          {/*
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section> */}
      </header>
    </div>
  );
}

export default App;