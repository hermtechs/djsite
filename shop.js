// NAVIGATION MENU
const humburger = document.getElementById('nav-toggle-checkbox');
const navSpan = document.querySelector('.nav-span');
const quickViewBtn = document.querySelectorAll('.view-product-btn');
const quickViewOverlay = document.querySelector('.quick-view-overlay')
const quickViewContainer = document.querySelector('.quick-view-container')
const quickViewWindow = document.querySelector('.quick-view-container')
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
// quickViewContainer.style.transform = 'scale(1)'
quickViewOverlay.style.display= 'flex';    

const closeQuickViewBtn = quickViewWindow.querySelector('.closeQuick-view')
closeQuickViewBtn.addEventListener('click',()=>{
    // quickViewContainer.style.transform = 'scale(0)'
    quickViewOverlay.style.display= 'none';
    })
}