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
      "name": "Bio-shroom Rejuvenating Serum",
      "price": "$35",
      "desc1": "Revitalizes skin with mushroom extracts.",
      "desc2": "Boosts collagen production for youthful skin.",
      "desc3": "Reduces fine lines and enhances elasticity.",
      "src": "img/product-10.jpg"
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