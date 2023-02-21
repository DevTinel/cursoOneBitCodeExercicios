// # 17 - Exercício 2

// ## Teste de Velocidade

// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const carro1 = prompt("Qual o nome do primeiro carro? ");
const valocidadeCarro1 = prompt("Qual a velocidade do primeiro carro? ");

const carro2 = prompt("Qual o nome do segundo carro? ");
const valocidadeCarro2 = prompt("Qual a velocidade do segundo carro? ");

const velocidade =
  valocidadeCarro1 > valocidadeCarro2
    ? `O ${carro1} é mais rapido`
    : `O ${carro2} é mais rapido`;

alert(velocidade);
