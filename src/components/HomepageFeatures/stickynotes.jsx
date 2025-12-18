import React from 'react';

const StickyNote = ({ children }) => {
  const noteStyle = {
    width: '200px',
    height: 'auto',
    backgroundColor: '#fffacd',
    padding: '1em',
    borderRadius: '4px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transform: 'rotate(2deg)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    margin: '2em',
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    color: '#000',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'rotate(-2deg) scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'rotate(2deg) scale(1)';
  };

  return (
    <div 
      style={noteStyle} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
    >
      📌 <strong><em>NOTA:</em></strong><br/>
      <div style={{ fontStyle: 'italic', marginTop: '8px' }}>
        {children}
      </div>
    </div>
  );
};

export default StickyNote;