import ReserveSection1 from "./ReserveSection1";
import ReserveSection2 from "./ReserveSection2";
import ReserveSection3 from "./ReserveSection3";
import restaurant from "../../assets/images/restaurant.jpg"
import "../../styles/Reservation.css";
import { useReducer, useState } from "react";

function updateTimes(aviableTimes, action){
    if(action.type === 'update-time'){
        const cadenanumbers = [];
        const temp = [];
        var maxnum = Math.floor(Math.random() * (10 - 5 + 1) ) + 5;
        console.log(maxnum)
        for (var i = 0; i<maxnum; i++){
            var random = Math.floor(Math.random() * (22 - 12 + 1) ) + 12;
            var band = false;
            while(!band){
                if(cadenanumbers.includes(random)){
                    random = Math.floor(Math.random() * (22 - 12 + 1) ) + 12;
                }
                else{
                    cadenanumbers.push(random);
                    band = true;
                }
            }
        }

        cadenanumbers.sort();
        console.log(cadenanumbers)
        for( i=0; i<cadenanumbers.length; i++){
            
            temp.push(cadenanumbers[i] + ":00");
            
        }
        console.log(temp)
        
        return(temp);
    }

}


export default function ReserveHome(){
    const tittle = "How to reserve?";
    const description = "To make a reservation, you must select the number of people who will be coming, the date and time. If it is a special occasion among those offered, select one or leave it as default.";
    const description2 = "After confirming the above information, select next. You will now need to enter your full name and email to confirm your reservation."

    const [person, setPerson] = useState("1 person");
    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [occasion, setOccasion] = useState("None");
    const [bandBtn1, setBandBtn1] = useState(false);
    const [bandBtn2, setBandBtn2] = useState(false);

    const initialTime = ["17:00","18:00","19:00","20:00","21:00","22:00"]


    const[aviableTimes, dispatch] = useReducer(updateTimes,initialTime);

    return(
        <main className="reservation-content">
            <section>
                <h1>{tittle}</h1>
                <p>{description}</p>
                <p>{description2}</p>
                <img
                    src={restaurant}
                    alt="Reserve online"
                    width="100%"/>
            </section>
            <section>
                
                {bandBtn1 === false &&
                    <ReserveSection1
                    person={person}
                    setPerson={setPerson}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    occasion={occasion}
                    setOccasion={setOccasion}
                    bandBtn1={bandBtn1}
                    setBandBtn1={setBandBtn1}
                    aviableTimes={aviableTimes}
                    dispatch={dispatch}/>
                }
                {bandBtn1 === true && bandBtn2 === false &&
                    <ReserveSection2
                    bandBtn2={bandBtn2}
                    setBandBtn2={setBandBtn2}
                    person={person}
                    date={date}
                    time={time}
                    occasion={occasion}
                    setBandBtn1={setBandBtn1}/>
                }
                {bandBtn2 === true &&
                    <ReserveSection3/>
                }
            </section>
        </main>
    )
}