// NAVIGATION MENU
const humburger = document.getElementById('nav-toggle-checkbox');
const navSpan = document.querySelector('.nav-span');
const quickViewBtn = document.querySelectorAll('.view-product-btn');
const quickViewOverlay = document.querySelector('.quick-view-overlay')
const quickViewContainer = document.querySelector('.quick-view-container')
const quickViewWindow = document.querySelector('.quick-view-container')
const closeCartBtn = document.querySelector('.close-cart')
const cartContainer = document.querySelector('.cart');
const cartItemsContainer = document.querySelector('.cart-items')
const cartOverlay = document.querySelector('.cart-overlay')
const cartIcon = document.querySelectorAll('.cart-btn');
const addToCartBtn = document.querySelectorAll('.add-to-cartBtn');
const increaseItemQuantityBtns = document.querySelectorAll('.fa-chevron-up')
const decreaseItemQuantityBtns = document.querySelectorAll('.fa-chevron-down')

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}
function ready(){
    //Adding a product to a cart
    addToCartBtn.forEach(btn=>{
        btn.addEventListener('click',addItemToCart)
    })
}

humburger.addEventListener('click', ()=>{
    if(navSpan.style.transform === 'rotate(8deg)'){
     navSpan.style.transform = 'rotate(0deg)'
    }
    else{
     navSpan.style.transform = 'rotate(8deg)'
    }
    })

//SHOP
quickViewBtn.forEach(btn=>{
    btn.addEventListener('click', createQuickViewWindow);
})
    
//QUICK VIEW WINDOW
function createQuickViewWindow(event){
// const quickViewWindow = document.createElement('article');    
const clickedSpecificBtn = event.target
clickedBtnParent = clickedSpecificBtn.parentElement.parentElement.parentElement;
productImgUrl = clickedBtnParent.querySelector('.product-image').src;
productTitle = clickedBtnParent.querySelector('.product-name').innerText;
productPrice = clickedBtnParent.querySelector('.prod-price').innerText;
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
`    
quickViewOverlay.appendChild(quickViewWindow);
quickViewOverlay.style.display= 'flex';    

const closeQuickViewBtn = quickViewWindow.querySelector('.closeQuick-view')
closeQuickViewBtn.addEventListener('click',()=>{
    quickViewOverlay.style.display= 'none';
    })
}

 //closing overlays ie cart and quickView on pressing Esc key
 document.addEventListener('keydown',(event)=>{
    if(event.code=='Escape'){
    quickViewOverlay.style.display = 'none';
    cartOverlay.style.visibility='hidden'
    cartContainer.style.transform = 'translateX(110%)'
    }
 }) 

// CART
//opening cart
cartContainer.style.transform='translateX(110%)'
cartIcon.forEach(icon=>{ icon.addEventListener('click', ()=>{
    if(cartContainer.style.transform==='translateX(110%)'){
     cartContainer.style.transform = 'translateX(0%)'
     cartOverlay.style.visibility = 'visible'
    }
    else{
        cartContainer.style.transform='translateX(110%)'
        cartOverlay.style.visibility = 'hidden'
    }
})
}
)

closeCartBtn.addEventListener('click',()=>{
     cartContainer.style.transform='translateX(110%)'
     cartOverlay.style.visibility = 'hidden'
})
//CART AND CALCULATIONS

// const itemPrice = document.querySelector('.price');

function removeCartItem(event){
    const specificClickedBtn = event.target;
    specificClickedBtn.parentElement.parentElement.remove();
    updateTotal();
    }

function updateTotal(){
 var cartRow = cartContainer.querySelectorAll('.cart-item');
 var total = 0;
 for(var i=0; i<cartRow.length; i++){
    const eachRow = cartRow[i];
    const eachItemPrice = eachRow.querySelectorAll('.price')[0].innerText
    const eachItemPriceValue=  eachItemPrice.replace('$','');
    
    var eachItemQuantity= eachRow.querySelectorAll('.item-quantity')[0].innerText
    total = ( total + parseFloat(eachItemPriceValue * eachItemQuantity) );
 };  
 const totalElement = cartContainer.querySelector('.total');
 totalElement.innerText = total
 console.log(total);
}


    
function addItemToCart(event){
 const theClickedBtn = event.target;
 const productContainer = theClickedBtn.parentElement.parentElement;
 var prodPrice = productContainer.querySelector('.prod-price').innerText;
 var prodImageUrl = productContainer.querySelector('.product-image').src;
 var productName = productContainer.querySelector('.product-name').innerText;


 addProductToCart(productName, prodImageUrl, prodPrice)
// fndTotal();
openAndCloseCart();
// checkItemAlreadyAdded(productName)
}

function addProductToCart(productName, prodImageUrl, prodPrice){
    var  cartItemRow = document.createElement('article');

    /* **TO-DO*** 
    //write a function to check if item already in cart 
    ***TO DO***/

    cartRowContents = `<article class="cart-item">
    <img src="${prodImageUrl}" alt="product" class="prod-image">
   <div>
      <h4 class='product-title'>${productName}</h4>
      <h5 class="item-price price">${prodPrice}</h5>
      <span class="remove-item">remove</span>
   </div>  
   <div class="prod-quantity">
      <i class="fas fa-chevron-up"></i>
      <p class="item-quantity">1</p>
      <i class="fas fa-chevron-down"></i>
   </div>` ;

   cartItemRow.innerHTML = cartRowContents
   cartItemsContainer.append(cartItemRow);
   
   setTimeout(updateTotal,3000) //update total

    //increase/ reduce Item quantity
    const increaseItemQuantityBtns = document.querySelectorAll('.fa-chevron-up');
    const decreaseItemQuantityBtns = document.querySelectorAll('.fa-chevron-down');
   increaseItemQuantityBtns.forEach(btn=>{
       btn.addEventListener('click', increaseQuantity)
   })

   decreaseItemQuantityBtns.forEach(btn=>{
    btn.addEventListener('click', decreaseQuantity)
})

    //remove item from cart
   const removeBtn = cartContainer.querySelectorAll('.remove-item')
   removeBtn.forEach(btn=>{
       btn.addEventListener('click', removeCartItem)
   })

}
function openAndCloseCart(){
    cartContainer.style.transform='translateX(0%)';
    cartOverlay.style.visibility = 'visible';

    setTimeout(()=>{
        cartContainer.style.transform='translateX(110%)'
        cartOverlay.style.visibility = 'hidden'  
    },700)

}
//  increase/decrease quantity of items in cart(chevron btns)
function increaseQuantity(e){
const clickedBtn = e.target;
var quantityToChange = clickedBtn.parentElement.querySelector('.item-quantity')
var quantityToChangeValue = parseInt(quantityToChange.innerText)
quantityToChangeValue++;
console.log(quantityToChange)
quantityToChange.innerText = quantityToChangeValue;
updateTotal()
}

function decreaseQuantity(e){
    const clickedBtn = e.target;
    var quantityToChange = clickedBtn.parentElement.querySelector('.item-quantity')
var quantityToChangeValue = parseInt(quantityToChange.innerText)
if(quantityToChangeValue>=2){
quantityToChangeValue--;
updateTotal();
}
else{
    // quantityToChange.parentElement.parentElement.remove();
    alert('quantity must not be less than 1')
    updateTotal()
}
quantityToChange.innerText = quantityToChangeValue;
}