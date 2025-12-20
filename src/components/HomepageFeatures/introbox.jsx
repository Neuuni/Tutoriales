import React from 'react';

export default function IntroBox({ children }) {
  return (
    <>
      {/* Importación de Montserrat desde Google Fonts */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
      </style>

      <div style={{ 
        backgroundColor: '#ebf5fb', 
        border: '1px solid #d6eaf8', 
        borderLeft: '5px solid #0047bb', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '30px',
        // Ajustes específicos para Montserrat
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1rem',      // Montserrat es un poco más "ancha", un tamaño ligeramente menor ayuda
        lineHeight: '1.6',
        color: '#131c24ff',      // Un tono azul oscuro grisáceo combina perfecto con Montserrat
        fontWeight: '400',     // El peso 400 es ideal para el cuerpo de texto
        letterSpacing: '-0.02em' // Montserrat se ve muy elegante con un espaciado ligeramente reducido
      }}>
        {children}
      </div>
    </>
  );
}