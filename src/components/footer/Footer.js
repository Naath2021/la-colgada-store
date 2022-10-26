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
                    <a className="texts footer-section-link" href="https://www.instagram.com/la.colgada/">instagram</a>
                    <a className="texts footer-section-link" href="https://es-la.facebook.com/">facebook</a>
                    <a className="texts footer-section-link" href="https://www.tiktok.com/es/">tiktok</a>
                </div>

                <div className="explore" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                    <h2 className="texts section-title">explora</h2>
                    <Link to={"/"} className="link-router texts footer-section-link">inicio</Link>
                    <Link to={"products"} className="link-router texts footer-section-link">productos</Link>
                    <Link to={"faq"} className="link-router texts footer-section-link">Faq</Link>
                    <Link to={"contacto"} className="link-router texts footer-section-link">contacto</Link>
                </div>

                <div className="contact" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
                    <h2 className="texts section-title">contacto</h2>
                    <h3 className="texts footer-section-link">si@lacolgada.com.ar</h3>
                    <h3 className="texts footer-section-link">la.colgada.com.ar</h3>
                    <h3 className="texts footer-section-link">@la.colgada</h3>
                </div>

            </div>

            <div className="disclaimer">
                <h4 className="texts disclaimer-text">&copy; Buenos Aires - Argentina 2022. | Todos los derechos reservados.</h4>
            </div>

        </div>
    )
}

export default Footer