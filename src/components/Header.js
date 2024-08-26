import Image from "./image";
import '../styles/Header.css';
import Navabar from "./navbar";
import logo from "../assets/images/Logo.svg"


export default function Header(){
    return(
        <nav className="Navbar-list">
            <Image
                src={logo}
                alt={"This is a logo"}
                width={200}
                height={100}></Image>
            <Navabar></Navabar>
        </nav>
    );
}