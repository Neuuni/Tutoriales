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
          <b>Bienvenido a nuestro Centro de Ayuda NEUUNI</b> 👋📚🎓
        </h1>
        <h2 className="subtitle-intro">
          Explora nuestros tutoriales y encuentra el conocimiento que buscas.
        </h2>
        <div className="contenido">
          
          {/* COLUMNA IZQUIERDA: Aprendizaje */}
          <div className="contenido-izquierdo">
            <div className="centered-paragraph">
              <h2 className="presentation">Elige tu camino de aprendizaje: 🔍</h2>
            </div>
            
            <div className="botones-intro">
              
              {/* --- BLOQUE 1: Primeros pasos --- */}
              <div className="bloque-camino">
                <a href="/docs/category/primeros-pasos.html" className="btn-intro">
                  <b>🌱 Primeros pasos</b>
                </a>
                <p className="txt-intro">
                  Aprende cómo acceder a la plataforma con tu correo institucional y conoce los elementos que la conforman.
                </p>
              </div>

              {/* --- BLOQUE 2: Tutoriales NEUUNI --- */}
              <div className="bloque-camino">
                <a href="/docs/category/plataforma-neuuni.html" className="btn-intro">
                  <b>📘 Tutoriales NEUUNI</b>
                </a>
                <p className="txt-intro">
                  Domina la plataforma NEUUNI: accede a tus cursos, sube tus actividades, participa en los foros, y mucho más.
                </p>
              </div>

              {/* --- BLOQUE 3: Tutoriales Gedux --- */}
              <div className="bloque-camino">
                <a href="/docs/category/plataforma-gedux.html" className="btn-intro">
                  <b>💵 Tutoriales Gedux</b>
                </a>
                <p className="txt-intro">
                  Explora las funciones para gestionar tus pagos y consultar tus calificaciones.
                </p>
              </div>

              {/* --- BLOQUE 4: Tutoriales Google Meet --- */}
              <div className="bloque-camino">
                <a href="/docs/category/google-meet.html" className="btn-intro">
                  <b>💻 Tutoriales Google Meet</b>
                </a>
                <p className="txt-intro">
                  Conoce cómo unirte a tus clases sincrónicas con tu correo institucional para interactuar con tus compañeros y mentores.
                </p>
              </div>

            </div>

            <div className="centered-paragraph" style={{ marginTop: '25px' }}>
              <h2 style={{ color: '#0047bb' }}>¡Éxito en tu camino académico! 📚🎓✨</h2>
            </div>
          </div>
          
          {/* COLUMNA DERECHA: Mascota y Soporte (Alineación Mejorada) */}
          <div className="contenido-derecho">
            
            {/* NUEVO: Contenedor con estilo de Caja Dedicada para Nevil */}
            <div className="contenedor-nevil caja-nevil">
              <img 
                src={nevil3} 
                alt="Nevil" 
                className="img-nevil-centrado" 
                loop="infinite"
              />
            </div>
            
            <div className="contenedor-soporte">
              <SupportSection />
            </div>          
          </div>

        </div>
      </div>
      <hr className="block-div" />
    </>
  );
}

export default Intro;