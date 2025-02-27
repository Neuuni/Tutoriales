import React from "react";
import './intro.css';
import mascota from "./img/mascota.gif";
import nevil from "./img/nevil1.gif";
import nevil2 from "./img/nevil2.gif";
import nevil3 from "./img/nevil-origin.gif";

function Intro() {
  return (
    <>
      <div className="contenedor-intro">
        <h1 className="title-intro">
          <b>¡Bienvenido a los tutoriales de NEUUNI Universidad!</b> 👋📚🎓
        </h1>
        <div className="contenido">
          <div className="contenido-izquierdo">
            <p className="centered-paragraph">
            <strong>Selecciona la sección de tutoriales que te interesa: 🔍</strong>
            </p>
            <div className="botones-intro">
              <a href="https://cursos.unineuuni.edu.mx/courses/course" className="btn-intro">
                <b>Plataforma NEUUNI</b>
              </a>
              <p>Aprende a navegar por tu entorno virtual, acceder a tus cursos, entregar tareas y revisar calificaciones.</p>
              <a href="https://app.gedux.mx/login" className="btn-intro">
                <b><strong>💸 Plataforma Gedux</strong></b>
              </a>
              <p>Descubre cómo utilizar esta herramienta para gestionar tus actividades académicas y administrativas de manera eficiente.</p>
              <a href="https://meet.google.com/" className="btn-intro">
                <b><strong>💻 Google Meet</strong></b>
              </a>
              <p>Conoce cómo unirte a tus clases en línea, participar en video</p>
            </div>
            <p> </p>
            <p className="centered-paragraph"><b>¡Bienvenidos y mucho éxito en tu camino académico! 📚🎓</b></p>
          </div>
          <div className="contenido-derecho">
            <img src={nevil3} alt="none" className="img-intro" loop="infinite" />
          </div>
        </div>
      </div>
      <hr className="block-div" />
    </>
  );
}

export default Intro;