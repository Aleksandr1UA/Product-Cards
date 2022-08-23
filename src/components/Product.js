import {Col, Card, Button} from 'react-bootstrap';

function Product({product}) {
    
    return  <Col xs={6} md={4} className="my-2">
                <Card className="p-3 h-100" border="success">
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title className="text-center text-danger">{product.price} грн</Card.Title>
                        <Card.Text className='text-center'>{product.brand} {product.model}</Card.Text>
                        <Card.Text className="text-center">{product.description}</Card.Text>
                    </Card.Body>
                    <div>
                        <Button variant="primary">Buy</Button>
                    </div>
                </Card>
            </Col>
}

export default Product;