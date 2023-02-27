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
      let featuredProductsHTML = "";
      let slidingImgHTML = "";
      let electronicsProductHTML = "";

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
        <div>
           <img alt="Test" src="${img.imgSrc}">
        </div>
        `;
      });
      SlidingImgContainer.innerHTML = slidingImgHTML;

      window.addEventListener("load", function () {
        window._ = new Glider(document.querySelector(".glider"), {
          slidesToShow: 1, //'auto',
          slidesToScroll: 1,
          itemWidth: 150,
          draggable: true,
          scrollLock: false,
          rewind: true,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
          },
        });
      });

      data.electronicsProductData.forEach((elePro) => {
           electronicsProductHTML += `
           <div class="w-productContainer">
              <div class="w-productImg h-52 relative my-0 mx-auto">
                  <img src="${elePro.img}"alt="" class="absolute top-0 bottom-0 left-0 right-0 m-auto opacity-100 max-w-moreProImg max-h-full">
              </div>
              <div>
                  <p class="text-sm font-medium mt-3.5 whitespace-nowrap overflow-hidden text-ellipsis">${elePro.productName}</p>
                  <p class="text-textBase whitespace-nowrap overflow-hidden text-ellipsis text-green pt-2">${elePro.discount}</p>
                  <p class="opacity-60 pt-2">${elePro.brand}</p>
              </div> 
            </div>
        `;
      });
      bestofElctronicProductList.insertAdjacentHTML("beforeend",electronicsProductHTML);
    });
}

renderProducts();
