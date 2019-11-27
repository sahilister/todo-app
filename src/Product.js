import React from 'react'

function Product(props) {
    return(
        <div>
            <h1>{props.product.name}</h1>
            <h1>${props.product.price}</h1>
            <h1>{props.product.description}</h1>
        </div>
    )
}

export default Product