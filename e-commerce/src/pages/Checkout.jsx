import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
const { cart, totalPrice, clearCart } = useCart();

const [orderPlaced, setOrderPlaced] = useState(false);

function handleSubmit(event) {
event.preventDefault();

clearCart();
setOrderPlaced(true);
}

if (orderPlaced) {
return (
<main className="checkout-page">

<div className="order-success">

<h1>Order Confirmed! 🎉</h1>

<p>
Thank you for shopping with TechSpree.
</p>

<p>
Your order total was ${totalPrice.toFixed(2)}
</p>

</div>

</main>
);
}

return (
<main className="checkout-page">

<h1>Checkout</h1>

<div className="checkout-container">

<form onSubmit={handleSubmit}>

<h2>Customer Information</h2>

<input
type="text"
placeholder="Full Name"
required
/>

<input
type="email"
placeholder="Email Address"
required
/>

<input
type="text"
placeholder="Phone Number"
required
/>

<input
type="text"
placeholder="Address"
required
/>

<input
type="text"
placeholder="City"
required
/>

<h2>Payment</h2>

<select required>
<option value="">
Select Payment Method
</option>
<option value="cod">
Cash on Delivery
</option>
<option value="card">
Credit / Debit Card
</option>
</select>

<button type="submit">
Place Order
</button>

</form>

<div className="checkout-summary">

<h2>Order Summary</h2>

{cart.map((item) => (
<p key={item.id}>
{item.name} × {item.quantity}
</p>
))}

<h2>
Total: ${totalPrice.toFixed(2)}
</h2>

</div>

</div>

</main>
);
}