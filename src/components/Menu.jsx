//import React from 'react'

export const Menu = () => {
  return (
    <nav className="bg-black pt-3 pb-3">
        <ul className="flex gap-5 pl-5 ">
            <li>Home</li>
            <li>Recetas</li>
            <li>Busqueda de recetas por:
              <ul className="hidden">
                <li>Nombre</li>
                <li>Ingredientes</li>
                <li>Nacionalidad</li>
              </ul>
            </li>
        </ul>
    </nav>
  )
}