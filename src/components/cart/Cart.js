import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidget from "./cart-widget/CartWidget"
import CartBody from './cart-body/CartBody';





function Cart() {

  const { cart, clearCart, getTotalCartPrice } = useContext(CartContext);

  // States propios del offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="cart-icon link-router" variant="link">
        <CartWidget />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>¡tu carrito!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartBody cart={cart} getTotalCartPrice={getTotalCartPrice} clearCart={clearCart} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart