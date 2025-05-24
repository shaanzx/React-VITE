import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../../../assets/logo.jpg";

export function Navbar() {
    return (
        <div className={"navbar"}>
            <div className={"navbar_logo"}>
                <img src={logo} alt="logo"/>
                <h2>SJ.</h2>
            </div>
            <div className={"navigation"}>
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <button className={"signIn"}><Link to="/login">Sign In</Link></button>
            </div>
        </div>
    );
}