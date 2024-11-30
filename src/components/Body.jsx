//import React from 'react'
import image from "../assets/images/1820.jpg"

export const Body = () => {
    return (
      <div className="flex justify-center min-h-screen">
        <img
          src={image}  // Ruta desde la raíz de public
          alt="Descripción de la imagen"
          className="w-full h-screen object-cover"
        />
      </div>
    );
  };
