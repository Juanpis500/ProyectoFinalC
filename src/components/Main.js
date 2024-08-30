
import restaurant from "../assets/images/restauranfood.jpg"
import "../styles/Main.css"
import Speacials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import { Link } from "react-router-dom";

export default function Main(){

    const tittle = "Little Lemon";
    const subtitle = "Chicago";
    const url = "/reserve-online";

    return(
        <main>
            <div className="prin-content">
                <section>
                    <h1>{tittle}</h1>
                    <h4>{subtitle}</h4>
                    <p>We are a family owned <br /> Mediterranean restaurant, <br /> focused on traditional <br /> recipes served with a modern <br /> twist</p>
                    <Link  to={url}  className="reserve-button">Reserve a Table</Link>
                </section>
                <img
                    className="main-img"
                    src={restaurant}
                    alt="This is princial img"
                />
            </div>
            <section className="special-content">
                <div className="special-tittle">
                    <h1>This Weeks specials!</h1>
                    <a href="">Online Menu</a>
                </div>
                <Speacials></Speacials>
            </section>
            <section className="testimonials-content">
                <h1>Testimonials</h1>
                <Testimonials></Testimonials>
            </section>
            <section>
                <About></About>
            </section>
        </main>
    )
}