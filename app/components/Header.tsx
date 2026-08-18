import Link from "next/link";

export default function Header() {

    return(

        <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 border-b border-gray-500">

            {/* Semanticamente no se utiliza un h1 dentro de un link.
            Luego lo cambiaremos por un span o <p> con estilos */}

            <Link href="/">
                <h1 className="text-2xl font-bold text-slate-300">Mehrwaldt Store</h1>
            </Link>

            <nav>
                <ul className="flex gap-6 text-slate-300">

                    <li>
                        <Link className="hover:text-slate-100 transition-colors" href="/">Inicio</Link>    
                    </li>

                    <li>
                        <Link className="hover:text-slate-100 transition-colors" href="/productos">Productos</Link>
                    </li>

                    <li>
                        <Link className="hover:text-slate-100 transition-colors" href="/carrito">Carrito</Link>
                    </li>

                </ul>
            </nav>

        </header>

    );

}