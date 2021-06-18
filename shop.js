// NAVIGATION MENU
const humburger = document.getElementById("nav-toggle-checkbox");
const navSpan = document.querySelector(".nav-span");
const quickViewBtn = document.querySelectorAll(".view-product-btn");
const quickViewOverlay = document.querySelector(".quick-view-overlay");
const quickViewContainer = document.querySelector(".quick-view-container");
const quickViewWindow = document.querySelector(".quick-view-container");
const closeCartBtn = document.querySelector(".close-cart");
const cartContainer = document.querySelector(".cart");
const cartItemsContainer = document.querySelector(".cart-items");
const cartOverlay = document.querySelector(".cart-overlay");
const cartIcon = document.querySelectorAll(".cart-btn");
const addToCartBtn = document.querySelectorAll(".add-to-cartBtn");

humburger.addEventListener("click", () => {
  if (navSpan.style.transform === "rotate(8deg)") {
    navSpan.style.transform = "rotate(0deg)";
  } else {
    navSpan.style.transform = "rotate(8deg)";
  }
});

//SHOP
quickViewBtn.forEach((btn) => {
  btn.addEventListener("click", createQuickViewWindow);
});

function createQuickViewWindow(event) {
  // const quickViewWindow = document.createElement('article');
  const clickedSpecificBtn = event.target;
  const clickedBtnParent =
    clickedSpecificBtn.parentElement.parentElement.parentElement;
  const productImgUrl = clickedBtnParent.querySelector(".product-image").src;
  const productTitle = clickedBtnParent.querySelector(".product-name")
    .innerText;
  const productPrice = clickedBtnParent.querySelector(".prod-price").innerText;
  // console.log(productImgUrl,productPrice,productTitle);

  quickViewWindow.innerHTML = `
<i class="fas fa-times closeQuick-view"></i>
<div class="quick-viewImg-container">
<img src="${productImgUrl}" alt="" class="quick-img">
</div>
<div class="description-text">
<h2 class="${productTitle}">DJ Nav-Hoodie</h2>
<h4 class="quickView-prod-price">${productPrice}</h4>
<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, perferendis?</p>

<div class="container">
<select name="sizes" id="sizes" class="select-sizes">
<option value="Pick a Size">Pick a Size</option>
<option value="S">S</option>
<option value="L">L</option>
<option value="XL">XL</option>
<option value="XXL">2XL</option>
</select>
<span class="add-to-cartBtn">Add to Cart</span>
</div>
</div>
</div>
`;
  quickViewOverlay.appendChild(quickViewWindow);
  quickViewOverlay.style.display = "flex";

  const closeQuickViewBtn = quickViewWindow.querySelector(".closeQuick-view");
  closeQuickViewBtn.addEventListener("click", () => {
    quickViewOverlay.style.display = "none";
  });

  //closing quickView window on click
  //   quickViewOverlay.addEventListener('click',()=>{
  //       quickViewOverlay.style.display='none';
  //   })
}

//closing overlays ie cart and quickView on pressing Esc key
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    quickViewOverlay.style.display = "none";
    cartOverlay.style.visibility = "hidden";
    cartContainer.style.transform = "translateX(110%)";
  }
});

// CART
//opening cart
cartContainer.style.transform = "translateX(110%)";
cartIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (cartContainer.style.transform === "translateX(110%)") {
      cartContainer.style.transform = "translateX(0%)";
      cartOverlay.style.visibility = "visible";
    } else {
      cartContainer.style.transform = "translateX(110%)";
      cartOverlay.style.visibility = "hidden";
    }
  });
});

closeCartBtn.addEventListener("click", () => {
  cartContainer.style.transform = "translateX(110%)";
  cartOverlay.style.visibility = "hidden";
});
//CART AND CALCULATIONS

// const itemPrice = document.querySelector('.price');

function removeCartItem(event) {
  const specificClickedBtn = event.target;
  specificClickedBtn.parentElement.parentElement.remove();
  updateTotal();
}

/*function updateTotal() {
  var cartRow = cartContainer.querySelectorAll(".cart-item");
  var total = 0;
  for (var i = 0; i < cartRow.length; i++) {
    const eachRow = cartRow[i];
    const eachItemPrice = eachRow.querySelectorAll(".price")[0].innerText;
    const eachItemPriceValue = eachItemPrice.replace("$", "");

    const eachItemQuantity = eachRow.querySelectorAll(".item-quantity")[0]
      .innerText;
    total = total + parseFloat(eachItemPriceValue * eachItemQuantity);
  }
  const totalElement = cartContainer.querySelector(".total");
  totalElement.innerText = total;
}*/
//Adding a product to a cart
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", addItemToCart);
});
function addItemToCart(event) {
  const theClickedBtn = event.target;
  const productContainer = theClickedBtn.parentElement.parentElement;
  var prodPrice = productContainer.querySelector(".prod-price").innerText;
  var prodImageUrl = productContainer.querySelector(".product-image").src;
  var productName = productContainer.querySelector(".product-name").innerText;
  addProductToCart(productName, prodImageUrl, prodPrice);
  // fndTotal();
  updateTotal();
  openAndCloseCart();
  // checkItemAlreadyAdded(productName)
}

function addProductToCart(productName, prodImageUrl, prodPrice) {
  var cartItemRow = document.createElement("article");
  const cartRowContents = `<article class="cart-item">
    <img src="${prodImageUrl}" alt="product" class="prod-image"> 
   <div>
      <h4>${productName}</h4>
      <h5 class="item-price price">${prodPrice}</h5>
      <span class="remove-item">remove</span>
   </div>  
   <div class="prod-quantity">
      <i class="fas fa-chevron-up"></i>
      <p class="item-quantity">1</p>
      <i class="fas fa-chevron-down"></i>
   </div>`;
  cartItemRow.innerHTML = cartRowContents;
  cartItemsContainer.append(cartItemRow);
  const removeBtn = cartContainer.querySelectorAll(".remove-item");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeCartItem);
  });
}
function openAndCloseCart() {
  cartContainer.style.transform = "translateX(0%)";
  cartOverlay.style.visibility = "visible";

  setTimeout(() => {
    cartContainer.style.transform = "translateX(110%)";
    cartOverlay.style.visibility = "hidden";
  }, 700);
}
function updateTotal() {
  const cartRows = cartContainer.querySelectorAll(".cart-item");
  // getting All cart Row
  console.log(cartRows);
  for (var i = 0; i < cartRows.length; i++) {
    const eachRow = cartRows[i];
    const eachPrice = eachRow.querySelector(".item-price").innerText;
    //console.log(eachPrice);
<<<<<<< CodeSandbox
    const eachProductQuantity = eachRow.querySelector(".item-quantity")
=======
    eachPrice.replace("$", "");
>>>>>>> GitHub
    const eachProductQuantity = eachRow.querySelector(".item-quantity")
      .innerText;
    console.log(eachPrice);
  }
}
