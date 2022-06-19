require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('1.1 - Se fecthProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('1.2 - Se fetch é chamado ao executar fetchProducts(\'computador\')', async() => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('1.3 - Se fetch utiliza o endpoint correto', async () => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=$computador`;
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });
  // it('1.4 - Se o retorno é igual a estrutura de dados de computadorSearch', async () => {
  //   const response = await fetchProducts('computador');
  //   const test = computadorSearch.site_id;
  //   expect(response.site_id).toBe(test);
  // });
  it('1.5 - Se retorna um erro com a mensagem correta', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error ('You must provide an url'));
  });
  //fail('Teste vazio');
});
