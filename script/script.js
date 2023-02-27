var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// let slideIndex = 1;
// showSlides(slideIndex);

// let next = document.querySelector('swiper-button-next');

// next.addEventListener("click", function() {
//   showSlides(slideIndex += 1);
//   makeTimer(); //Пересоздаем интервал если производится нажатие 
// });

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("swiper-wrapper");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

// }
// let timer = 0;
// makeTimer(); 
// function makeTimer() {
//   clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
//   timer = setInterval(function() {
//     slideIndex++;
//     showSlides(slideIndex);
//   }, 5000);
// }

let body = document.body
let main = document.querySelector('.mainPart')
let container = document.querySelector('.container')
let link = document.createElement('a')
let sale = document.createElement('h2')
let boxIt = document.createElement('div')
let mainBox = document.createElement('div')
let product = document.createElement('img')
let prText = document.createElement('p')
let h2 = document.createElement('h2')
let star = document.createElement('img')
let pointStar = document.createElement('div')
let starText = document.createElement('p')
let trade = document.createElement('span')
let lowCart = document.createElement('div')
let cartPrice = document.createElement('div')
let prev = document.createElement('span')
let cur = document.createElement('span')
let prodCart = document.createElement('img')

for (let i = 0; i <= 3; i++) {
  let mainBox = document.createElement('div')
  mainBox.classList.add('main-box')
  boxIt.append(mainBox)
}

boxIt.classList.add('box-item')
mainBox.classList.add('main-box')
sale.classList.add('sale')
product.classList.add('product')
pointStar.classList.add('star-point')
star.classList.add('star')
trade.classList.add('trade')
lowCart.classList.add('low-cart')
cartPrice.classList.add('cart-price')
prev.classList.add('prev-price')
cur.classList.add('cur-price')
prodCart.classList.add('prod-cart')

product.src = "https://images.uzum.uz/cfrlpa7g49devoa8vrsg/t_product_540_high.jpg#1677433182134"
star.src = "./img/star.svg"
prodCart.src = "./img/cart.svg"
link.href = "#"

sale.innerHTML = "Распродажа"
h2.innerHTML = "Пoдсолнечное масло, Щедрое лето, рафинированное, 900мл"
starText.innerHTML = "5.0 (255 оценок)"
trade.innerHTML = "2080 сум/мес"
prev.innerHTML = "23 000 сум"
cur.innerHTML = "16 000 сум"

boxIt.prepend(mainBox)
mainBox.prepend(product, h2, pointStar, trade, lowCart)
pointStar.prepend(star, starText)
lowCart.prepend(cartPrice, prodCart)
cartPrice.prepend(prev, cur)
container.prepend(sale, boxIt)
main.prepend(cont)
body.prepend(main)