function renderProducts() {
  fetch(
    "https://raw.githubusercontent.com/SwatiThorat21/FlipkartClone/main/index.json"
  ).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
    let featureProducts = document.getElementById('featureProducts');
    let featuredProductHTML = "";


    data.featuredProducts.forEach((product) => {
        featuredProductHTML += `
            <div class="featureProduct_item">
                <div class="featureProduct_image flex w-14">
                    <img src="${product.img}" />
                </div>
                <p class="featureProduct_name">
                   ${product.name}
                   ${product.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}   
                </p>
            </div>
        `
    });
    featureProducts.insertAdjacentHTML("beforeend", featuredProductHTML);
    


  })
}

renderProducts();
