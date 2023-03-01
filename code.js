function renderProducts() {
  fetch(
    "https://raw.githubusercontent.com/SwatiThorat21/FlipkartClone/main/index.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let featureProductList = document.getElementById("featureProduct_list");
      let SlidingImgContainer = document.getElementById("SlidingImgContainer");
      let bestofElctronicProductList = document.getElementById("bestofElctronicProductList");
      let beautyFoodToysProductList = document.getElementById("beautyFoodToysProductList");
      let summerProductsList = document.getElementById("summerProductsList");
      let featuredProductsHTML = "";
      let slidingImgHTML = "";
      let electronicsProductHTML = "";
      let beautyFoodToysProductHTML = "";
      let summerProductHTML = "";

      data.featuredProducts.forEach((product) => {
        featuredProductsHTML += `
        <div id="featuredProduct_item" class="py-3 px-1 flex flex-col items-center">
        <div id="featuredProduct_image" class="w-w16">
            <img src="${product.img}"/>
        </div>
        <p class="text-sm font-semibold text-gray">
            ${product.name}
            ${
              product.subNavigation
                ? `<i class="fa-solid fa-angle-down text-xs"></i>`
                : ""
            }   
        </p>
        </div>
                       `;
      });
      featureProductList.insertAdjacentHTML("beforeend", featuredProductsHTML);

      data.slidingImages.forEach((img) => {
        slidingImgHTML += `
        <div class="swiper-slide">
           <img alt="Test" src="${img.imgSrc}" class="w-full h-full">
        </div>
        `;
      });
      SlidingImgContainer.innerHTML = slidingImgHTML;

      new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      data.electronicsProductData.forEach((elePro) => {
        electronicsProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${elePro.img}"alt="product image">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis">${elePro.productName}</p>
                  <p class="text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2">${elePro.discount}</p>
                  <p class="opacity-60 pt-2 text-sm">${elePro.brand}</p>
              </div> 
            </div>
        `;
      });
      bestofElctronicProductList.insertAdjacentHTML(
        "beforeend",
        electronicsProductHTML
      );

      new Swiper(".bestEleProductList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      data.beautyFoodToysProducts.forEach((product) => {
        beautyFoodToysProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis">${product.productName}</p>
                  <p class="text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2">${product.discount}</p>
                  <p class="opacity-60 pt-2 text-sm">${product.brand}</p>
              </div> 
            </div>
        `;
      });
      beautyFoodToysProductList.insertAdjacentHTML("beforeend",beautyFoodToysProductHTML);

      new Swiper(".beautyFoodToysProductList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      data.summerProducts.forEach((product) => {
        summerProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis">${product.productName}</p>
                  <p class="text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2">${product.discount}</p>
              </div> 
            </div>
        `;
      });
      summerProductsList.insertAdjacentHTML("beforeend",summerProductHTML);

      new Swiper(".summerProductsList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
}

renderProducts();
