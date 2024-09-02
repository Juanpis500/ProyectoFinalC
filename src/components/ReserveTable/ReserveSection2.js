import { useState } from "react"
import "../../styles/ReservationSection2.css"

export default function ReserveSection2(props){
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.setBandBtn2(true);
    }
    
    return(
        <form className="form-reservation2" onSubmit={handleSubmit}>
            <h1>Confirm your data</h1>
            <div>
                <label for="set-name">Full Name: </label>
                <input id="set-name" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label for="set-name">Email: </label>
                <input id="set-email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="information-content">
                <h4>Data:</h4>
                <div>
                    <p>Number of people: </p>
                    <p>{props.person}</p>
                </div>
                <div>
                    <p>Date: </p>
                    <p>{props.date}</p>
                </div>
                <div>
                    <p>Time:</p>
                    <p>{props.time}</p>
                </div>
                <div>
                    <p>Occasion: </p>
                    <p>{props.occasion}</p>
                </div>
            </div>
            <input type="submit" value="Continue"/>
        </form>
    )
}