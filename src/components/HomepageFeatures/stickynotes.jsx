import React from 'react';

const StickyNote = ({ children }) => {
  const noteStyle = {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderLeft: '4px solid #2124bb', // Color primario de tu tema
    borderRadius: '8px',
    padding: '1.3em 1.5em',
    margin: '2.5em 0',
    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
    color: '#334155',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  };

  return (
    <div style={noteStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <span style={{ fontSize: '1.1rem' }}></span>
        <strong style={{ color: '#2124bb', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
          NOTA:
        </strong>
      </div>
      <div style={{ fontWeight: 400 }}>
        {children}
      </div>
    </div>
  );
};

export default StickyNote;