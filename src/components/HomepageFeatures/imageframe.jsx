import React from 'react';

const ImageFrame = ({ children, maxWidth = '100%' }) => {
  const containerStyle = {
    display: 'inline-block', // Ajusta el contenedor al tamaño de la imagen
    lineHeight: 0,           // Elimina el espacio inferior de tipografía
    border: '1px solid #000',
    borderRadius: '4px',
    boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
    margin: '1.5em 0',
    maxWidth: maxWidth,
    overflow: 'hidden',      // Asegura que la imagen respete el border-radius
  };

  const wrapperStyle = {
    display: 'block',
    lineHeight: 0,
  };

  return (
    <div style={containerStyle}>
      <span style={wrapperStyle}>
        {/* Usamos estilos globales para forzar que cualquier img dentro sea block */}
        <style>{`
          .custom-image-frame img {
            display: block !important;
            margin: 0 !important;
            width: 100%;
            height: auto;
          }
        `}</style>
        <div className="custom-image-frame">
          {children}
        </div>
      </span>
    </div>
  );
};

export default ImageFrame;