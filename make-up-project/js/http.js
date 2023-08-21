function fetchJson(url, options) {
    return fetch(url, options)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(r.statusText);
        }
      })
      .catch((error) => {
        showError("Error loading data", error);
        throw error;
      });
  }

const baseUrl = "http://localhost:3000";

function listProducts() {
    return fetchJson(`${baseUrl}/products`);
}

function listBrandOrType() {
  const selectedType = selectFilterTypes.selectedOptions[0].value;
  const selectedBrand = selectFilterBrands.selectedOptions[0].value;
  if (selectedType === '' && selectedBrand === '') {
    return fetchJson(baseUrl);
  } else {
    if (selectedType !== '' && selectedBrand === '') {
      return fetchJson(`${baseUrl}/products?product_type=${selectedType}`);
    } else if (selectedBrand !== '' && selectedType === '') {
      return fetchJson(`${baseUrl}/products?brand=${selectedBrand}`);
    } else {
      return fetchJson(`${baseUrl}/products?brand=${selectedBrand}&product_type=${selectedType}`);
    }
  }
}