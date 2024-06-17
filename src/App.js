import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Inicio from './components/Inicio';
import Accesorios from './components/Accesorios';
import Celulares from './components/Celulares';
import Navbarprim from './layouts/NavbarPrim';
import Creditos from './components/Creditos';
import Footer2 from './layouts/Footer2';
import Carousel1 from './layouts/Carousel1';
import Tablets from './components/Tablets';
import Busquedas from './components/Busquedas'
import Login from './components/Login';
import Registro from './components/Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarprim/>
        <section className="content">
          <Routes>
            <Route index element={
              <Inicio>
                <Carousel1/>
              </Inicio>
            }/>
            <Route path='Accesorios' element={<Accesorios/>}/>
            <Route path='Celulares' element={<Celulares/>}/>
            <Route path='Tablets' element={<Tablets/>}/>
            <Route path='Creditos' element={<Creditos/>}/>
            <Route path="/search/:searchTerm" element={<Busquedas/>} />
            <Route path='*' element={<Navigate replace to="/"/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Registro/>} />
          </Routes>
        </section>
        <Footer2/>
      </BrowserRouter>
    </div>
  );
}

export default App;
