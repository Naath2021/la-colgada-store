import Carousel from 'react-bootstrap/Carousel'
import Counter from '../../../counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'semantic-ui-react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { Link } from 'react-router-dom';
import { btnOrderCheckout } from '../../../buttons/Buttons';



function ProductDetail({ item }) {

    const { addToCart, baseUrl } = useContext(CartContext);

    const [count, setCount] = useState(1);

    function onAdd(product, totalPrice) {
        addToCart(product, count, totalPrice)
    };

    const calculatedPrice = item.price * count;

    return (
        <>
            <div className='item-container'>
                <div className='item-img' >
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block carr-img"
                                src={baseUrl + item.image1}
                                alt={item.image1}
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carr-img"
                                src={baseUrl + item.image2}
                                alt={item.image2}
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carr-img"
                                src={baseUrl + item.image3}
                                alt={item.image3}
                            />

                        </Carousel.Item>
                    </Carousel>

                </div>

                <div className='item-info'>
                    <h1 className='item-title titles-web'>{item.name}</h1>
                    <h3 className="item-price texts">${item.price}</h3>
                    <h2 className='item-desc texts'>{item.description}</h2>
                    <h6 className='item-design-disclaimer'>IMPORTANTE: todas las imágenes son ilustrativas, debido a que son piezas únicas y es probable que vengan en diferentes formas, sólo se mantienen los tamaños informados.</h6>
                    <h2 className='item-qty texts' >cantidad: <br /> <Counter count={count} setCount={setCount} /></h2>
                    <div className="btn-container">
                        <Button className='add-to-cart' animated='vertical' onClick={() => onAdd(item, calculatedPrice)}>
                            <Button.Content hidden className='btn-content'>agregar al carrito</Button.Content>
                            <Button.Content visible>
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </Button.Content>
                        </Button>

                        {btnOrderCheckout}
                    </div>
                    <Link to="../products" className='link-router btn-to-products b-radius-5'>o... ¡sigue comprando!</Link>
                </div>
            </div>
        </>
    );
}

export default ProductDetail