import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from './Productcard';

const Productlist = () => {
    const [products, setProduct] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProduct(res.data);
        console.log(res.data, "Data fetch" );
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {products.map((val,index)=>{
                return(
                    <div key={index}>
                        <Productcard title={val.title} image={val.image} price={val.price} />
                    </div>
                )
                
            })}
        </div>
    );
};

export default Productlist;
