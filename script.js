let sum = 0;

const arrayList = [];

const divPrices = () => {
  const section = document.getElementsByClassName('cart');
  const cart = section[0];
  const subtotal = document.createElement('div'); 
  subtotal.className = 'total-price';
  cart.appendChild(subtotal);
  const totalPrices = document.createElement('h3');
  subtotal.appendChild(totalPrices);
};

divPrices();

const totalPrices = document.getElementsByClassName('total-price')[0].firstChild;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const searchPrice = (event) => {
  const indicePrice = event.path[0].innerText.indexOf('PRICE');
  const string = event.path[0].innerText.length;
  let newWorld = '';
  for (let index = (indicePrice + 8); index < string; index += 1) {
    newWorld += event.path[0].innerText[index];
  }
  const number = parseFloat(newWorld).toFixed(2);
  return number;
};

function cartItemClickListener(event) {
  // coloque seu código aqui
  const number = searchPrice(event);
  totalPrices.innerText = `${(sum -= number)}`;
  // const posi = arrayList.indexOf({ event }) + 1;
  // console.log(arrayList);
  // arrayList.splice();
  // saveCartItems(JSON.stringify(arrayList));
  event.path[0].remove();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  sum += salePrice;
  totalPrices.innerText = `${sum}`;
  arrayList.push(li.innerText);
  saveCartItems(JSON.stringify(arrayList));
  return li;
}

const products = async () => {
  const allProducts = await fetchProducts('computador');
  const { results } = allProducts;
  return results;
};

const clickando = async (event) => {
  const element = event.path[0].parentElement;
  const id = element.firstChild.innerText;
  const searchItem = await fetchItem(`${id}`);
  const newItem = createCartItemElement(searchItem);
  const section = document.getElementsByClassName('cart__items');
  const cart = section[0];
  cart.appendChild(newItem);
};

const createItems = async () => {
  const container = document.getElementsByClassName('items');
  const items = document.getElementsByClassName('items');
  const section = items[0];
  const listProducts = await products();
  container[0].firstElementChild.remove();
  listProducts.forEach((product) => {
    const newItem = createProductItemElement(product);
    newItem.lastChild.addEventListener('click', clickando);
    section.appendChild(newItem);
  }); 
};

const esvaziaCarrinho = () => {
  const button = document.getElementsByClassName('empty-cart');
  const listCart = document.getElementsByClassName('cart__items');
  button[0].addEventListener('click', () => {
    if (listCart[0].children.length !== 0) {
      listCart[0].innerHTML = '';
      totalPrices.innerText = `${(sum = 0)}`;
      arrayList.splice();
      saveCartItems(JSON.stringify(arrayList));
    }
  });
};

const searchPriceLoading = (event) => {
  const indicePrice = event.innerText.indexOf('PRICE');
  const string = event.innerText.length;
  let newWorld = '';
  for (let index = (indicePrice + 8); index < string; index += 1) {
    newWorld += event.innerText[index];
  }
  const number = parseFloat(newWorld);
  return number;
};

const carregaCarrinho = () => {
  const carrinho = getSavedCartItems();
  const listaCarrinho = JSON.parse(carrinho);
  console.log(listaCarrinho);
  if (listaCarrinho !== null) {
    listaCarrinho.forEach((item) => {
     const cart = document.getElementsByClassName('cart__items');
     const li = document.createElement('li');
     li.className = 'cart__item';
     li.innerText = item;
     cart[0].appendChild(li);
     li.addEventListener('click', cartItemClickListener);
     const number = searchPriceLoading(li);
     totalPrices.innerText = `${(sum += number)}`;
    });
  }
};

window.onload = () => { 
  createItems();
  esvaziaCarrinho();
  carregaCarrinho();
};
