import React from 'react';

export default function StartCard({ children }) {
  return (
    <div style={{ 
      backgroundColor: '#D9EDF7', 
      border: '1px solid #0047bb', 
      padding: '15px', 
      borderRadius: '4px', 
      display: 'flex', 
      justifyContent: 'left', 
      alignItems: 'center', 
      boxShadow: '4px 4px 0px 0px rgba(0, 71, 187, 0.5)',
      marginBottom: '20px'
    }}>
      <div style={{ textAlign: 'left' }}>
        {children}
      </div>
    </div>
  );
}