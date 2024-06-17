import React from 'react'
import '../styles/NavBar.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import Logo1 from '../assets/img/icon.png'
import LogoUsuario from '../assets/img/usuario.png'
import SearchBar from '../components/BarraBusqueda'
import Resultados from '../components/Resultados'
import { useState } from 'react'
import productos from '../assets/Productos'
import productosAc from '../assets/ProductosAc'
import ProductosTa from '../assets/ProductosTa'

export default function Navbarprim() {
    const [searchTerm, setSearchTerm] = useState('');
    const data = [...productos, ...productosAc, ...ProductosTa];

    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (
    <>
        <Navbar className='navBg' variant='dark' expand="lg">
        <Container className="BarraNavegacion">
            <Navbar.Brand as={Link} to="/">
                <img className='logoPrincipal' src={Logo1} alt="Logo del sitio"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Celulares">Celulares</Nav.Link>
                <Nav.Link as={Link} to="/Accesorios">Accesorios</Nav.Link>
                <Nav.Link as={Link} to="/Tablets">Tablets</Nav.Link>
                <Nav.Link as={Link} to="/Creditos">Creditos</Nav.Link>
            </Nav>
            <Nav>
                <img src={LogoUsuario} alt="Iniciar-Sesion" className="iconoInicioSesion"/>
                <NavDropdown title="Iniciar Sesión" id="basic-nav-dropdown" className="inicioSesion">
                    <NavDropdown.Item as={Link} to="/Login">Iniciar Sesión</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Register">Registrarse</NavDropdown.Item>
                </NavDropdown>
                <SearchBar className="SearchBar" onSearch={handleSearch}/>
                <Resultados searchTerm={searchTerm} data={data}/>
            </Nav>
            </Navbar.Collapse>
        </Container>
        
        </Navbar>

        
        <section>
            <Outlet></Outlet>    
        </section>    

    </>
  )
}
