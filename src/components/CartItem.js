import {ListGroup, Badge} from 'react-bootstrap';

function CartItem({product, removeFromCart}) {
    return <ListGroup.Item 
        key={product.id}>{product.brand} {product.model} ({product.price.toFixed(2)}грн)
        <Badge bg='danger' className={'ml-3 text-white cursor-pointer'} 
                        onClick={() => removeFromCart(product.id)} >Remove</Badge>
    
    </ListGroup.Item>
}

export default CartItem;