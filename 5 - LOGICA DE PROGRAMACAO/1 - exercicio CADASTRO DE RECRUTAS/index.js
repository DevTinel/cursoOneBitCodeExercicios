const nome = prompt("Primeiro nome:");
const sobrenome = prompt("Sobrenome:");
const campoDeEstudo = prompt("Campo de estudo:");
const nascimento = prompt("Ano de nascimento:");

const date = new Date();
console.log(date);
const ano = date.getFullYear();
const informacoes = window.alert(
  `Recruta ${nome} ${sobrenome} estuda em ${campoDeEstudo}  e tem ${
    ano - nascimento
  }`
);
