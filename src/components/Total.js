import {useState, useEffect} from 'react';

function Total({products}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(products.reduce((acc, product) => acc + product.price * product.count, 0));
    }, [products]);

    return <h5 className="mt-3">Total: {total.toFixed(2)} грн</h5>    
}

export default Total;