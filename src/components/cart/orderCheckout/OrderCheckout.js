import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext'
import CartItems from './cart-items/CartItems'


const OrderCheckout = ({ handleInputChange, createOrder, handleSubmit }) => {


    const { cart, getTotalCartPrice } = useContext(CartContext);

    return (
        <>
            <div className="total-order-container">
                <div className='form-container'>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className='input-container'>
                            <label className='form-label' name="buyer">tus datos</label>
                            <input onChange={handleInputChange} name='fullName' type="text" placeholder='nombre y apellido' />
                            <input onChange={handleInputChange} name='email' type="email" placeholder='correo electrónico' />
                            <input onChange={handleInputChange} name='phoneNumber' type="tel" placeholder='número telefónico (sin +)' />
                        </div>
                        <div className='input-container'>
                            <label className='form-label'>dirección de entrega</label>
                            <input onChange={handleInputChange} name='street' type="text" placeholder='calle o avenida' />
                            <input onChange={handleInputChange} name='buildingNumber' type="number" placeholder='altura' />
                            <input onChange={handleInputChange} name='floorAndApartment' type="text" placeholder='timbre(piso y apartamento)' />
                            <input onChange={handleInputChange} name='neighborhood' type="text" placeholder='barrio' />
                            <input onChange={handleInputChange} name='postalCode' type="number" placeholder='código postal' />
                            <input onChange={handleInputChange} name='city' type="text" placeholder='ciudad' />
                        </div>
                        <div className='input-container'>
                            <label className='form-label'>datos de facturación</label>
                            <input onChange={handleInputChange} name='buyerDocument' type="number" placeholder='DNI del comprador' />
                        </div>
                        <button onClick={createOrder} className="ui button" type="submit">finalizar la compra</button>
                    </form>
                </div>
                <div className="checkout-items-container">

                    {
                        cart.length === 0
                            ? <>
                                <div className="checkout-empty-cart-notif">
                                    <h6 className='texts  empty-cart-checkout'>No tienes items en tu carrito, ve a buscarloos</h6>
                                    <Link to="../products" className='link-router checkout-to-contact b-radius-5'>¡vamos pues! </Link>
                                </div>
                            </>
                            : <>
                                <div className='checkout-items'>
                                    <div className="checkout-cart-items"><CartItems /></div>
                                    <div className="checkout-total"><h2 className='texts checkout-total-price'>total: ${getTotalCartPrice()}</h2></div>
                                </div>

                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default OrderCheckout