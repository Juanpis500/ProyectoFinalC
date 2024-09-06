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
                    Maria Lucia Campoy <br />
                    4(87)319-85-00 <br />
                    mariaLuCampoy@gmail.com
                </p>
            </div>
            <div>
                <p>
                    Social Media Links <br /><br /><br />
                    Facebook <br />
                    Instagram <br />
                    Whatsapp - 348(897)557-37-06
                </p>
            </div>
        </footer>
    )
}