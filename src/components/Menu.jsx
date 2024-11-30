// import React from 'react'

export const Menu = () => {
  const links = [
    ['Home', '/home'],
    ['Recetas', '/recetas'],
    ['Busqueda', '/search'],
    ['Recomendaciones', '/recomendaciones'],
  ];

  return (
    <div className="pt-2 flex justify-center">
      <nav className="flex sm:justify-center max-w-md space-x-4 bg-gray-200 rounded-xl">
      {links.map(([title, url], index) => (
        <a
          key={index}
          href={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          aria-current={window.location.pathname === url ? 'page' : undefined}
        >
          {title}
        </a>
      ))}
    </nav>
    </div>
  );
};