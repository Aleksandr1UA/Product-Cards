import { useEffect, useState, useContext } from 'react';
import Product from './Product';
import {Row} from 'react-bootstrap';
import Cart from './Cart';
import SearchInProducts from './SearchInProducts';
import ThemeContext from '../context/ThemeContext';

function Products() {
    const {setAlertMessage} = useContext(ThemeContext);
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    useEffect(() => {
        setProducts(
            [{   
                    id: 1,
                    brand: 'Lenovo',
                    model: 'V14 G2 ITL',
                    img: 'https://content.rozetka.com.ua/goods/images/big_tile/274406559.jpg',
                    description: 'Ноутбук Lenovo V14 G2 ITL (Intel i3-1115G4/8/128F/int/W10Pro) Black',
                    price: 16999,
                    addtocart: false,
                    count: 1
                    
                },
                {   
                    id: 2,
                    brand: 'ASUS',
                    model: 'TUF Gaming A17 FA706IHR-HX029',
                    img: 'https://content1.rozetka.com.ua/goods/images/big_tile/272561687.jpg',
                    description: 'Ноутбук ASUS TUF Gaming A17 FA706IHR-HX029 (90NR07D5-M000P0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
                    price: 36999,
                    addtocart: false,
                    count: 1
                    
                },
                {   
                    id: 3,
                    brand: 'Acer',
                    model: 'Aspire 5 A515-45G-R63J',
                    img: 'https://content2.rozetka.com.ua/goods/images/big_tile/163381583.jpg',
                    description: 'Ноутбук Acer Aspire 5 A515-45G-R63J (NX.A8EEU.001) Charcoal Black',
                    price: 24999,
                    addtocart: false,
                    count: 1
                    
                },
                {   
                    id: 4,
                    brand: 'Apple',
                    model: 'Air 13 M1 (MGN63)',
                    img: 'https://content1.rozetka.com.ua/goods/images/big_tile/144249716.jpg',
                    description: 'Ноутбук Apple MacBook Air 13 M1 256GB 2020 (MGN63) Space Gray',
                    price: 42999,
                    addtocart: false,
                    count: 1
                },
                {   
                    id: 5,
                    brand: 'ASUS',
                    model: 'X515JA-EJ1814',
                    img: 'https://content2.rozetka.com.ua/goods/images/big_tile/275080610.jpg',
                    description: 'Ноутбук ASUS Laptop X515JA-EJ1814 (90NB0SR3-M34690) Peacock Blue / Intel Pentium Gold 6805 / RAM 8 ГБ / SSD 256 ГБ',
                    price: 18499,
                    addtocart: false,
                    count: 1
                },
                {   
                    id: 6,
                    brand: 'HP',
                    model: 'Pavilion Gaming 15-ec2024ua',
                    img: 'https://content.rozetka.com.ua/goods/images/big_tile/248528822.jpg',
                    description: 'Ноутбук HP Pavilion Gaming 15-ec2024ua (5A0U9EA) Shadow Black',
                    price: 45999,
                    addtocart: false,
                    count: 1
                },
                {   
                    id: 7,
                    brand: 'Acer',
                    model: 'Aspire 7 A715-42G-R8BL',
                    img: 'https://content1.rozetka.com.ua/goods/images/big_tile/254116608.jpg',
                    description: 'Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008) Charcoal Black',
                    price: 36999,
                    addtocart: false,
                    count: 1
                },
                {   
                    id: 8,
                    brand: 'ASUS',
                    model: 'ExpertBook B1 B1500CEAE-BQ1663',
                    img: 'https://content1.rozetka.com.ua/goods/images/big_tile/270525898.jpg',
                    description: 'Ноутбук ASUS ExpertBook B1 B1500CEAE-BQ1663 (90NX0441-M20230) Star Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ',
                    price: 21999,
                    addtocart: false,
                    count: 1
                },
                {   
                    id: 9,
                    brand: 'Lenovo',
                    model: 'IdeaPad 3 14ITL6',
                    img: 'https://content.rozetka.com.ua/goods/images/big_tile/258420085.jpg',
                    description: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700KPRA) Arctic Grey',
                    price: 13999,
                    addtocart: false,
                    count: 1
                },
                {   
                    id: 10,
                    brand: 'Acer',
                    model: 'Swift 1 SF114-34-P1A1',
                    img: 'https://content1.rozetka.com.ua/goods/images/big_tile/163403141.jpg',
                    description: 'Ноутбук Acer Swift 1 SF114-34-P1A1 (NX.A77EU.00V) Pure Silver',
                    price: 17999,
                    addtocart: false,
                    count: 1
                }])
        }, []);

    const addToCart = id => {
        setProducts(products.map(product => ({...product, addtocart: product.id === id ? true : product.addtocart })))
        setAlertMessage(`Product add to cart`);
    }

    const removeFromCart = id => {
        setProducts(products.map(product => ({...product, 
            addtocart: product.id === id ? false : product.addtocart })))
        setAlertMessage('Product remove from cart');
    }

    const search = e => {
        let value = e.target.value.toLowerCase().trim();
        setSearchValue(value);
        setFilteredProducts(products.filter(product => product.brand.toLowerCase().includes(value) ||
            product.model.toLowerCase().includes(value)))
    }

    const addProduct = id => {
        setProducts(products.map(product => ({...product, 
            count: product.id === id ? product.count + 1 : product.count })))
    }

    const reduceProduct = id => { 
        setProducts(products.map(product => ({...product, 
            count: product.id === id ? product.count - 1 : product.count })))
    }

    return <> 
        <div>
            <SearchInProducts search={search} />
            {searchValue && !filteredProducts.length ? <div className='text-center'>Not Found</div> : ''}
        </div>
        <Row>{(searchValue ? filteredProducts : products).map(product => <Product key={product.id} 
                                                product={product} 
                                                addToCart={addToCart} 
                                                removeFromCart={removeFromCart}/>)}
        </Row>
        {
            products.filter(el => el.addtocart).length ?
                <Cart products={products.filter(product => product.addtocart)}
                                                    removeFromCart={removeFromCart}
                                                    addProduct={addProduct}
                                                    reduceProduct={reduceProduct}
                /> : ''
        }
    </>   
}

export default Products;