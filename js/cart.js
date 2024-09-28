let cartKey = currentUser ? `cart_${currentUser.username || currentUser.email}` : 'cart';
console.log(cartKey);
let cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('totalAmount').textContent = '0.00';
        return;
    }

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
            <div class="quantity-controls">
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
            </div>
            <p>$${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    calculateTotal();
}

function increaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);
    item.quantity++;
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    renderCartItems();
    updateCartCount();
}

function decreaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cartItems = cartItems.filter(item => item.id !== id); // Remove item if quantity is 0
    }
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    renderCartItems();
    updateCartCount();
}

function calculateTotal() {
    let totalAmount = 0;
    cartItems.forEach(item => {
        totalAmount += item.price * item.quantity;
    });
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function checkout() {
    alert('Proceeding to checkout with a total of $' + document.getElementById('totalAmount').textContent);
}

// Initial render
renderCartItems();

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html';
});

updateCartCount();

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}



// Get the hamburger and mobile menu elements
const hamburger2 = document.getElementById("hamburger2");
const mobileMenu2 = document.getElementById("mobile-menu2");

// Toggle the mobile menu on click
hamburger2.addEventListener("click", function(e) {
   e.stopPropagation(); // Prevent the click event from propagating to the document
   if (mobileMenu2.style.display === "block") {
      mobileMenu2.style.display = "none";
   } else {
      mobileMenu2.style.display = "block";
   }
});

// Hide mobile menu when clicking anywhere else
document.addEventListener("click", function() {
   mobileMenu2.style.display = "none";
});

// Prevent menu from hiding when clicking inside the menu itself
mobileMenu2.addEventListener("click", function(e) {
   e.stopPropagation(); // Prevent the click event from closing the menu when clicked inside it
});

// Handle window resize
window.addEventListener("resize", function() {
   if (window.innerWidth > 800) {
       mobileMenu2.style.display = "none"; // Hide the menu on larger screens
   }
});

