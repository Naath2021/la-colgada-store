
import { Link } from 'react-router-dom';
import { btnOrderCheckout } from "../../buttons/Buttons"
import CartItems from '../orderCheckout/cart-items/CartItems';

const CartBody = ({ cart, getTotalCartPrice, clearCart }) => {
    return (
        <>
            <div className="cart-offcanvas">
                {
                    cart.length === 0
                        ? <>
                            <div className="empty-cart-notif">
                                <h6 className='texts  empty-cart'>estoy vacío, lléname de productos</h6>
                                <Link to="products" className='link-router cart-to-products b-radius-5'>¡a ver!</Link>
                            </div>
                        </>
                        : <CartItems />
                }
                < h5 className='texts cart-total-price' > total: ${getTotalCartPrice()}</h5 >
                {/* styled on _buttons.scss */}
                <div className="cart-body-action-btn">
                    {btnOrderCheckout}
                    <h6 onClick={() => clearCart()} className="clear-cart b-radius-5">vaciar carrito</h6>
                </div>
            </div>
        </>
    )
}

export default CartBody