import image from "../assets/images/1820.jpg";
import abstractFood from "../assets/images/abstract-food.jpg"

export const Home = () => {
  document.addEventListener("scroll", () => {
    const scrollText = document.getElementById("scrollText");
    const triggerPoint = window.innerHeight / 1.2; // Ajusta el punto de activación
    
    if (scrollText.getBoundingClientRect().top < triggerPoint) {
      scrollText.classList.add("translate-y-0", "opacity-100");
      scrollText.classList.remove("translate-y-10", "opacity-0");
    }
  });
  
  return (
    <>
      {/**Fondo Principal - First Row */}
      <div className="relative min-h-screen shadow-xl">
        <img
          src={image}
          alt="Descripción de la imagen"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className= "text-white text-4xl md:text-6xl lg:text-7xl font-bold stroke-shadow-text select-none text-center">
            ¡Encuentra tu receta favorita!
          </h1>
        </div>
      </div>
      {/**Second Row -> Carteles vinculados a las recetas favoritas*/}
      <div className="bg-orange-300 z-1">
        <div className="flex pt-10 justify-center">
          <h1 className="text-orange-400 text-4xl md:text-6xl lg:text-6xl font-bold stroke-shadow-text select-none text-center">Recetas Destacadas</h1>
        </div>
        {/**Box de recetas destacadas (Solo iran 6 por el momento)*/}
        <div className="pt-14 pb-14">
          <div className="flex flex-wrap gap-12 justify-center gird grid-cols-3 sm:grid-cols-1">
              <div className="size-80 pl-2 pt-2 bg-orange-100 rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out"></div>
              <div className="size-80 pl-2 pt-2 bg-orange-100 rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out"></div>
              <div className="size-80 pl-2 pt-2 bg-orange-100 rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>
      {/**Información de paises y sus especialidades*/}
      <div className="relative min-h-screen shadow-2xl z-19">
        <img
          src={abstractFood}
          alt="Descripción de la imagen"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex justify-center pt-20 z-10">
          <h1 className= "text-yellow-200 text-4xl md:text-6xl lg:text-7xl font-bold abstract-shadow-text select-none">
            Categoría de alimentos
          </h1>
        </div>
      </div>
      {/**Contacto */}
      <div className="bg-slate-800 text-white">
        <div className="grid grid-cols-1 justify-center text-center pt-2 pb-2">
          <div>
            <p className="text-xs">Todos los derechos reservados ©</p>
          </div>
        </div>
      </div>
    </>
  );
};