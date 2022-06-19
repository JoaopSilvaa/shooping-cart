const fetchItem = async (ItemID) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${ItemID}`;
    const promiseFetch = await fetch(url);
    const response = await promiseFetch.json();
    return response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
