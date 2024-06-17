import React from 'react'
import Carousel1 from '../layouts/Carousel1'
import ReactPlayer from 'react-player'

export default function Inicio() {
  const video ="https://youtu.be/pJNgZAKDEqU?si=M3KeOWMBXjkYo_D-"
  const video2 ="https://youtu.be/EiOYCU6aruw?si=OUH3mQhamgkj8CjQ"
  const video3="https://youtu.be/gC2CmXV9BqA?si=yCH0h3hrB45zFAAa"
  return (
    <div>
      <div><Carousel1/></div>
      <h1 className='h1-inicio'>Reviews</h1>
      <h2 className='h2-inicio'>Review Samsung Galaxy s23 Ultra</h2>
      <div style={{height:'300px', display: 'flex', alignItems: 'center', textAlign: 'center', margin: '80px 100px'}}>
        <ReactPlayer
          url={video} //Nos sirve para llamar a la URL
          playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
          volume={0.5}  //Es para poner el volumen por defecto en este caso al 50%
          controls      //Para que aparezcan los controles de pausa y volumen
          width='50%'
          height='400px'
        />
        <p className="p-inicio">En esta review del confiable canal de NewEsc podemos ver lo bueno que es el dispositivo de Gama Alta de la marca Samsung.</p>
      </div>
      <h2 className='h2-inicio'>Review Xiaomi 13 Pro</h2>
      <div style={{height:'300px', display: 'flex', alignItems: 'center', textAlign: 'center', margin: '80px 100px'}}>
        <ReactPlayer
          url={video2} //Nos sirve para llamar a la URL
          playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
          volume={0.5}  //Es para poner el volumen por defecto en este caso al 50%
          controls      //Para que aparezcan los controles de pausa y volumen
          width='50%'
          height='400px'
        />
        <p className="p-inicio">En esta review del canal de CarlosVassan podemos ver las caracteristicas del dispositivo, pruebas de la cámara, pruebas de rendimiento  y mucho más.</p>
      </div>
      <h2 className='h2-inicio'>Review Huawei P50 Pro</h2>
      <div style={{height:'300px', display: 'flex', alignItems: 'center', textAlign: 'center', margin: '80px 100px'}}>
        <ReactPlayer
          url={video3} //Nos sirve para llamar a la URL
          playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
          volume={0.5}  //Es para poner el volumen por defecto en este caso al 50%
          controls      //Para que aparezcan los controles de pausa y volumen
          width='50%'
          height='400px'
        />
        <p className="p-inicio">En esta review del canal de Isa Marcial podemos ver las caracteristicas del dispositivo, pruebas de la cámara, pruebas de rendimiento  y mucho más.</p>
      </div>
    </div>
    
  )
}
