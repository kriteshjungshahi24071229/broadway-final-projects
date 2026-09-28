import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../Home.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
const [searchParams] = useSearchParams();

const [search, setSearch] = useState("");
const [category, setCategory] = useState(
    searchParams.get("category") || "All"
);
const [sort, setSort] = useState("featured");

// Update category when a category link is clicked
useEffect(() => {
const urlCategory = searchParams.get("category") || "All";
setCategory(urlCategory);
}, [searchParams]);

const filteredProducts = products
.filter((product) => {
const matchesSearch = product.name
.toLowerCase()
.includes(search.toLowerCase());

const matchesCategory =
category === "All" ||
product.category === category;

return matchesSearch && matchesCategory;
})
.sort((a, b) => {
if (sort === "price-low") {
return Number(a.price) - Number(b.price);
}

if (sort === "price-high") {
return Number(b.price) - Number(a.price);
}

if (sort === "name") {
return a.name.localeCompare(b.name);
}

return 0;
});

function clearFilters() {
setSearch("");
setCategory("All");
setSort("featured");
}

return (
<main className="shop-page">

<section className="shop-header">

<p className="shop-label">
TECHSPREE STORE
</p>

<h1>Shop Our Products</h1>

<p>
Find the latest technology, electronics and
smart devices at TechSpree.
</p>
</section>

<section className="shop-content">
<div className="shop-filter-box">
<div className="search-wrapper">
<span className="search-icon">
🔎
</span>

<input
type="text"
placeholder="Search products..."
value={search}
onChange={(e) =>
setSearch(e.target.value)
}
/>
</div>


<select
value={category}
onChange={(e) =>
setCategory(e.target.value)
}
>
<option value="All">
All Categories
</option>

<option value="Laptops">
Laptops
</option>

<option value="Smartphones">
Smartphones
</option>

<option value="Audio">
Audio
</option>

<option value="Smart Wear">
Smart Wear
</option>
</select>


<select
value={sort}
onChange={(e) =>
setSort(e.target.value)
}
>
<option value="featured">
Featured
</option>

<option value="price-low">
Price: Low to High
</option>

<option value="price-high">
Price: High to Low
</option>

<option value="name">
Name: A to Z
</option>
</select>

{(search ||
category !== "All" ||
sort !== "featured") && (

<button
className="clear-filter-btn"
onClick={clearFilters}
>
Clear
</button>

)}

</div>

<div className="shop-categories">

<button
className={
category === "All"
? "active-category"
: ""
}
onClick={() => setCategory("All")}
>
All
</button>

<button
className={
category === "Laptops"
? "active-category"
: ""
}
onClick={() => setCategory("Laptops")}
>
💻 Laptops
</button>

<button
className={
category === "Smartphones"
? "active-category"
: ""
}
onClick={() =>
setCategory("Smartphones")
}
>
📱 Smartphones
</button>

<button
className={
category === "Audio"
? "active-category"
: ""
}
onClick={() => setCategory("Audio")}
>
🎧 Audio
</button>

<button
className={
category === "Smart Wear"
? "active-category"
: ""
}
onClick={() =>
setCategory("Smart Wear")
}
>
⌚ Smart Wear
</button>

</div>

<div className="shop-results">

<h2>
{category === "All"
? "All Products"
: category}
</h2>

<p>
{filteredProducts.length}{" "}
{filteredProducts.length === 1
? "product"
: "products"}{" "}
found
</p>

</div>

{filteredProducts.length > 0 ? (

<div className="shop-product-grid" id="products">

{filteredProducts.map((product) => (

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

) : (

<div className="no-products">

<div className="no-products-icon">
🔍
</div>

<h2>
No Products Found
</h2>

<p>
Try another search or category.
</p>

<button
className="clear-filter-btn"
onClick={clearFilters}
>
Show All Products
</button>

</div>

)}

</section>

</main>
);
}