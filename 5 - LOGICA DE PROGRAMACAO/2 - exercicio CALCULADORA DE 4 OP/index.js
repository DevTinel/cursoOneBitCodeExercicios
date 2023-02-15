const numero1 = Number(prompt("Digite um número:"));
const numero2 = Number(prompt("Digite outro número:"));

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

alert(`A soma dos números fica : ${soma}
       A subtracao  dos números fica : ${subtracao}
       A multiplicação dos números fica : ${multiplicacao}
       E a divisão dos números fica : ${divisao}`);

confirm("As operações estão corretas?");
