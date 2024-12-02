import image from "../assets/images/1820.jpg";

export const Home = () => {

  return (
    <>
      <div className="relative min-h-screen">
        {/* Imagen de fondo */}
        <img
          src={image}
          alt="Descripción de la imagen"
          className="w-full h-screen object-cover"
        />

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-6xl font-bold stroke-shadow-text select-none">
            ¡Encuenta tu receta favorita!
          </h1>
        </div>
      </div>
    </>
  );
};