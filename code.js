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
      let SlidingImgContainer = document.getElementById("imageContainer");
      let featuredProductsHTML = "";
      let slidingImgHTML = "";

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
        <div class="w-full -translate-x-full">
            <img src="${img.imgSrc}"
              alt="" class="w-full">
        </div>
        `;
      });
      SlidingImgContainer.innerHTML = slidingImgHTML;
    });
}

renderProducts();
