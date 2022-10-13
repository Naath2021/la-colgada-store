
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleQuestion, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Cart from '../../cart/Cart';
import { Popup } from 'semantic-ui-react';

function NavbarMobile() {


    return (
        <div className="mobile-icons-container">
            <Link className='link-router mobile-icons' to={"/"}><Popup content='home' trigger={<FontAwesomeIcon icon={faHouse} />} basic /></Link>
            <Link className='link-router mobile-icons' to={"products"}><Popup content='productos' trigger={<FontAwesomeIcon icon={faHandSparkles} />} basic /></Link>
            <Link className='link-router mobile-icons' to={"preguntas-frecuentes"}><Popup content='preguntas frecuentes' trigger={<FontAwesomeIcon icon={faCircleQuestion} />} basic /></Link>
            <Cart />
        </div>
    );
}


export default NavbarMobile