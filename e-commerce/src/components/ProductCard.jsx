import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
const { addToCart } = useCart();

return (
<div className="product-card">

<div className="product-image">
<img
src={product.image}
alt={product.name}
/>
</div>

<div className="product-info">

<p className="product-category">
{product.category}
</p>

<h3>{product.name}</h3>

<p className="product-description">
{product.shortDescription}
</p>

<div className="product-bottom">

<span className="product-price">
NPR {product.price.toLocaleString("en-NP")}
</span>

</div>

<div className="product-buttons">

<Link to={`/product/${product.id}`}>
<button className="view-product-btn">
View Product
</button>
</Link>

<button
className="add-cart-btn"
onClick={() => addToCart(product)}
>
Add to Cart
</button>

</div>

</div>

</div>
);
}