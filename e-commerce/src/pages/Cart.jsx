import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
const {
cart,
removeFromCart,
increaseQuantity,
decreaseQuantity,
totalPrice,
} = useCart();

if (cart.length === 0) {
return (
<main className="cart-page">
<div className="empty-cart">
<h1>Your Cart is Empty</h1>

<p>
You haven't added any products yet.
</p>

<Link to="/shop">
<button className="shop-now-btn">
Continue Shopping
</button>
</Link>
</div>
</main>
);
}

return (
<main className="cart-page">
<h1>Your Shopping Cart</h1>

<div className="cart-container">

<div className="cart-items">

{cart.map((item) => (
<div
className="cart-item"
key={item.id}
>

<img
src={item.image}
alt={item.name}
/>

<div className="cart-item-info">

<h3>{item.name}</h3>

<p>
NPR {Number(item.price).toLocaleString("en-NP")}
</p>

<div className="quantity-controls">

<button
onClick={() =>
decreaseQuantity(item.id)
}
>
-
</button>

<span>
{item.quantity}
</span>

<button
onClick={() =>
increaseQuantity(item.id)
}
>
+
</button>

</div>

<button
className="remove-cart-btn"
onClick={() =>
removeFromCart(item.id)
}
>
Remove
</button>

</div>

</div>
))}

</div>

<div className="cart-summary">

<h2>Order Summary</h2>

<p>
Total:
<strong>
NPR {totalPrice.toLocaleString("en-NP")}
</strong>
</p>

<Link to="/checkout">
<button className="checkout-btn">
Proceed to Checkout
</button>
</Link>

</div>

</div>

</main>
);
}