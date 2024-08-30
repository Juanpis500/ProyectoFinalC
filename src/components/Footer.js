import "../styles/Footer.css"
import logo from "../assets/images/logo_footer_sin.png"

export default function Footer(){
    return(
        <footer>
            <img src={logo}
                alt="Logo Footer"/>
            <div>
                <p>
                    Doormat Navigation <br /> <br /><br />
                    Home <br />
                    About
                    Menu <br />
                    Reservations <br />
                    Order Online <br />
                    Login <br />
                </p>
            </div>
            <div>
                <p>
                    Contact <br /><br /><br />
                    Name <br />
                    Phone numer <br />
                    Email
                </p>
            </div>
            <div>
                <p>
                    Social Media Links <br /><br /><br />
                    Name <br />
                    Phone numer <br />
                    Email
                </p>
            </div>
        </footer>
    )
}