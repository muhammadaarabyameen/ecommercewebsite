// Example: Handle form submission (dummy functionality)
document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });
});

// Example: Handle 'Add to Cart' button clicks
document.querySelectorAll('.product-card button').forEach((button) => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

//--
// URL of the API or JSON data
const apiURL = 'https://fakestoreapi.com/products'; // Example API

// Function to fetch products
async function fetchProducts() {
    try {
        const response = await fetch(apiURL); // Fetch data from API
        const products = await response.json(); // Parse JSON response

        // Call function to display products
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products in the HTML
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any existing content

    // Loop through products and create cards
    products.forEach((product) => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.id}')">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productCard; // Append each card to the container
    });
}

// Function to handle "Add to Cart" button clicks
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart!`);
}

// Fetch products on page load
fetchProducts();
