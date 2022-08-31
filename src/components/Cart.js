import './Cart.css';
import {ListGroup} from 'react-bootstrap';
import CartItem from './CartItem';
import Total from './Total';

function Cart({products, removeFromCart, addProduct, reduceProduct}) {

    return <div className={'cart-block p-4 bg-white'}>
        <h3 className={'text-center'}>Cart</h3>
        <ListGroup>
            {
                products.map(product => <CartItem product={product} 
                                                removeFromCart={removeFromCart}
                                                addProduct={addProduct}
                                                reduceProduct={reduceProduct} 
                                                key={product.id}/>)
            }
        </ListGroup>
        <Total products={products} />
    </div>
}

export default Cart;