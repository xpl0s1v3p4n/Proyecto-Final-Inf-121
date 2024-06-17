import React from 'react'
import ACards from './MyCardsAccesorios'
import productosAc from '../assets/ProductosAc.js'
export default function Accesorios() {
  return (
    <div>
      <ACards productosAc={productosAc}/>
    </div>
  )
}
