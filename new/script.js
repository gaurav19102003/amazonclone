async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);

    const productsContainer = document.getElementById("products-container");

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.image}" style="max-width: 100px; max-height: 100px;">
                <p>Price: &dollar;${product.price}</p>
                <p>${product.description}</p>
            `;
      productsContainer.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "<p>Failed to load products.</p>";
  }
}

document.getElementById("btn").addEventListener("click", () => {
  fetchProducts();
});
