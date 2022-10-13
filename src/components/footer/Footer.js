import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    AOS.init();
    return (
        <div className="footer-container">
            <div className="footer-nav-container">

                <div className="conect" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                    <h2 className="texts section-title">conecta</h2>
                    <a href="https://www.instagram.com/la.colgada/">instagram</a>
                    <a href="https://es-la.facebook.com/">facebook</a>
                    <a href="https://www.tiktok.com/es/">tiktok</a>
                </div>

                <div className="explore" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                    <h2 className="texts section-title">explora</h2>
                    <Link to={"/"} className="link-router">inicio</Link>
                    <Link to={"products"} className="link-router">productos</Link>
                    <Link to={"faq"} className="link-router">Faq</Link>
                    <Link to={"contacto"} className="link-router">contacto</Link>
                </div>

                <div className="contact" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
                    <h2 className="texts section-title">contacto</h2>
                    <h3 className="texts">si@lacolgada.com.ar</h3>
                    <h3 className="texts">la.colgada.com.ar</h3>
                    <h3 className="texts">@la.colgada</h3>
                </div>

            </div>

            <div className="disclaimer">
                <h4 className="texts">&copy; Buenos Aires - Argentina 2022. | Todos los derechos reservados.</h4>
            </div>

        </div>
    )
}

export default Footer