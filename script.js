let minusBtn = document.querySelector(".minus-btn")
let plusBtn = document.querySelector(".plus-btn")
let productNum = document.querySelector(".product-num")


let cartBtn = document.querySelector(".second-nav-link")
let cartBox = document.querySelector(".cart-box")

const img = [...document.querySelectorAll(".images-link-img")]
const imgBlur = [...document.querySelectorAll(".img-list-blur")]
let mainImage = document.querySelector(".main-image")
let count = 0

plusBtn.addEventListener("click", function(){
    count++
    productNum.innerHTML = count
})

minusBtn.addEventListener("click", function(){
        count--
        if(count<0){
            count=0
        }
        productNum.innerHTML = count
})

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', ()=>{
        let image = img[i].getAttribute("src")
        mainImage.setAttribute("src", image)
        let mainImg  = mainImage.getAttribute('src')
        if(image==mainImg){
            imgBlur[i].classList.add("image-active")
        }else{
            imgBlur[i].classList.remove("image-active")
        }
    })    
}

cartBtn.addEventListener("click", ()=>{
    cartBox.classList.toggle("active")
})