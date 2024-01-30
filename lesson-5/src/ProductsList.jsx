import React from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function ProductsList() {
    const {products} = useSelector(state => state)
    const dispatch = useDispatch()


    const handleBuy = (product) => {
        dispatch({
            type: "ADD_PRODUCT", 
            payload: product
        })
    }

    return (
        <div>
            <ul>
                {products.map(product => 
                    <li key={product._id}>
                        {product.name}
                        <button onClick={()=>handleBuy(product)}>Buy</button>
                    </li>)}
            </ul>
        </div>
    )
}
