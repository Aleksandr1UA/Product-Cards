import './Cart.css';
import {ListGroup} from 'react-bootstrap';
import CartItem from './CartItem';
import {useEffect, useState} from 'react';
import Total from './Total';

function Cart({products, removeFromCart}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(products.reduce((acc, product) => acc + product.price, 0));
    }, [products]);

    return <div className={'cart-block p-4 bg-white'}>
        <h3 className={'text-center'}>Cart</h3>
        <ListGroup>
            {
                products.map(product => <CartItem product={product} 
                                                removeFromCart={removeFromCart} 
                                                key={product.id}/>)
            }
        </ListGroup>
        <Total total={total} />
    </div>
}

export default Cart;