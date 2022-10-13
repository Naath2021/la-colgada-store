
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {

    const { cart } = useContext(CartContext)
    return (
        <>
            <div className='cart-items-container'>
                <FontAwesomeIcon icon={faBagShopping} />
                {cart.length !== 0 ? <h6 className='cart-items-qty titles-web'>{cart.length}</h6> : ""}
            </div>
        </>
    )
}

export default CartWidget