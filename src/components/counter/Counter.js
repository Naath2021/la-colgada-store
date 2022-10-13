import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Counter = ({ count, setCount }) => {

    const AddItem = () => {
        setCount(count + 1)
        if (count >= 50) {
            alert("Haz alcanzado el máximo de unidades a ordenar")
        }
    }
    const RemoveItem = () => count > 2 ? setCount(count - 1) : count

    

    return (
        <>
            <div className="btn-add-items-to-cart-container">

                <button className="btn-add-substract" onClick={RemoveItem}><FontAwesomeIcon icon={faMinus} /></button>

                <h2 className="itemQty">{count}</h2>

                <button className="btn-add-substract" onClick={AddItem}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </>
    )
}

export default Counter 