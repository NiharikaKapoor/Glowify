let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

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
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
}

function decreaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cartItems = cartItems.filter(item => item.id !== id); // Remove item if quantity is 0
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
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

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', function () {
    window.location.href = 'index.html';
    home();
});

const shopButton = document.getElementById('shop');
shopButton.addEventListener('click', function () {
    window.location.href = 'index.html';
    shop();
});

const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', function () {
    window.location.href = 'index.html';
    about();
});

const blogButton = document.getElementById('blog');
blogButton.addEventListener('click', function () {
    window.location.href = 'index.html';
    blog();
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', function () {

    window.location.href = 'index.html';
    setTimeout(function () {
        // window.location.href = 'contact.html';
    }, 10000);
    console.log('here');
    contact();
});