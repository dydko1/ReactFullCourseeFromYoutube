import React, { useState } from "react"

function MyComponent() {

    const [name, setName] = useState("Guastavo");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    // function handleNameChange(e){
    //     console.log(new Date().getMilliseconds())
    //     setName(e.target.value)
    // }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);

    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="paypal">PayPal</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange} />
                Pick up</label><br/>
                <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                Delivery</label>
                <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent