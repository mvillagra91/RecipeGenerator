// src/components/Navbar.jsx
export const Navbar = () => {
    const links = [
        ['Home', '/'],
        ['Recetas', '/recetas'],
        ['Tradiciones', '/tradiciones'],
        ['Busqueda', '/busqueda'],
        
    ];

    return (
        <div className="fixed flex justify-center w-full bg-transparent pt-3 z-20">
            <nav className="flex max-w-md space-x-4 bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl">
                {links.map(([title, url], index) => (
                    <a
                        key={index}
                        href={url}
                        className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
                        aria-current={window.location.pathname === url ? 'page' : undefined}
                    >
                        {title}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
