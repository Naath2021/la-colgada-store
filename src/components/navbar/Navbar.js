
import Cart from '../cart/Cart';
import logo from "../../assets/image/logo/logo.png"
import { Link } from "react-router-dom"
import { DropdownCategory } from '../buttons/Buttons';
import NavbarMobile from './navbarMobile/NavbarMobile';

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <Link to={"/"}><img src={logo} className="navbar-logo" alt="logo" /></Link>
                <div className='navbar-list-container'>
                    <ul>
                        <li>
                            <Link to={"products"}><DropdownCategory /></Link>
                            <Link to={"preguntas-frecuentes"}>faq</Link>
                        </li>
                    </ul>
                </div>
                <div className='icon-container'>
                    <Cart />
                </div>
            </div>
            <div className="navbar-mobile-container">
                <NavbarMobile />
            </div>
        </>
    );
};

export default Navbar