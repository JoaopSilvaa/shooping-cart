const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('4.1 - Se o método localStorage.getItem é chamado' , () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('4.2 - Se o localStorage é chamado com o parâmetro \'cartItems\'', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
  //fail('Teste vazio');
});
