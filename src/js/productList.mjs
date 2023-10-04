function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.listElement = listElement;
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.getData();
    this.renderList(this.listElement);
  }

  // renderList() {
  //   // const element = document.querySelector(selector);
  //   // element.insertAdjacentHTML("afterBegin", productCardTemplate);
  // }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
