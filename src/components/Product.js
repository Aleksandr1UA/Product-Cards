import './Product.css';
import {Col, Card, Button} from 'react-bootstrap';

function Product({product, addToCart, removeFromCart}) {


    return  <Col xs={6} md={4} className="my-2">
                <Card className="p-3 h-100 product-card" border="success">
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title className="text-center text-danger">{product.price.toFixed(2)} грн</Card.Title>
                        <Card.Text className='text-center'>{product.brand} {product.model}</Card.Text>
                        <Card.Text className="text-center product-description">{product.description}</Card.Text>   
                    </Card.Body>
                    <div>
                        { product.addtocart ?
                            <Button variant="danger" onClick={() => {removeFromCart(product.id)}}>Remove</Button> :
                            <Button variant="primary" onClick={() => {addToCart(product.id)}}>Add</Button>
                        }
                    </div>
                </Card>
            </Col>
}

export default Product;