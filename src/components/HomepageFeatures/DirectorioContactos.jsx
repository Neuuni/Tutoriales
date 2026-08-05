import React from 'react';
import './DirectorioContactos.css';

const DirectorioContactos = ({ contactos = [] }) => {
  const datosDefault = [
    {
      avatar: null,
      departamento: 'Nombre del Departamento',
      carreras: ['Programa o Carrera 1', 'Programa o Carrera 2'],
      whatsapp: '5210000000000',
      correo: 'contacto@ejemplo.com'
    }
  ];

  const lista = contactos.length > 0 ? contactos : datosDefault;

  return (
    <div className="directorio-grid">
      {lista.map((item, index) => (
        <div key={index} className="contacto-card">
          
          {/* Avatar más grande */}
          {item.avatar && (
            <img 
              src={item.avatar} 
              alt={item.departamento} 
              className="contacto-avatar"
            />
          )}
          
          {/* Información Principal */}
          <div className="contacto-info">
            <h3 className="contacto-titulo">{item.departamento}</h3>
            
            {item.carreras && item.carreras.length > 0 && (
              <ul className="contacto-carreras">
                {item.carreras.map((carrera, i) => (
                  <li key={i}>{carrera}</li>
                ))}
              </ul>
            )}

            {item.correo && (
              <div className="contacto-correo-wrapper">
                <span className="correo-icono">✉️</span>
                <a href={`mailto:${item.correo}`} className="contacto-correo">
                  {item.correo}
                </a>
              </div>
            )}
          </div>

          {/* Acción WhatsApp limpia a la derecha/abajo */}
          {item.whatsapp && (
            <div className="contacto-accion">
              <a 
                href={`https://wa.me/${item.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-neuni-card"
              >
                💬 Contactar por WhatsApp
              </a>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default DirectorioContactos;