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
                </div>

                <div className="explore" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                    <h2 className="texts section-title">explora</h2>
                    <Link to={"/"} className="link-router texts footer-section-link">inicio</Link>
                    <Link to={"products"} className="link-router texts footer-section-link">productos</Link>
                    <Link to={"preguntas-frecuentes"} className="link-router texts footer-section-link">Faq</Link>
                </div>

                <div className="contact" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
                    <h2 className="texts section-title">contacto</h2>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFrMrPXKGfCBhFLFsxMhLgtbZXhfGLnwjjhLFtZPJRMwpxBsXpmBbrkVBJZjqjTkxKHtdC' className="link-router texts footer-section-link" target="_blank">hola.colgada@gmail.com</a>
                </div>

            </div>

            <div className="disclaimer">
                <h4 className="texts disclaimer-text">&copy; Buenos Aires - Argentina 2022. | Todos los derechos reservados.</h4>
            </div>

        </div>
    )
}

export default Footer