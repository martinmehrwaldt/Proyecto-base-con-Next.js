import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

    return(

        <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 border-t border-gray-500">

            <span className="text-sm p-4">{new Date().getFullYear()} © Mehrwaldt Store | <Link href="/policies">Políticas, términos y condiciones</Link></span>
            
            <div className="flex gap-6">

                <a href="https://www.instagram.com/mehrwaldt.store/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

                <a href="https://twitter.com/MehrwaldtStore" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>

            </div>

        </footer>

    )

}