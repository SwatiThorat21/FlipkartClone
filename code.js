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
      let homeKitchenProductsList = document.getElementById("homeKitchenProductsList");
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
          }
        
        }
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
      beautyFoodToysProductList.insertAdjacentHTML("beforeend",beautyFoodToysProductHTML);

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
          }
        
        }
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
      summerProductsList.insertAdjacentHTML("beforeend",summerProductHTML);

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
          }
        
        }
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
      homeKitchenProductsList.insertAdjacentHTML("beforeend",homeKitchenProductHTML);

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
          }
        
        }
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
      fashionProductsList.insertAdjacentHTML("beforeend",fashionProductHTML);

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
          }
        
        }
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
      topDealProductsList.insertAdjacentHTML("beforeend",topDealProductHTML);

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
          }
        
        }
      });



    });
}

renderProducts();
