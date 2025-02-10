# DogCEO - Gerador de cachorros aleatórios

Esse projeto é uma pequena aplicação que gera imagens aleatórias a partir da DogCEO API.

O projeto inclui um simples drop-down menu que conta com autocomplete exibindo todas as raças recebidas da lista de raças da DogCEO API. As raças com subtipos possuem o uso de parênteses, como Bulldog (french), por exemplo. Selecionar uma raça permite o usuário clicar no botão e receber uma imagem aleatória de um cachorro daquela raça. 

## Como executar o projeto
Navegue para a pasta da aplicação.

Instale a Expo CLI.
```
npm install -g expo-cli
```

Instale as dependências do projeto.
```
npm install
```

Rode a aplicação em um emulador de android ou dispositivo conectado via USB.
```
npm run android
```

Opcionalmente, rode a aplicação no seu navegador web. 
```
npm run web
```
A aplicação então ficará disponível na porta localhost:8081. 
É recomendado usar a barra de ferramenta de dispositivos do seu respectivo do seu navegador pra testar a aplicação (Ctrl + Shift + M no Firefox, ou Ctrl + Shift + I seguido de Ctrl + Shift + M no Google chrome.)


Caso rode na web, 


# Tecnologias Utilizadas

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="120" height="120" style="margin: 10px;">
  <img src="https://www.svgrepo.com/show/341805/expo.svg" alt="Expo" width="120" height="120" style="margin: 10px;">
  <img src="https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png" alt="Redux" width="120" height="120" style="margin: 10px;">
  <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux" width="120" height="120" style="margin: 10px;">
  <img src="https://cdn.worldvectorlogo.com/logos/redux-saga.svg" alt="Redux saga" width="120" height="120" style="margin: 10px;">

</p>

## React Native

Sendo um projeto em React Native, essa foi a biblioteca mais importante do projeto. O React Native é uma biblioteca que permite uma construção mais eficiente de interfaces por meio da componentização e gerenciamento de estados. Derivado do React, o React Native permite a construção de aplicações mobile.

Nesse projeto utilizei um misto de componentes customizados e alguns fornecidos pelo projeto boilerplate do Expo, citado abaixo. 

[Link pra Biblioteca React Native](https://reactnative.dev/)

## Expo 

O Expo foi usado pra criar o projeto inicial, compilá-lo, e fazer a build e renderização à medida que o desenvolvimento era feito. Optei pelo Expo por já ter experiencia usando ele e achar fácil testar o aplicativo tanto em dispositivos reais quanto emuladores, ou até no navegador, o que permite aplicações mais confiáveis. 

[Link para o framework Expo](https://expo.dev/)


## Axios

O Axios foi minha escolha de cliente HTTP. É baseado em Promises, e permite requisições assíncronas pra realizar o acesso aos dados da DogCEO API. 

[Link para a biblioteca Axios](https://axios-http.com/)

## Redux

O Redux foi usado pra fazer o gerenciamento dos estados da aplicação. O diferencial da biblioteca é fazer esse gerenciamento de maneira centralizada. Apesar de não ser estritamente necessário pra um projeto desse escopo, permitiria escalabilidade mantendo o acesso aos dados e estados de maneira consistente entre os componentes.

[Link para a biblioteca Redux](https://redux.js.org/)


## Redux-Saga

O Redux-saga é um middleware que permite a manipulação de side-effects, no caso, pra chamadas de API. As chamadas de API inicialmente foram construídas em hooks customizados mas foram transferidas para as sagas, disparadas a partir das ações do Redux. 

[Link para a biblioteca Redux-Saga](https://redux-saga.js.org/)




