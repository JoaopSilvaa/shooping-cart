# Shopping Cart

# O que é o Shopping Cart

Este projeto é um simulador de carrinho de compras, em que faz requisições a uma API do Mercado livre ([manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas)), trabalha com funções assíncronas e contém testes unitários.


## Tecnologias usadas

> JavaScript, Jest, CSS3, HTML5

## Instalando Dependências

> Basta executar o comando abaixo no seu terminal
```bash
npm install
``` 
## Executando os testes da aplicação e verificando a cobertura dos testes 
* Para executar os testes apenas no terminal:

    ```bash
    npm test
    ```

* Para executar a cobertura de testes, rode o comando abaixo:

    ```bash
    npm run test:coverage
    ```

Ao realizar o comando terá um resultado similar a este:

![Cobertura de Testes](cobertura.png)

Os destaques em amarelo fazem referência à cobertura total e os em verde demonstram a função do requisito desejado.


### Pontos importantes para a implementação dos testes

Foi disponibilizado um mock da API para a implementação dos testes. Isso significa que é possível simular o consumo de todos os dados da API dentro do ambiente de testes, de forma segura e independente de fatores externos que possam ocorrer.


Este projeto foi desenvolvido por [João Antônio](https://www.linkedin.com/in/joaoantoniosilvaa/) durante o curso de Desenvolvimento de Software na [Trybe](https://www.betrybe.com/) 