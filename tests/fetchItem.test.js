require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('2.1 - Se ela é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('2.2 - Se fetch é chamada quando executada com o argumento \'MLB1615760527\'', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('2.3 - Se a função fetch utiliza o endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });
  it('2.4 - Se a estrutura de dados do fetchItem é igual ao objeto item', async () => {
    const response = await fetchItem('MLB1615760527');
    const captureId = response.id;
    expect(captureId).toEqual(item.id);
  });
  it('2.5 - Se a função retorna a mensagem de erro esperada', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });
  //fail('Teste vazio');
});
