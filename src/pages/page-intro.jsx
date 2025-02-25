import React from "react";
import intro from "./intro.css";
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
            <p>
              Esta página ha sido creada especialmente para apoyarte en tu camino académico, brindándote acceso rápido y sencillo a tutoriales que te guiarán en el uso de las principales herramientas que utilizarás durante tu formación. Aquí encontrarás recursos detallados sobre:
            </p>
            <ul>
              <li><strong>Plataforma NEUUNI</strong>: Aprende a navegar por tu entorno virtual, acceder a tus cursos, entregar tareas y revisar calificaciones.</li>
              <li><strong>Plataforma Gedux</strong>: Descubre cómo utilizar esta herramienta para gestionar tus actividades académicas y administrativas de manera eficiente.</li>
              <li><strong>Google Meet</strong>: Familiarízate con las videollamadas, reuniones virtuales y clases en línea para que nunca te pierdas una sesión importante.</li>
            </ul>
            <p>¡Bienvenidos y mucho éxito en tu camino académico! 📚🎓</p>
            {/* <div className="botones-intro">
              <a href="https://cursos.unineuuni.edu.mx/courses/course" className="btn-intro" id="btn-intro1"><b>Plataforma de Neuuni</b></a>
              <a href="https://app.gedux.mx/login" className="btn-intro"><b>Plataforma de pagos</b></a>
            </div> */}
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