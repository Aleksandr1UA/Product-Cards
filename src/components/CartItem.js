import './CartItem.css';
import { useState } from 'react';
import {ListGroup, Badge} from 'react-bootstrap';

function CartItem({product, removeFromCart, reduceProduct, addProduct}) {
    const [value, setValue] = useState();

    return <ListGroup.Item className={'d-flex justify-content-end mx-3'}
        key={product.id}>{product.brand} {product.model} ({product.price.toFixed(2)}грн)
        <span className={'mx-3'}>
            <button className={'input-btn'} disabled={product.count === 1} onClick={() => reduceProduct(product.id)}>-</button>
            <input className={'form-input'} type={'text'} size={2} value={product.count} onChange={e => setValue(e.target.value)}/>
            <button className={'input-btn'} onClick={() => addProduct(product.id)}>+</button>
        </span>
        <Badge bg='danger' className={'text-white cursor-pointer'} 
                        onClick={() => removeFromCart(product.id)} >Remove</Badge>
    
    </ListGroup.Item>
}

export default CartItem;