const fetchProducts = async (QUERY) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=$${QUERY}`;
    const promiseFetch = await fetch(url);
    const response = await promiseFetch.json();
    return response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
