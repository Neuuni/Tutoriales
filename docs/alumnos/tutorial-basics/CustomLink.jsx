import React from 'react';

// Componente personalizado para enlaces
const CustomLink = ({ href, children, ...props }) => {
  return (
    <a href={href} style={{ color: '#0047bb', textDecoration: 'underline' }} {...props}>
      {children}
    </a>
  );
};

export default CustomLink;