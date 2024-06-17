import React from 'react'
import '../styles/FormularioRegistro.css'

export default function formularioRegistro() {
  return (
    <div className="registration-container">
        <div className="social-login2-container2">
            <h2>Registrarse</h2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
            <button className="social-login2 google2">
                <i class="fab fa-google"></i> Iniciar sesión con Google
            </button>
            <button className="social-login2 facebook2">
                <i class="fab fa-facebook-f"></i> Iniciar sesión con Facebook
            </button>
        </div>
        <h2>Registrarse en MiTienda</h2>
        <form className="registration-form">
            <label className="campoletras" type="text">Nombres *</label>
            <input className= "campo-nombres" type="nombre" id="nombres" name="nombres" placeholder="" required />
            <div className="row">
                <div className="column">
                    <label>Apellido Paterno *</label>
                    <input className="selec-reg" type="text" id="apellido-paterno" name="apellido-paterno" required />
                </div>
                <div className="column">
                    <label>Apellido Materno *</label>
                    <input className="selec-reg" type="text" id="apellido-materno" name="apellido-materno" required />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label>Número de Documento *</label>
                    <input className="selec-reg" type="text" id="numero-documento" name="numero-documento" required />
                </div>
                <div className="column">
                    <label>Tipo Documento *</label>
                    <select className="selec-reg" id="tipo-documento" name="tipo-documento" required>
                    <option value="">Seleccione Tipo Documento</option>
                    <option value="dni">CI</option>
                    <option value="pasaporte">Pasaporte</option>
                    <option value="otro">NIT</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label>Fecha de Nacimiento*</label>
                    <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required />
                </div>
                <div className="column">
                    <label>Teléfono Celular *</label>
                    <input className="selec-reg" type="text" id="apellido-materno" name="apellido-materno" required />
                </div>
            </div>
            <label>Correo Electronico *</label>
            <input type="text" id="CorreoElectronico" name="CorreoElectronico" required />
            <div className="row">
                <div className="column">
                    <label>Contraseña *</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="column">
                    <label>Confirmar Contraseña *</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
            </div>
            <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
