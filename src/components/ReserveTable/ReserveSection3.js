import { Link } from "react-router-dom"
import icon_reserve from "../../assets/images/reserved.png"
import "../../styles/ReservationSection3.css"

export default function ReserveSection3(){
    return(
        <div className="form-reservation3">
            <div>
                <img
                    src={icon_reserve}
                    alt="reserved"
                    width="20%"
                />
                <h4>Congratulations</h4>
                <p>You have completed your table reservation</p>
                <p className="reserv3-second-p">Thank you for booking with us we hope to see you soon.</p>
            </div>
            <div>
                <Link to="/" className="button-finish">Finish</Link>
            </div>
        </div>
    )
}