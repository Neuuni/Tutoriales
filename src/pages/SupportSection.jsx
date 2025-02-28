import React from 'react';
import styles from './styles.module.css';

const copyEmailToClipboard = () => {
  navigator.clipboard.writeText('ayuda@unineuuni.edu.mx');
  alert('Correo electrónico copiado al portapapeles');
};

function SupportSection() {
  return (
    <div className={styles.supportSection}>
      <p>Si tienes dudas o sugerencias sobre la plataforma, puedes contactarte a Soporte Técnico:</p>
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