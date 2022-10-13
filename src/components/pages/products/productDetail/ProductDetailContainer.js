
import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductDetail from './ProductDetail';
import { firebaseDb } from '../../../../firebase/FirebaseInitializer';
import { doc, getDoc } from 'firebase/firestore';

const ProductDetailContainer = () => {

    const { id } = useParams();

    const queryDoc = doc(firebaseDb, "products", id)

    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        getDoc(queryDoc).then(res => {
            setProductInfo(res.data())
        }).catch(err => console.log(err))
    })

    return (
        <div className='category-page'>
            {productInfo && <ProductDetail item={productInfo} />}
        </div>
    )
}


export default ProductDetailContainer
