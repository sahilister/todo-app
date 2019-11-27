import React from 'react';
import Product from './Product'
import productsData from './vschoolProducts'


function App() {
    const productComponents = productsData.map(item => <Product key={item} product={item} />)
    return(
        <div>
            {productComponents}
        </div>
    )
}
export default App;