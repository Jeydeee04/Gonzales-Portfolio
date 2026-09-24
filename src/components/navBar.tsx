export default function NavBar(){
    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return(
        <header className="fixed top-0 h-screen p-3">
            <nav className="flex flex-col h-full bg-white px-14 pb-40 justify-center items-center gap-15 border-r-2 rounded-2xl border-gray-200">
                <a href="/" className="group flex items-center gap-1 uppercase transition-transform duration-300 ease-out hover:-translate-y-0.5 font-rubik">
                    <h1 className="font-bold text-xl text-gray-600 transition-colors duration-300 group-hover:text-black">
                        Jey
                    </h1>
                    <div className="relative">
                        <h1 className="font-bold text-3xl text-gray-900">
                        Dom
                        </h1>
                        <span className="absolute -bottom-1 left-0 h-0.75 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                    </div>
                </a>

                <ul className="flex flex-col items-center gap-5 text-gray-700">
                    {navItems.map((item, i) => (
                        <li key={i}>
                        <a
                            href={item.href}
                            className="group relative inline-flex items-center gap-2 py-1 text-base font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-black"
                        >
                            <span className="text-gray-600 opacity-0 transition-all duration-300 ease-out -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
                            &lt;
                            </span>

                            <span>{item.name}</span>

                            <span className="text-gray-600 opacity-0 transition-all duration-300 ease-out translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
                            &gt;
                            </span>

                            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                        </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}