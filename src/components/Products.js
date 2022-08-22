import {Col, Card, Button} from 'react-bootstrap';

function Products() {
    const products = [
        {   
            id: 1,
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/274406560.jpg',
            description: 'Ноутбук Lenovo V14 G2 ITL (Intel i3-1115G4/8/128F/int/W10Pro) Black',
            price: 16999
        },
        {   
            id: 2,
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/272561687.jpg',
            description: 'Ноутбук ASUS TUF Gaming A17 FA706IHR-HX029 (90NR07D5-M000P0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
            price: 36999
        },
        {   
            id: 3,
            img: 'https://content2.rozetka.com.ua/goods/images/big_tile/163381583.jpg',
            description: 'Ноутбук Acer Aspire 5 A515-45G-R63J (NX.A8EEU.001) Charcoal Black',
            price: 24999
        },
        {   
            id: 4,
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/144249716.jpg',
            description: 'Ноутбук Apple MacBook Air 13 M1 256GB 2020 (MGN63) Space Gray',
            price: 42999
        },
        {   
            id: 5,
            img: 'https://content2.rozetka.com.ua/goods/images/big_tile/275080610.jpg',
            description: 'Ноутбук ASUS Laptop X515JA-EJ1814 (90NB0SR3-M34690) Peacock Blue / Intel Pentium Gold 6805 / RAM 8 ГБ / SSD 256 ГБ',
            price: 18499
        },
        {   
            id: 6,
            img: 'https://content.rozetka.com.ua/goods/images/big_tile/248528822.jpg',
            description: 'Ноутбук HP Pavilion Gaming 15-ec2024ua (5A0U9EA) Shadow Black',
            price: 45999
        },
        {   
            id: 7,
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/254116608.jpg',
            description: 'Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008) Charcoal Black',
            price: 36999
        },
        {   
            id: 8,
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/270525898.jpg',
            description: 'Ноутбук ASUS ExpertBook B1 B1500CEAE-BQ1663 (90NX0441-M20230) Star Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ',
            price: 21999
        },
        {   
            id: 9,
            img: 'https://content.rozetka.com.ua/goods/images/big_tile/258420085.jpg',
            description: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700KPRA) Arctic Grey',
            price: 13999
        },
        {   
            id: 10,
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/163403141.jpg',
            description: 'Ноутбук Acer Swift 1 SF114-34-P1A1 (NX.A77EU.00V) Pure Silver',
            price: 17999
        }];

    return products.map(product => {
        return  <Col xs={6} md={4} className="my-2" key={product.id}>  
                    <Card className="p-3 h-100" border="success">
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title className="text-center">{product.price} грн</Card.Title>
                            <Card.Text className="text-center">{product.description}</Card.Text>
                            <Button variant="primary">Buy</Button>
                        </Card.Body>
                    </Card>
                </Col> 
    });   
}

export default Products;