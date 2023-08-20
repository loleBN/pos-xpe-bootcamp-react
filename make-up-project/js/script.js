let productsPromise = fetch("http://localhost:3000/products");
// 
productsPromise.then((resp) => {
  resp.json().then((products) => {
    let table = renderTable(products);
    document.getElementById("app").innerHTML = table;
  });
});

function renderTable(products) {
  let rows = products.map(product => {
    return `<tr><td>${product.id}</td><td>${product.brand}</td><td>${product.name}</td><td>${product.price}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}