import React, { useState } from "react";

import './ProductForm.css';

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log("printing");
        // console.log(title);
        // console.log(date);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productObj = {
            title:newTitle,
            date:newDate
        };

        props.onSaveProduct(productObj); //calling handler 

        console.log(productObj);

        setTitle('');
        setDate('');
    }

    return (
        <form className="new-product-form" onSubmit={submitHandler}>
            <div className="new-product-control">
                <label>Title:- </label>
                <input type = 'text' value={newTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-product-control">
                <label>Date:- </label>
                <input type = 'Date' value={newDate} onChange={dateChangeHandler} min="2023-01-01" max="2023-12-12"/>
            </div>
            <div className="new-product-control">
                <button type = 'submit'>Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm;