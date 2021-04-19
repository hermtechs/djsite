// NAVIGATION MENU
const humburger = document.getElementById('nav-toggle-checkbox');
const navSpan = document.querySelector('.nav-span');
const quickViewBtn = document.querySelectorAll('.view-product-btn');
const closeQuickView = document.querySelector('.closeQuick-view')
const quickViewOverlay = document.querySelector('.quick-view-overlay')
const quickViewContainer = document.querySelector('.quick-view-container')

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
    
function createQuickViewWindow(){
const quickViewWindow = `
<div class="quick-view-container">

<i class="fas fa-times closeQuick-view"></i>
<div class="quick-viewImg-container">
<img src="./shop images/grey--tshirt.jpg" alt="" class="quick-img">
</div>
<div class="description-text">
<h2 class="prod-title">DJ Nav-Hoodie</h2>
<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, perferendis?</p>

<!-- <label for="sizes"> </label> -->
<div class="container">
<select name="sizes" id="sizes" class="select-sizes">
<option value="Pick a Size">Pick a Size</option>
<option value="S">S</option>
<option value="L">L</option>
<option value="XL">XL</option>
<option value="XXL">XXL</option>
</select>
<span class="add-to-cartBtn">Add to Cart</span>
</div>
</div>
</div>
`    
quickViewOverlay.appendChild(quickViewWindow);
quickViewContainer.style.transform = 'scale(1)'
quickViewOverlay.style.display= 'flex';    

closeQuickView.addEventListener('click',()=>{
    quickViewContainer.style.transform = 'scale(0)'
    quickViewOverlay.style.display= 'none';
    })
}