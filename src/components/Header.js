import Image from "./image";
import Navabar from "./navbar";
import logo from "../assets/images/Logo.svg"


export default function Header(){
    return(
        <nav>
            <Image
                src={logo}
                alt={"This is a logo"}
                width={100}
                height={100}></Image>
            <Navabar></Navabar>
        </nav>
    );
}