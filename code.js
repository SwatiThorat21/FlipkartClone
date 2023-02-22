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
      let featuredProductsHTML = "";

      data.featuredProducts.forEach((product) => {
        featuredProductsHTML += `
        <div id="featuredProduct_item">
        <div id="featuredProduct_image" class="w-14">
            <img src="${product.img}"/>
        </div>
        <p class="text-sm font-semibold text-gray">
            ${product.name}
            ${product.subNavigation ? `<i class="fa-solid fa-angle-down text-xs"></i>` : ""}   
        </p>
        </div>

                       `;
      });
      featureProductList.insertAdjacentHTML("beforeend",featuredProductsHTML);
    });
}

renderProducts();
