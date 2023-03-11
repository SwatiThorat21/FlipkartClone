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
      let bestofElctronicProductList = document.getElementById(
        "bestofElctronicProductList"
      );
      let beautyFoodToysProductList = document.getElementById(
        "beautyFoodToysProductList"
      );
      let summerProductsList = document.getElementById("summerProductsList");
      let homeKitchenProductsList = document.getElementById(
        "homeKitchenProductsList"
      );
      let fashionProductsList = document.getElementById("fashionProductsList");
      let topDealProductsList = document.getElementById("topDealProductsList");
      let featuredProductsHTML = "";
      let slidingImgHTML = "";
      let electronicsProductHTML = "";
      let beautyFoodToysProductHTML = "";
      let summerProductHTML = "";
      let homeKitchenProductHTML = "";
      let fashionProductHTML = "";
      let topDealProductHTML = "";

      data.featuredProducts.forEach((product) => {
        featuredProductsHTML += `
        <div id="featuredProduct_item" class="py-3 px-1 flex flex-col items-center">
        <div id="featuredProduct_image" class="w-w16 hover:cursor-pointer">
            <img src="${product.img}"/>
        </div>
        <p class="featureProductname text-sm font-semibold text-gray hover:text-blue cursor-pointer ">
            ${product.name}
            ${
              product.subNavigation
                ? `<i class="fa-solid fa-angle-down text-xs downAngle"></i>`
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
           <img alt="Test" src="${img.imgSrc}" class="w-full h-full hover:cursor-pointer">
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
                  <img src="${elePro.img}"alt="product image" class="hover:scale-105 transition-all duration-100 cursor-pointer">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis hover:cursor-pointer">${elePro.productName}</p>
                  <p class="productDiscount text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2 hover:cursor-pointer" title="${elePro.discount}">${elePro.discount}</p>
                  <p class="productBrand opacity-60 pt-2 text-sm hover:cursor-pointer">${elePro.brand}</p>
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
        breakpoints: {
          1399: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      data.beautyFoodToysProducts.forEach((product) => {
        beautyFoodToysProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image" class="hover:scale-105 transition-all duration-100 cursor-pointer">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis hover:cursor-pointer">${product.productName}</p>
                  <p class="productDiscount text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2 hover:cursor-pointer" title="${product.discount}">${product.discount}</p>
                  <p class="productBrand opacity-60 pt-2 text-sm hover:cursor-pointer">${product.brand}</p>
              </div> 
          </div>
        `;
      });
      beautyFoodToysProductList.insertAdjacentHTML(
        "beforeend",
        beautyFoodToysProductHTML
      );

      new Swiper(".beautyFoodToysProductList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      data.summerProducts.forEach((product) => {
        summerProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image" class="hover:scale-105 transition-all duration-100 cursor-pointer">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis hover:cursor-pointer" title="${product.discount}">${product.productName}</p>
                  <p class="productDiscount text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2 hover:cursor-pointer">${product.discount}</p>
              </div> 
            </div>
        `;
      });
      summerProductsList.insertAdjacentHTML("beforeend", summerProductHTML);

      new Swiper(".summerProductsList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      data.HomeKitchenProducts.forEach((product) => {
        homeKitchenProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image" class="hover:scale-105 transition-all duration-100 cursor-pointer">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis hover:cursor-pointer">${product.productName}</p>
                  <p class="productDiscount text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2 hover:cursor-pointer" title="${product.discount}">${product.discount}</p>
                  <p class="productBrand opacity-60 pt-2 text-sm hover:cursor-pointer">${product.brand}</p>
              </div> 
            </div>
        `;
      });
      homeKitchenProductsList.insertAdjacentHTML(
        "beforeend",
        homeKitchenProductHTML
      );

      new Swiper(".homeKitchenProductsList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      data.fashionProducts.forEach((product) => {
        fashionProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image" class="hover:scale-105 transition-all duration-100 cursor-pointer">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis hover:cursor-pointer">${product.productName}</p>
                  <p class="productDiscount text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2 hover:cursor-pointer" title="${product.discount}">${product.discount}</p>
                  <p class="productBrand opacity-60 pt-2 text-sm hover:cursor-pointer">${product.brand}</p>
              </div> 
            </div>
        `;
      });
      fashionProductsList.insertAdjacentHTML("beforeend", fashionProductHTML);

      new Swiper(".fashionProductsList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      data.topDealProducts.forEach((product) => {
        topDealProductHTML += `
           <div class="swiper-slide productListContain" id="productListContain">
              <div class="productImg">
                  <img src="${product.img}"alt="product image" class="hover:scale-105 transition-all duration-100 cursor-pointer">
              </div>
              <div>
                  <p class="productName text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis hover:cursor-pointer">${product.productName}</p>
                  <p class="productDiscount text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2 hover:cursor-pointer" title="${product.discount}">${product.discount}</p>
                  <p class="productBrand opacity-60 pt-2 text-sm hover:cursor-pointer">${product.brand}</p>
              </div> 
            </div>
        `;
      });
      topDealProductsList.insertAdjacentHTML("beforeend", topDealProductHTML);

      new Swiper(".topDealProductsList", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      let topStoriesTitle = document.getElementById("topStoriesTitle");
      let topStoriesTitleHTML = "";
      let topStoriesProducts = document.getElementById("topStoriesProducts");
      let topStoriesProductsHTML = "";
      let mobileProductsTitle = document.getElementById("mobileProductsTitle");
      let mobileProductsTitleHTML = "";
      let mobileProducts = document.getElementById("mobileProducts");
      let mobileProductsHTML = "";
      let cameraProductsTitle = document.getElementById("cameraProductsTitle");
      let cameraProductsTitleHTML = "";
      let cameraProducts = document.getElementById("cameraProducts");
      let cameraProductsHTML = "";
      let laptopProductsTitle = document.getElementById("laptopProductsTitle");
      let laptopProductsTitleHTML = "";
      let laptopProducts = document.getElementById("laptopProducts");
      let laptopProductsHTML = "";
      let TVProductTitle = document.getElementById("TVProductTitle");
      let TVProductTitleHTML = "";
      let TVProducts = document.getElementById("TVProducts");
      let TVProductsHTML = "";
      let LargeAppliancesTitle = document.getElementById(
        "LargeAppliancesTitle"
      );
      let LargeAppliancesTitleHTML = "";
      let LargeAppliances = document.getElementById("LargeAppliances");
      let LargeAppliancesHTML = "";
      let clothingProductsTitle = document.getElementById(
        "clothingProductsTitle"
      );
      let clothingProductsTitleHTML = "";
      let clothingProducts = document.getElementById("clothingProducts");
      let clothingProductsHTML = "";

      data.mostSearchedContentTitle.forEach((product) => {
        topStoriesTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      topStoriesTitle.innerHTML = topStoriesTitleHTML;

      data.mostsearchedProducts.forEach((product) => {
        topStoriesProductsHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      topStoriesProducts.innerHTML = topStoriesProductsHTML;

      data.mobileProductsTitle.forEach((product) => {
        mobileProductsTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      mobileProductsTitle.innerHTML = mobileProductsTitleHTML;

      data.mobileProducts.forEach((product) => {
        mobileProductsHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      mobileProducts.innerHTML = mobileProductsHTML;

      data.cameraProductsTitle.forEach((product) => {
        cameraProductsTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      cameraProductsTitle.innerHTML = cameraProductsTitleHTML;

      data.cameraProducts.forEach((product) => {
        cameraProductsHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      cameraProducts.innerHTML = cameraProductsHTML;

      data.laptopProductsTitle.forEach((product) => {
        laptopProductsTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      laptopProductsTitle.innerHTML = laptopProductsTitleHTML;

      data.laptopProducts.forEach((product) => {
        laptopProductsHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      laptopProducts.innerHTML = laptopProductsHTML;

      data.TVProductsTitle.forEach((product) => {
        TVProductTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      TVProductTitle.innerHTML = TVProductTitleHTML;

      data.TVProducts.forEach((product) => {
        TVProductsHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      TVProducts.innerHTML = TVProductsHTML;

      data.LargeAppliancesTitle.forEach((product) => {
        LargeAppliancesTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      LargeAppliancesTitle.innerHTML = LargeAppliancesTitleHTML;

      data.LargeAppliances.forEach((product) => {
        LargeAppliancesHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      LargeAppliances.innerHTML = LargeAppliancesHTML;

      data.clothProductsTitle.forEach((product) => {
        clothingProductsTitleHTML += `
        <span class="text-topStories mr-1 font-roboto">${product.title}</span>
          `;
      });
      clothingProductsTitle.innerHTML = clothingProductsTitleHTML;

      data.clothProducts.forEach((product) => {
        clothingProductsHTML += `
        <span class="py-0 px-1.5 border-r border-blackBorder border-solid">${product.productName}</span>
          `;
      });
      clothingProducts.innerHTML = clothingProductsHTML;

      let footerMiddleContainer = document.getElementById("footerMiddleContainer");
      let footerMiddleContainerHTML = "";

      data.flipkartDescription.forEach((ele) => {
        let footerMiddleContentHTML = `<div class="footerMiddleContent">`;
        if (ele.p2) {
          footerMiddleContentHTML += `
                    <h2 class="footerMiddleHeading text-belowBase mb-2.5 font-extrabold leading-4 tracking-tighter">${ele.title}</h2>
                    <p>${ele.p1}</p><br>
                    <p>${ele.p2}</p><br>`;
        }else if (ele.p7) {
          footerMiddleContentHTML += `
                    <h2 class="footerMiddleHeading text-belowBase mb-2.5 font-extrabold leading-4 tracking-tighter">${ele.title}</h2>
                    <p>${ele.p1}</p><br>
                    <p>${ele.p2}</p><br>
                    <p>${ele.p3}</p><br>
                    <p>${ele.p4}</p><br>
                    <p>${ele.p5}</p><br>
                    <p>${ele.p6}</p><br>
                    <p>${ele.p7}</p><br>`;
        }else if (ele.p1) {
          footerMiddleContentHTML += `
                    <h2 class="footerMiddleHeading text-belowBase mb-2.5 font-extrabold leading-4 tracking-tighter">${ele.title}</h2>
                    <p>${ele.p1}</p><br>`;
        }else if (ele.title1) {
          footerMiddleContentHTML += `
                    <h2 class="footerMiddleHeading text-belowBase mb-2.5 font-extrabold leading-4 tracking-tighter">${ele.title}</h2>
                    <h2 class="footerMiddleHeading text-belowBase mb-2.5 font-extrabold leading-4 tracking-tighter">${ele.title1}</h2>
                    <p>${ele.p1}</p><br>`;
        }else if (ele.p1 && ele.p2 && ele.p3 && ele.p4) {
          footerMiddleContentHTML += `
                    <h2 class="footerMiddleHeading text-belowBase mb-2.5 font-extrabold leading-4 tracking-tighter">${ele.title}</h2>
                    <p>${ele.p1}</p><br>
                    <p>${ele.p2}</p><br>
                    <p>${ele.p3}</p><br>
                    <p>${ele.p4}</p><br>`;
        }

        footerMiddleContentHTML += `</div>`

        footerMiddleContainerHTML += footerMiddleContentHTML;

        footerMiddleContainer.innerHTML= footerMiddleContainerHTML;

        

      });
    });
}

renderProducts();
