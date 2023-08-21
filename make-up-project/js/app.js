let products = [];
let brands = [];
let types = [];

const listEl = document.querySelector("ul");
const formEl = document.querySelector("form");
const inputfilterName = document.getElementById("filter-name");
const selectFilterBrands = document.getElementById("filter-brand");
const selectFilterTypes = document.getElementById("filter-type");
const selectSortType = document.getElementById("sort-type");

async function init(){
  try {  
    products = await listProducts(),listBrandOrType();
    renderFormData();
    renderData();
    clearSelection();
  } catch (erro) {
    showError(erro);
  }
}
init();

function selectItem(product, li) {
  clearSelection();
  selectedItem = product;
  li.classList.add("selected");
}

function clearSelection() {
  clearError();
  selectedItem = undefined;
  const li = listEl.querySelector(".selected");
  if (li) {
    li.classList.remove("selected");
  }
}

function renderFormData() {
  console.log(brands);
  for (const brand of brands) {
    const brandOption = document.createElement("option");
    brandOption.value = brand;
    brandOption.textContent = brand;
    selectFilterBrands.appendChild(op);
  }
  for (const type of types) {
    const typeOption = document.createElement("option");
    typeOption.value = type;
    typeOption.textContent = type;
    selectFilterTypes.appendChild(typeOption);
  }
}

function renderData() {
  console.log(products);
  listEl.innerHTML = "";
  for (const product of products) {
    const li = document.createElement("li");
    const divName = document.createElement("div");
    divName.textContent = product.name;
    const divBrand = document.createElement("div");
    divBrand.textContent = product.brand;
    li.appendChild(divName);
    li.appendChild(divBrand);
    listEl.appendChild(li);
  }
}

function showError(error){
  document.getElementById("errors").textContent = "Erro ao carregar dados.";
  console.error(error);
}
function clearError() {
  document.getElementById("errors").textContent = "";
}
//EXEMPLO DO CÓDIGO PARA UM PRODUTO
function productItem(product) {
  const item = `<div class="product" data-name="NYX Mosaic Powder Blush Paradise" data-brand="nyx" data-type="bronzer" tabindex="508">
  <figure class="product-figure">
    <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png" width="215" height="215" alt="NYX Mosaic Powder Blush Paradise" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">NYX Mosaic Powder Blush Paradise</h1>
    <div class="product-brands"><span class="product-brand background-brand">Nyx</span>
<span class="product-brand background-price">R$ 57.70</span></div>
  </section>
  // CARREGAR OS DETALHES
</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">nyx</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">10.49</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">5</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250"></div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">bronzer</div>
        </div>
      </div></section>`;
}
