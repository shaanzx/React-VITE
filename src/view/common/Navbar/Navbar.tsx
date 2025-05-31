import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

export function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 mt-2 bg-white/5 shadow-lg backdrop-blur-md rounded-xl h-16 w-[calc(100%-42px)] text-black">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <h2 className="text-xl font-bold">SJ.</h2>
            </div>
            <div className="flex items-center gap-5">
                <ul className="flex items-center gap-5 list-none">
                    <li>
                        <Link
                            to="/"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <button className="bg-black text-white rounded-md px-4 py-1 hover:bg-[#745270] transition">
                    <Link to="/login" className="text-white no-underline">
                        Sign In
                    </Link>
                </button>
            </div>
        </div>
    );
}
