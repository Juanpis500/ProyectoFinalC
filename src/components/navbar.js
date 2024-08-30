import { useState } from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";

export default function Navabar(){
    const[data] = useState([{
        name:"HOME",
        url:"/"
    },
    {
        name:"ABOUT",
        url:"/"
    },
    {
        name:"MENU",
        url:"/"
    },
    {
        name:"RESERVATIONS",
        url:"/reserve-online"
    },
    {
        name:"ORDER ONLINE",
        url:"/"
    },
    {
        name:"LOG IN",
        url:"/"
    }]);

    const itemnav = data.map((inf)=>{
        return(
            <li className="Navbar-listitem">
                <Link to={inf.url}>{inf.name}</Link>
            </li>
        )
    })

    return(
        <ul>
            {itemnav}
        </ul>
    );
}

