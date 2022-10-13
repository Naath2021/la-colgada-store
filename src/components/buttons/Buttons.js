import { Link } from 'react-router-dom'
import { DropdownItem, Button } from 'semantic-ui-react'
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownCategory() {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="link-router" variant="link">
                productos
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-menu'>
                <DropdownItem><Link to={"products/category/macetas"} >macetas</Link></DropdownItem>
                <DropdownItem><Link to={"products/category/utensilios"} >utensilios</Link></DropdownItem>
                <DropdownItem><Link to={"products/category/combos"} >combos</Link></DropdownItem>
                <DropdownItem><Link to={"products"}>ver todo</Link></DropdownItem>
            </Dropdown.Menu>
        </Dropdown>
    );
}

const btnOrderCheckout = <Link to={"../checkout"}><Button type="button">iniciar compra</Button></Link>

export { DropdownCategory, btnOrderCheckout }