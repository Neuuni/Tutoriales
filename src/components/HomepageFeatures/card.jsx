import React from 'react';

const Card = ({ children, isImage = false, color = '#fff' }) => {
  const cardStyle = {
    backgroundColor: color,
    border: '1px solid #000',
    padding: isImage ? '0px' : '15px',
    borderRadius: '4px',
    boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
    margin: '1.5em 0',
    overflow: 'hidden',
    // Usamos flexbox para asegurar que el contenido llene todo el espacio
    display: 'flex',
    flexDirection: 'column',
  };

  // Este estilo busca específicamente la imagen dentro del componente
  const imageStyles = isImage ? {
    display: 'block', // Elimina el comportamiento de texto
    width: '100%',
    height: 'auto',
    margin: 0,
    verticalAlign: 'bottom', // Alinea la imagen a la base absoluta
  } : {};

  return (
    <div style={cardStyle}>
      <div 
        style={{ 
          textAlign: isImage ? 'center' : 'justify', 
          color: '#000',
          fontSize: isImage ? '0' : 'inherit', // Elimina espacios tipográficos
          lineHeight: isImage ? '0' : 'normal' 
        }}
      >
        {/* Envolvamos el contenido para aplicar estilos directos a la imagen si es necesario */}
        <span style={isImage ? { display: 'block', lineHeight: 0 } : {}}>
          {children}
        </span>
      </div>
    </div>
  );
};

export default Card;