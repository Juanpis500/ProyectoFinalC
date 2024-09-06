import "../../styles/ReservationSection1.css"


export default function ReserveSection1(props){
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.setBandBtn1(true);
    }
    
    const itemsTime = props.aviableTimes.map( (e)=> {
        return(
            <option>{e}</option>
        )
    })

    return(
        <form className="form-reservation" onSubmit={handleSubmit}>
            <h1>Reserve a table</h1>
            <div>
                <label for="set-persons">Number of people: </label>
                <select id="set-persons"
                    value={props.person}
                    onChange={e => props.setPerson(e.target.value)}
                    >
                    <option value="1 person">1 person</option>
                    <option value="2 persons">2 persons</option>
                    <option value="3 persons">3 persons</option>
                    <option value="4 persons">4 persons</option>
                    <option value="5 persons">5 persons</option>
                    <option value="6 persons">6 persons</option>
                    <option value="7 persons">7 persons</option>
                    <option value="8 persons">8 persons</option>
                </select>
            </div>
            <div>
                <label for="set-date">Set Date: </label>
                <input type="date" id="set-date" value={props.date} onChange={e => {props.setDate(e.target.value); props.dispatch({type: 'update-time'})}} required/>
            </div>
            <div>
                <label for="set-time">Choose time: </label>
                <select id="set-time "
                    value={props.time}
                    onChange={e => props.setTime(e.target.value)}
                    >
                    {itemsTime}
                </select>
            </div>
            <fieldset>
                <legend>Select if is a special occasion: </legend>
                <div>
                    <input
                        type="radio"
                        id="occasion1"
                        name="occasion"
                        value="Birthday"
                        onChange={e => props.setOccasion(e.target.value)}/>
                    <label for="occasion1">Birthday</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="occasion2"
                        name="occasion"
                        value="Anniversary"
                        onChange={e=>props.setOccasion(e.target.value)}/>
                    <label for="occasion2">Anniversary</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="occasion3"
                        name="occasion"
                        value="None"
                        onChange={e=>props.setOccasion(e.target.value)}/>
                    <label for="occasion3">None</label>
                </div>
            </fieldset>
            
            <input type="submit" value="Continue"/>
        </form>
    )
}