import React from 'react'
import '../styles/FormularioLogin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FormularioLogin() {
    return (
        <div className="account-access">
            <div className="login-section">
                <h2>Iniciar sesión</h2>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo Electrónico" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar mis datos" />
                </Form.Group>

                <Button variant="primary" type="submit" className="botonIni">
                    Iniciar sesión
                </Button>
                </Form>
                <div class="social-login-container">
                    <div class="separator">
                        <span class="line"></span>
                        <span class="circle">o</span>
                        <span class="line"></span>
                    </div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
                    <button className="social-login google">
                        <i class="fab fa-google"></i> Iniciar sesión con Google
                    </button>
                    <button className="social-login facebook">
                        <i class="fab fa-facebook-f"></i> Iniciar sesión con Facebook
                    </button>
                </div>
            </div>
            <div className="register-section">
                    <h2>Registrarse</h2>
                    <p>Registra una cuenta en MiTienda. Tiene muchos beneficios como: checkout más rápido, conservar más de una dirección, historial de pedidos y más.</p>
                    <a href="/Register">
                        <button class="boton-registrarse">Registrarse</button>
                    </a>
            </div>
        </div> 
    );
}
