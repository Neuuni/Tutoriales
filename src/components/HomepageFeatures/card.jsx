import React from 'react';

const Card = ({ 
  children, 
  isHorizontal = true, 
  autoWidth = false, 
  color = '#ffffff' 
}) => {
  const defaultAlt = isHorizontal ? 'Captura horizontal' : 'Captura vertical';

  const cardStyle = {
    backgroundColor: color === '#fff' ? '#ffffff' : color,
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    padding: '0px',
    width: '100%',
    maxWidth: isHorizontal ? '100%' : '380px', 
    margin: '2em auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
    color: '#334155',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  };

  const renderChildren = (nodes) => {
    return React.Children.map(nodes, (child) => {
      if (!React.isValidElement(child)) return child;

      if (child.type === 'img') {
        return React.cloneElement(child, {
          alt: child.props.alt || defaultAlt,
          style: { 
            maxWidth: '100%', 
            width: autoWidth ? 'auto' : '100%', 
            height: 'auto', 
            objectFit: 'contain',
            display: 'block', 
            margin: '0 auto',
            borderRadius: '6px',
            ...child.props.style 
          }
        });
      }

      // Mantiene el texto fluido en linea dentro del pie de foto
      if (child.type === 'p') {
        return React.cloneElement(child, {
          style: { margin: 0, padding: 0, display: 'inline', textAlign: 'center', width: '100%', ...child.props.style },
          children: renderChildren(child.props.children)
        });
      }

      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          children: renderChildren(child.props.children)
        });
      }

      return child;
    });
  };

  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  const restChildren = childrenArray.slice(1);

  return (
    <div style={cardStyle}>
      {/* 🖼️ Contenedor de la Imagen */}
      <div 
        style={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          backgroundColor: '#ffffff', 
          padding: '1rem', 
          boxSizing: 'border-box'
        }}
      >
        {renderChildren(firstChild)}
      </div>

      {/* 📝 Pie de foto optimizado */}
      {restChildren.length > 0 && (
        <div 
          style={{ 
            padding: '0.65rem 1.25rem', 
            textAlign: 'center', 
            color: '#475569', 
            fontSize: '0.825rem',
            fontStyle: 'italic',
            lineHeight: '1.5',
            letterSpacing: '0.01em',
            borderTop: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem'
          }}
        >
          <span style={{ fontStyle: 'normal', opacity: 0.8 }}>📌</span>
          <div>{renderChildren(restChildren)}</div>
        </div>
      )}
    </div>
  );
};

export default Card;