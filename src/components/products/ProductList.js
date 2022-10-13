
import React from "react";
import ProductsCard from "./product-card/ProductCard";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductList = ({ list }) => {
    AOS.init();
    return (
        <div className="product-container">
            {
                list.map((product) => (
                    <Link key={product.id} to={"../products/item/" + product.id} className="link-router">
                        <ProductsCard
                            image={product.image1}
                            name={product.name}
                            price={product.price}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductList