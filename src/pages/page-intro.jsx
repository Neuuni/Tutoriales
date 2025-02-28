import React from "react";
import './intro.css';
import mascota from "./img/mascota.gif";
import nevil from "./img/nevil1.gif";
import nevil2 from "./img/nevil2.gif";
import nevil3 from "./img/nevil-origin.gif";
import SupportSection from "./SupportSection";

function Intro() {
  return (
    <>
      <div className="contenedor-intro">
        <h1 className="title-intro">
          <b>Bienvenido a nuestro centro de tutoriales de NEUUNI Universidad</b> 👋📚🎓
        </h1>
        <h2 className="subtitle-intro">
          Explora nuestros recursos y encuentra el conocimiento que buscas.
        </h2>
        <div className="contenido">
          <div className="contenido-izquierdo">
            <p className="centered-paragraph">
            <h2 className="presentation">Elige tu camino de aprendizaje: 🔍</h2>
            </p> 
            <div className="botones-intro">
              <a href="/docs/category/primeros-pasos" className="btn-intro">
                <b>📘 Plataforma NEUUNI</b>
              </a>
              <p>Aprende a navegar por tu entorno virtual: accede a tus cursos, sube tus actividades, participa en los foros, y mucho más.</p>
              <a href="/docs/category/plataforma-gedux" className="btn-intro">
                <b><strong>💸 Plataforma Gedux</strong></b>
              </a>
              <p>Gestiona tus pagos mensuales de manera fácil y segura con nuestra herramienta de pagos.</p>
              <a href="/docs/category/google-meet" className="btn-intro">
                <b><strong>💻 Google Meet</strong></b>
              </a>
              <p>Conoce cómo unirte a tus clases en línea con tu correo institucional para interactuar con tus compañeros y mentores.</p>
            </div>
            <p> </p>
            <p className="centered-paragraph"><h2>¡Éxito en tu camino académico! 📚🎓✨</h2></p>
          </div>
          <div className="contenido-derecho">
            <div className="mascota"><img src={nevil3} alt="none" className="img-intro" loop="infinite"/></div>
            <div className="mascota"><SupportSection /></div>          
          </div>
        </div>
      </div>
      <hr className="block-div" />
    </>
  );
}

export default Intro;