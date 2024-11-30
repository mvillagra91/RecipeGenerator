//import React from 'react'

export const Menu = () => {
  return (
    <div>
      <nav className="bg-black pt-1 pb-1 shadow-2xl font-bold">
        <ul className="flex gap-5 justify-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Recetas</li>
            <ul className="flex">
              <div className="relative group">
                  <div className="flex items-center">
                      <li className="cursor-pointer">Buscar recetas por:</li>
                  </div>
                  <div className="absolute px-1 py-1 hidden group-hover:block bg-black shadow-lg rounded-b-lg">
                    <li className="cursor-pointer pt-1 px-4 py-1 text-white hover:bg-white rounded hover:text-black">Nacionalidad</li>
                    <li className="cursor-pointer pt-1 px-5 py-1 text-white hover:bg-white rounded hover:text-black">Ingredientes</li>
                    <li className="cursor-pointer pt-1 px-8 py-1 text-white hover:bg-white rounded hover:text-black">Nombre</li>
                  </div>
              </div>
          </ul>
        </ul>
      </nav>
      
    </div>
  )
}