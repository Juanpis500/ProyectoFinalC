import { useState } from "react";
import '../styles/Header.css';

export default function Navabar(){
    const[data] = useState([{
        name:"HOME",
        url:""
    },
    {
        name:"ABOUT",
        url:""
    },
    {
        name:"MENU",
        url:""
    },
    {
        name:"RESERVATIONS",
        url:""
    },
    {
        name:"ORDER ONLINE",
        url:""
    },
    {
        name:"LOG IN",
        url:""
    }]);

    const itemnav = data.map((inf)=>{
        return(
            <li className="Navbar-listitem">
                <a href={inf.url}>{inf.name}</a>
            </li>
        )
    })

    return(
        <ul>
            {itemnav}
        </ul>
    );
}

