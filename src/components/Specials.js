import greeksalad from  "../assets/images/greek_salad.jpg"
import bruschetta from "../assets/images/bruchetta.svg"
import lemonDessert from "../assets/images/lemon dessert.jpg"

import "../styles/specials.css"


export default function Speacials(){

    const data = [{
        name: "Greek Salad",
        price: "$12.99",
        drescription: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        img: greeksalad
    },{
        name: "Bruschetta",
        price: "$5.99",
        drescription: "Our Bruschetta id made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: bruschetta
    },{
        name: "Lemon Dessert",
        price: "$5.00",
        drescription: "this comes straight from grandma's recipe book, every, last ingredient has been sourced and is as authentic as can be imagined.",
        img: lemonDessert
    }];

    const items = data.map((dat)=>{
        return(
            <div>
                <img
                    src={dat.img}
                    alt="this is a image of food"
                    width="300px"
                />
                <div className="secondary-especial-content">
                    <div>
                        <h1>{dat.name}</h1>
                        <p>{dat.price}</p>
                    </div>
                    <p>{dat.drescription}</p>
                    <a href="#">Order delivery</a>
                </div>
            </div>
        )
    });

    return (
        <div className="cont-prin">
            {items}
        </div>
    )
}