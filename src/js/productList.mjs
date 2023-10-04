function productCardTemplate(product) {
  return `<li class="product-card">
          <a href="product_pages/index.html?product=">
            <img src="" alt="Image of ">
            <h3 class="card__brand"></h3>
            <h2 class="card__name"></h2>
            <p class="product-card__price">$</p>
          </a>
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

  renderList() {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("afterBegin", productCardTemplate);
  }
}
