import React from 'react';

export default function IntroBox({ children }) {
  return (
    <div style={{ 
      backgroundColor: '#ebf5fb', // Azul de fondo
      border: '1px solid #d6eaf8', // Borde perimetral sutil (azul de fondo un poco más oscuro)
      borderLeft: '5px solid #0047bb', // Borde lateral grueso de énfasis
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '30px',
      fontSize: '1.15rem', 
      lineHeight: '1.6',
      color: '#000', 
      fontStyle: 'italic'
    }}>
      {children}
    </div>
  );
}