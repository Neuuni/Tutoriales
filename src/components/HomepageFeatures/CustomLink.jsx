import React from 'react';

// Componente personalizado para enlaces
const CustomLink = ({ href, children }) => {
  return (
    <a href={href} style={{ color: '#0047bb', textDecoration: 'underline' }}>
      {children}
    </a>
  );
};

export default CustomLink;