import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Asegúrate de crear un archivo Footer.css para tus estilos

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h5>Empresa</h5>
        <ul>
          <li>Nosotros</li>
          <li>Conoce al equipo</li>
          <li>Hazte nuestro Partner</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Cómo Funcionamos</h5>
        <ul>
          <li>Como funciona MiTienda</li>
          <li>Normas Comunitarias</li>
          <li>Unete a nosotros</li>
          <li>Sugerencias</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Legal</h5>
        <ul>
          <li>Política de privacidad</li>
          <li>Politica sobre cookies</li>
          <li>Reglas de publicación</li>
          <li>Aviso legal y condiciones</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Síguenos</h5>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF link ='facebook.com'/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          {/* ...otros iconos */}
        </div>
      </div>
    </div>
    <div className="footer-bottom">
        &copy;{new Date().getFullYear()} MiTienda | TODOS LOS DERECHOS RESERVADOS
    </div>
  </footer>
  );
}

export default Footer;
