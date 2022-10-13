import { useState, useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import OrderCheckout from "./OrderCheckout"
import { collection, addDoc } from 'firebase/firestore'
import { firebaseDb } from "../../../firebase/FirebaseInitializer"
import moment from "moment"

const OrderCheckoutContainer = () => {
    const { cart } = useContext(CartContext);
    const order = {
        buyer: {
            fullName: "",
            email: "",
            phoneNumber: 0
        },
        deliveryAddress: {
            street: "",
            buildingNumber: 0,
            floorAndApartment: "",
            neighborhood: "",
            postalCode: 0,
            city: ""
        },
        buyerDocument: 0,
        items: cart,
        total: cart.reduce((acc, total) => acc + (total.product.price * total.qty), 0),
        date: moment().format()
    }

    const [orderInfo, setOrderInfo] = useState(order);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const createOrder = () => {
        const ordersCollection = collection(firebaseDb, "orders")
        addDoc(ordersCollection, orderInfo)
            .then(({ id }) => {
                alert("muchas gracias por tu compra, tu número de orden es: " + id);
            }).catch((err) => {
                alert("compra no finalizada, intenta de nuevo");
                console.log(err)
            })
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === "fullName" || name === "email" || name === "phoneNumber") {
            orderInfo.buyer[name] = value

        } else if (name === "street" || name === "buildingNumber" || name === "floorAndApartment" || name === "neighborhood" || name === "postalCode" || name === "city") {
            orderInfo.deliveryAddress[name] = value

        } else if (name === "buyerDocument") {
            orderInfo[name] = value

        } else {
            orderInfo[name] = value
        }
        setOrderInfo(orderInfo)
        console.log(orderInfo)
    }

    
    return (
        <OrderCheckout handleInputChange={handleInputChange} handleSubmit={handleSubmit} createOrder={createOrder} />
    )
}

export default OrderCheckoutContainer