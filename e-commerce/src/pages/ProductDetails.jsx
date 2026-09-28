import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../Home.css";

export default function ProductDetails() {
const { id } = useParams();

const { addToCart } = useCart();

const product = products.find(
(item) => item.id.toString() === id
);

// If product doesn't exist
if (!product) {
return (
<main className="container text-center my-5">
<h1>Product Not Found</h1>

<Link to="/shop" className="btn btn-primary mt-3">
Back to Shop
</Link>
</main>
);
}

return (
<main className="product-details-page">

<div className="product-details-container">

{/* Product Image */}
<div className="product-details-image">
<img
src={product.image}
alt={product.name}
/>
</div>

{/* Product Information */}
<div className="product-details-info">

<p className="product-category">
{product.category}
</p>

<h1>{product.name}</h1>

<p className="product-details-price">
NPR {product.price.toLocaleString("en-NP")}
</p>

<p className="product-details-description">
{product.description}
</p>

<button
className="add-cart-btn"
onClick={() => addToCart(product)}
>
Add to Cart
</button>

<Link to="/shop">
<button className="back-shop-btn">
Back to Shop
</button>
</Link>

</div>

</div>

</main>
);
}