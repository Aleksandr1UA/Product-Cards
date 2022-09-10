import './Product.css';
import {Col, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({product, addToCart, removeFromCart}) {

    return  <Col xs={6} md={4} className="my-2">
                <Card className="p-3 h-100 product-card" border="success">
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title className="text-center text-danger">{product.price} грн</Card.Title>
                        <Link to={`/products/${product.id}`}>{product.brand} {product.model}</Link>
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