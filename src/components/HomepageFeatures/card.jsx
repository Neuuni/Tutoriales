import React from 'react';

const Card = ({ 
  children, 
  isImage = true, 
  isHorizontal = true, 
  color = '#ffffff' 
}) => {
  const defaultAlt = isHorizontal ? 'Captura horizontal' : 'Captura vertical';

  const cardStyle = {
    backgroundColor: color === '#fff' ? '#ffffff' : color,
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
    padding: isImage ? (isHorizontal ? '0px' : '1.5rem') : '1.2em 1.5em',
    width: '100%',
    maxWidth: isHorizontal ? '100%' : '380px', 
    margin: '2.5em 0',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
    color: '#334155',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  };

  // Función recursiva para inyectar estilos/alt a imágenes sin romper Markdown/MDX
  const renderChildren = (nodes) => {
    return React.Children.map(nodes, (child) => {
      if (!React.isValidElement(child)) return child;

      // Si el elemento es un <img>
      if (child.type === 'img') {
        return React.cloneElement(child, {
          alt: child.props.alt || defaultAlt,
          style: { 
            width: '100%', 
            height: 'auto', 
            display: 'block', 
            borderRadius: isHorizontal ? '0px' : '4px', 
            ...child.props.style 
          }
        });
      }

      // Si Markdown envuelve la imagen en un <p>, eliminamos el margen extra del contenedor
      if (child.type === 'p') {
        return React.cloneElement(child, {
          style: { margin: 0, padding: 0, ...child.props.style },
          children: renderChildren(child.props.children)
        });
      }

      // Si contiene sub-hijos, procesamos recursivamente
      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          children: renderChildren(child.props.children)
        });
      }

      return child;
    });
  };

  // Separa los hijos en dos partes: el primer elemento (imagen) y el resto (texto/pie de foto)
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  const restChildren = childrenArray.slice(1);

  return (
    <div style={cardStyle}>
      {/* 🖼️ Contenedor de la imagen */}
      <div style={{ width: '100%', display: 'block', lineHeight: 0 }}>
        {renderChildren(firstChild)}
      </div>

      {/* 📝 Contenedor de texto/pie de foto (se renderiza si existen elementos extra) */}
      {restChildren.length > 0 && (
        <div 
          style={{ 
            padding: '1rem 1.25rem', 
            textAlign: 'center', 
            color: '#64748b', 
            fontSize: '0.875rem',
            borderTop: '1px solid #f1f5f9',
            backgroundColor: '#f8fafc'
          }}
        >
          {renderChildren(restChildren)}
        </div>
      )}
    </div>
  );
};

export default Card;