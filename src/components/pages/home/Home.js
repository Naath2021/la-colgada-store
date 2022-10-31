import { faGlobe, faHandSparkles, faTruck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { firebaseDb } from "../../../firebase/FirebaseInitializer"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { collection, getDocs } from "firebase/firestore"
import LoaderImg from "../../loader/Loader"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    AOS.init();

    const { baseUrl } = useContext(CartContext);
    const [catImage, setCatImage] = useState([])

    const getProductsInfo = () => {
        const querySnapshot = collection(firebaseDb, "products");
        getDocs(querySnapshot).then((res) => {
            const data = res.docs.map((product) => {
                return { id: product.id, ...product.data() }
            })
            setCatImage(data)
            // console.log(data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        getProductsInfo()
    }, [])


    return (
        <>
            <div className="sections-container" >
                <div className="welcoming ">
                    {/* <h1 className="titles-web welcoming-title" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="2000">manufactura estimulante de objetos únicos...</h1> */}
                </div>
                <div className="description" >
                    <div className="text-container b-radius" data-aos="fade-up" data-aos-duration="600">
                        <h2 className="texts">la colgada es sensibilidad artística comprometida con explorar la noble manufactura y su trascender en objetos cotidianos.</h2>
                    </div>
                </div>

                <div className="brand-details">
                    <div className="detail-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <h2 className="texts detail-title">envíos a todo el país</h2>
                        <h3 className="texts detail-desc">compra desde cualquier parte de Argentina. Consulta para envíos internacionales</h3>
                    </div>

                    <div className="detail-container" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="250">
                        <FontAwesomeIcon icon={faHandSparkles} className="icon" />
                        <h2 className="texts detail-title">piezas únicas</h2>
                        <h3 className="texts detail-desc">nuestras piezas son moldeadas y pintadas a mano, nada de industrias, ¡sólo creatividad!</h3>
                    </div>

                    <div className="detail-container" data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="400">
                        <FontAwesomeIcon icon={faTruck} className="icon" />
                        <h2 className="texts detail-title">devoluciones seguras</h2>
                        <h3 className="texts detail-desc">15 días para cambiar tu producto de manera gratuita</h3>
                    </div>
                </div>

                <div className="categories-container">
                    <h2 className="titles-web category-title" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000">categorías</h2>
                    <div className="card-container">
                        <Link to={"products/category/macetas"} className="link-router">
                            {
                                catImage.length === 0
                                    ? <div className="category-img b-radius"><LoaderImg className="loader" /> </div>
                                    : <>
                                        <div className="categories b-radius">
                                            <img src={baseUrl + catImage[5].image1} alt="categoria-macetas" className="category-img b-radius" />
                                            <h3 className="texts category-name">macetas</h3>
                                        </div>
                                    </>
                            }
                        </Link>
                        <Link to={"products/category/utensilios"} className="link-router">
                            {
                                catImage.length === 0
                                    ? <div className="category-img b-radius"><LoaderImg className="loader" /> </div>
                                    : <>
                                        <div className="categories b-radius">
                                            <img src={baseUrl + catImage[9].image1} alt="categoria-macetas" className="category-img b-radius" />
                                            <h3 className="texts category-name">utensilios</h3>
                                        </div>
                                    </>
                            }
                        </Link>
                        <Link to={"products/category/combos"} className="link-router">
                            {
                                catImage.length === 0
                                    ? <div className="category-img b-radius"><LoaderImg className="loader" /> </div>
                                    : <>
                                        <div className="categories b-radius">
                                            <img src={baseUrl + catImage[3].image1} alt="categoria-macetas" className="category-img b-radius" />
                                            <h3 className="texts category-name">combos</h3>
                                        </div>
                                    </>
                            }
                        </Link>
                    </div>
                </div>


                <div className="about">
                    <div className="text-container b-radius" data-aos="zoom-in-down" data-aos-duration="1000">
                        {/* <h2 className="titles-web about-title">acerca de</h2> */}
                        <h3 className="texts about-desc">somos una marca de cerámicas, que construye sus artefactos artesanalmente, con un concepto individual y diseños únicos y espontáneos que hace de cada uno una pieza especial ¡no hay dos iguales!</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home