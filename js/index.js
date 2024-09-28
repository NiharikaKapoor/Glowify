const products = [
   {
       name: "Glowify Cleanser",
       price: "$15",
       desc1: "Cleanses deeply with natural ingredients.",
       desc2: "Suitable for all skin types.",
       desc3: "Dermatologically tested.",
       src: "img/product-01.jpg"
   },
   {
       name: "Coffee Bean Caffiene Eye Cream",
       price: "$20",
       desc1: "Hydrates and nourishes the skin.",
       desc2: "Provides 24-hour moisture.",
       desc3: "Lightweight and non-greasy.",
       src: "img/product-05.jpg"
   },


   {
      name: "Bio-shroom Rejuvenating Serum",
      price: "$35",
      desc1: "Revitalizes skin with mushroom extracts.",
      desc2: "Boosts collagen production for youthful skin.",
      desc3: "Reduces fine lines and enhances elasticity.",
      src: "img/product-10.jpg"
   }
  
];

let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMain = document.querySelector(".cardMain");
let cardMain2 = document.querySelector(".cardMain2");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");

function home() {
   document.querySelector(".fullPage").classList.add("nope");   mainPage.style.display = "flex";
   cardMain.style.display = "block";
   cardMain2.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"
   aboutPage.style.display = "none";
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";



}


function shop() {
   document.querySelector(".fullPage").classList.add("nope");    cardMain.style.display = "block";
    cardMain2.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";


}



function blog() {
   document.querySelector(".fullPage").classList.add("nope");
    cardMain.style.display = "none";
    cardMain2.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function about() {
   document.querySelector(".fullPage").classList.add("nope");   aboutPage.style.display = "block";
   cardMain.style.display = "none";
   cardMain2.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";


}


function contact() {
   console.log("contact");
   document.querySelector(".fullPage").classList.add("nope");
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMain.style.display = "none";
   cardMain2.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 

function showCard(num){
   let newImg = document.getElementById("cartImg");
   let product = products[num];
   newImg.src=product.src;
   document.getElementById("productName").textContent = product.name;
   document.getElementById("productPrice").textContent = product.price;
   document.getElementById("productDesc1").textContent = product.desc1;
   document.getElementById("productDesc2").textContent = product.desc2;
   document.getElementById("productDesc3").textContent = product.desc3;

   document.querySelector(".btn button:nth-child(2)").setAttribute("onclick", `addToCart(${num})`);
   document.querySelector(".fullPage").classList.remove("nope");
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMain.style.display = "none";
   cardMain2.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"



}

// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMain.style.display = "none";
   cardMain2.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

 
}
 
function addToCart(){
   alert("Added To Cart");
   location.reload();
}

function login() {   
   window.location.href = 'login.html'; // Redirect to the login page
}


function logout() {
   localStorage.removeItem('currentUser');
   window.location.reload(); // Refresh the page
}

function showCart() {
   window.location.href = 'cart.html'; // Redirect to the cart page
}


function addToCart(productIndex) {
   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
   if (!currentUser) {
      alert('Please login to add items to your cart.');
      window.location.href = 'login.html'; // Redirect to the login page
      return;
   }

   // Use the currentUser's username/email as the key for the cart
   const cartKey = `cart_${currentUser.username || currentUser.email}`;
   let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
   
   const product = products[productIndex];
   const existingItem = cart.find(item => item.name === product.name);

   if (existingItem) {
       existingItem.quantity += 1;
   } else {
       const newItem = {
           id: productIndex,
           name: product.name,
           price: parseFloat(product.price.replace('$', '')),
           quantity: 1,
           image: product.src
       };
       cart.push(newItem);
   }

   localStorage.setItem(cartKey, JSON.stringify(cart));
   updateCartCount();
   alert(`${product.name} has been added to your cart!`);
}

function updateCartCount() {
   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
   if (currentUser) {
      const cartKey = `cart_${currentUser.username || currentUser.email}`;
      let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
      const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
      document.getElementById('cart-count').textContent = cartCount;
   }
}

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
   document.querySelector(".login").classList.add('nope');
   document.querySelector(".logout").classList.remove('nope');
   document.querySelector(".cart-icon-container").classList.remove('nope');
   document.querySelector(".login-mov").classList.add('nope');
   document.querySelector(".logout-mov").classList.remove('nope');
   document.getElementById("cart-mov").classList.remove('nope');
}else{   
   document.querySelector(".login").classList.remove('nope');
   document.querySelector(".logout").classList.add('nope');
   document.querySelector(".cart-icon-container").classList.add('nope');
   document.querySelector(".login-mov").classList.remove('nope');
   document.querySelector(".logout-mov").classList.add('nope');
   document.getElementById("cart-mov").classList.add('nope');
}

updateCartCount();

// Get the hamburger and mobile menu elements
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle the mobile menu on click
hamburger.addEventListener("click", function(e) {
   e.stopPropagation(); // Prevent the click event from propagating to the document
   mobileMenu.style.display = "block";
});

// Hide mobile menu when clicking anywhere else
document.addEventListener("click", function() {
   mobileMenu.style.display = "none";
});

// Prevent menu from hiding when clicking inside the menu itself
mobileMenu.addEventListener("click", function(e) {
   e.stopPropagation(); // Prevent the click event from closing the menu when clicked inside it
});

window.addEventListener("resize", function() {
   if (window.innerWidth > 800) {
       mobileMenu.style.display = "none";
   }
});
