import React from 'react';
import ProductForm from './ProductForm';

import './NewProduct.css';

function NewProduct(props) {

    function saveProduct(product) {
        console.log('I am in ProductForm component');

        console.log(product);
        props.onAmit(product); //call handler
    }

    return (
        <div className="new-porduct">
            <ProductForm onSaveProduct = {saveProduct}/> {/*pass function as props*/}
        </div>
    )
}

export default NewProduct;