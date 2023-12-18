// CART
const menuBtn = document.querySelector(".menuBtn");
const menuBtnImg = document.querySelector(".menuBtn .menu");
const sideNav = document.querySelector(".sideNav");

menuBtn.onclick = function () {
  sideNav.classList.toggle("open");
  const isOpen = sideNav.classList.contains("open");

  menuBtnImg.classList = isOpen
    ? "material-symbols-outlined"
    : "material-symbols-outlined";
};

// PRODUCT LIST
let displayProducts = async () => {
  let products = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  let productList = await products.json();
  console.log(productList);

  let container = document.getElementById("container");

  productList.forEach((product) => {
    let divProduct = document.createElement("div");
    divProduct.classList.add("content");
    divProduct.innerHTML = `
  <div class ="image"><img src="${product.image}"/></div>
  <h3>${product.title}</h3>
  <h4 class ="price" >PRICE: $${product.price}</h4>
  `;
    divProduct.addEventListener("click", () => {
      window.location.href = `shop.html?id=${product.id} `;
    });
    container.appendChild(divProduct);
  });
};
displayProducts();

//TOP SELLING PRODUCTS JS
let displayProduct = async () => {
  let products = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing?limit=4"
  );
  let productList = await products.json();
  console.log(productList);

  let container = document.getElementById("container-p");

  productList.forEach((product) => {
    let divProduct = document.createElement("div");
    divProduct.classList.add("content");
    divProduct.innerHTML = `
  <div class ="image"><img src="${product.image}"/></div>
  <h3 class ="price">${product.title}</h3>
  <h4>PRICE: $${product.price}</h4>
  `;
    divProduct.addEventListener("click", () => {
      window.location.href = `shop.html?id=${product.id} `;
    });
    container.appendChild(divProduct);
  });
};
displayProduct();
// to display product details
let getProductDetails = async (id) => {
  var response = await fetch(`https://fakestoreapi.com/products/${id}`);
  var product = await response.json();
  return product;
};

let displayProductDetails = async () => {
  let id = window.location.search.split("=")[1];
  let details = await getProductDetails(id);
  let img1div = document.querySelector("#image-1");
  img1div.innerHTML = `<img src='${details.image}'/> 
  
  `;

  let img2div = document.querySelector("#image-2");
  img2div.innerHTML = `<img src='${details.image}'/>`;

  let img3div = document.querySelector("#image-3");
  img3div.innerHTML = `<img src='${details.image}'/>`;

  let img4div = document.querySelector("#image-4");
  img4div.innerHTML = `<img src='${details.image}'/>`;

  console.log(details);
};
displayProductDetails();

//
// PRODUCT LIST
let displayGoods = async () => {
  let products = await fetch("https://fakestoreapi.com/products?limit=9");
  let productList = await products.json();
  console.log(productList);

  let container = document.getElementById("casualcon");

  productList.forEach((product) => {
    let divProduct = document.createElement("div");
    divProduct.classList.add("content");
    divProduct.innerHTML = `
  <div class ="image"><img src="${product.image}"/></div>
  <h3>${product.title}</h3>
  <h4 class ="price" >PRICE: $${product.price}</h4>
  <button>Add To Cart</button>
  `;

    container.appendChild(divProduct);
  });
};
displayGoods();

// PRODUCT LIST STYLE CASUAL
let displayStyles = async () => {
  let products = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  let productList = await products.json();
  console.log(productList);

  let container = document.getElementById("stylecontainer");

  productList.forEach((product) => {
    let divProduct = document.createElement("div");
    divProduct.classList.add("content");
    divProduct.innerHTML = `
  <div class ="image"><img src="${product.image}"/></div>
  <h3>${product.title}</h3>
  <h4 class ="price">PRICE: $${product.price}</h4>
  `;
    container.appendChild(divProduct);
  });
};
displayStyles();

//
let listproductHtml = document.querySelector(".listproduct");
let listproduct = [];

let displayStylez = async () => {
  let products = await fetch("https://fakestoreapi.com/carts?limit=5");
  let productList = await products.json();
  console.log(productList);
};
