import { useState } from "react";

export default function Navabar(){
    const[ data] = useState([{
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
            <li>
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

