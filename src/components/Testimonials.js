
import hombre  from "../assets/images/hombre.png"
import mujer from "../assets/images/mujer.png"
import star from "../assets/images/favorito.png"
import "../styles/Testimonials.css"


export default function Testimonials(){

    const data = [{
        user: "Roman Roles",
        rating: "4/5 ",
        opinion: '"Its a good place, the food are tasty."',
        photo: hombre
    },
    {
        user: "Susana Faris",
        rating: "5/5 ",
        opinion: '"Its a incredible place, the food are delicious"',
        photo: mujer
    },{
        user: "Julian German",
        rating: "4/5 ",
        opinion: '"Its a nice place, I Like the food but I dont know If I get back"',
        photo: hombre
    },{
        user: "Hannah Flores",
        rating: "5/5 ",
        opinion: '"I like the place, because they have my favorite greeek salad."',
        photo: mujer
    },];

    const items = data.map((da)=>{
        return(
            <div>
                <p>{da.user}</p>
                <div>
                    <img
                    src={da.photo}
                    alt="Photo user"
                    width="50px"/>
                    <p>{da.rating}</p>
                    <img
                    src={star}
                    alt="Photo user"
                    width="25px"
                    height="25px"/>
                </div>
                <p>{da.opinion}</p>
            </div>
        )
    })

    return(
        <div className="testimonials-content-items">
            {items}
        </div>
    )
}