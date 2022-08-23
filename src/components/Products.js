import Product from './Product';

function Products() {
    const products = [
        {   
            id: 1,
            brand: 'Lenovo',
            model: 'V14 G2 ITL',
            img: 'https://content.rozetka.com.ua/goods/images/big_tile/274406559.jpg',
            description: 'Ноутбук Lenovo V14 G2 ITL (Intel i3-1115G4/8/128F/int/W10Pro) Black',
            price: 16999
        },
        {   
            id: 2,
            brand: 'ASUS',
            model: 'TUF Gaming A17 FA706IHR-HX029',
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/272561687.jpg',
            description: 'Ноутбук ASUS TUF Gaming A17 FA706IHR-HX029 (90NR07D5-M000P0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
            price: 36999
        },
        {   
            id: 3,
            brand: 'Acer',
            model: 'Aspire 5 A515-45G-R63J',
            img: 'https://content2.rozetka.com.ua/goods/images/big_tile/163381583.jpg',
            description: 'Ноутбук Acer Aspire 5 A515-45G-R63J (NX.A8EEU.001) Charcoal Black',
            price: 24999
        },
        {   
            id: 4,
            brand: 'Apple',
            model: 'Air 13 M1 (MGN63)',
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/144249716.jpg',
            description: 'Ноутбук Apple MacBook Air 13 M1 256GB 2020 (MGN63) Space Gray',
            price: 42999
        },
        {   
            id: 5,
            brand: 'ASUS',
            model: 'X515JA-EJ1814',
            img: 'https://content2.rozetka.com.ua/goods/images/big_tile/275080610.jpg',
            description: 'Ноутбук ASUS Laptop X515JA-EJ1814 (90NB0SR3-M34690) Peacock Blue / Intel Pentium Gold 6805 / RAM 8 ГБ / SSD 256 ГБ',
            price: 18499
        },
        {   
            id: 6,
            brand: 'HP',
            model: 'Pavilion Gaming 15-ec2024ua',
            img: 'https://content.rozetka.com.ua/goods/images/big_tile/248528822.jpg',
            description: 'Ноутбук HP Pavilion Gaming 15-ec2024ua (5A0U9EA) Shadow Black',
            price: 45999
        },
        {   
            id: 7,
            brand: 'Acer',
            model: 'Aspire 7 A715-42G-R8BL',
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/254116608.jpg',
            description: 'Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008) Charcoal Black',
            price: 36999
        },
        {   
            id: 8,
            brand: 'ASUS',
            model: 'ExpertBook B1 B1500CEAE-BQ1663',
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/270525898.jpg',
            description: 'Ноутбук ASUS ExpertBook B1 B1500CEAE-BQ1663 (90NX0441-M20230) Star Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ',
            price: 21999
        },
        {   
            id: 9,
            brand: 'Lenovo',
            model: 'IdeaPad 3 14ITL6',
            img: 'https://content.rozetka.com.ua/goods/images/big_tile/258420085.jpg',
            description: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700KPRA) Arctic Grey',
            price: 13999
        },
        {   
            id: 10,
            brand: 'Acer',
            model: 'Swift 1 SF114-34-P1A1',
            img: 'https://content1.rozetka.com.ua/goods/images/big_tile/163403141.jpg',
            description: 'Ноутбук Acer Swift 1 SF114-34-P1A1 (NX.A77EU.00V) Pure Silver',
            price: 17999
        }];

    return products.map(product => <Product key={product.id} product={product} /> );   
}

export default Products;