import "../styles/about.css"
import image1 from "../assets/images/Mario and Adrian A.jpg"
import image2 from "../assets/images/Mario and Adrian b.jpg"

export default function about(){
    const tittle = "Little Lemon";
    const subtitle = "Chicago";

    return(
        <>
            <div>
                <h1>{tittle}</h1>
                <h4>{subtitle}</h4>
                <p>We are a restaurant with a wide variety of food, we started our operations in 1999. We pride ourselves on our high quality dishes. We look forward to you enjoying our food.</p>
            </div>
            <div className="about-img">
                <img
                    src={image2}
                    alt="Restaurant 1"
                    />
                <img
                    src={image1}
                    alt="Restaurant 2"
                    />
            </div>
        </>
    )
}