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
        <h1 className="title-intro" 
          //style={{ 
          //  textShadow: '-1px -1px 0 #002d75, 1px -1px 0 #002d75, -1px 1px 0 #002d75, 1px 1px 0 #002d75', 
          //  color: '#fff', 
            //backgroundColor: 'gray', // Fondo para que el borde sea visible
            //padding: '10px', // Espacio adicional para mejor visualización
          //</div>}}
          >
          <b>Bienvenido a nuestro Centro de Ayuda NEUUNI</b> 👋📚🎓
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
            <a href="/docs/category/primeros-pasos.html" className="btn-intro">
                <b>🚼 Primeros pasos</b>
              </a>
              <p>Aprende cómo acceder a la plataforma con tu correo institucional y conoce los elementos que la conforman.</p>
              <a href="/docs/category/plataforma-neuuni.html" className="btn-intro">
                <b>📘 Tutoriales NEUUNI</b>
              </a>
              <p>Aprende a navegar por tu entorno virtual: accede a tus cursos, sube tus actividades, participa en los foros, y mucho más.</p>
              <a href="/docs/category/plataforma-gedux.html" className="btn-intro">
                <b><strong>💸 Tutoriales Gedux</strong></b>
              </a>
              <p>Gestiona tu historial académico y tus pagos mensuales de manera fácil y segura.</p>
              <a href="/docs/category/google-meet.html" className="btn-intro">
                <b><strong>💻 Tutoriales Google Meet</strong></b>
              </a>
              <p>Conoce cómo unirte a tus clases sincrónicas con tu correo institucional para interactuar con tus compañeros y mentores.</p>
            </div>
            <p> </p>
            <p className="centered-paragraph"><h2 style={{ color: '#0047bb' }}>¡Éxito en tu camino académico! 📚🎓✨</h2></p>
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