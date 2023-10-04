import ProductList from "./productList.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

const productList = new ProductList("tents", dataSource, "main");

console.log(productList);
