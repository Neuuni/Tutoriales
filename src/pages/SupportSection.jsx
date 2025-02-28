import React from 'react';
import styles from './styles.module.css';
import styles2 from './intro.css';

const copyEmailToClipboard = () => {
  navigator.clipboard.writeText('ayuda@unineuuni.edu.mx');
  alert('Correo electrónico copiado al portapapeles');
};

function SupportSection() {
  return (
    <div className={styles.supportSection}>
      <h3 style={{ color: 'gray' }}>¿Tienes sugerencias o no encuentras lo que buscas? 👁‍🗨🔍</h3>
      <h2 style={{ color: '#0047bb' }}>Contáctate con Soporte Técnico: 👇</h2>
      <div className={styles.supportButtons}>
        <a href="https://wa.me/5214401051527" className={styles.whatsappButton} target='_blank' rel='noreferrer'>
          WhatsApp
        </a>
        <button onClick={copyEmailToClipboard} className={styles.emailButton}>
          Copiar correo
        </button>
      </div>
    </div>
  );
}

export default SupportSection;