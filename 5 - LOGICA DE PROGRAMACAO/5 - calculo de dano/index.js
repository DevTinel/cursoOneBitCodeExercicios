// ## Cálculo de Dano

// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

const nomePersonagem1 = prompt("Qual o nome do seu personagem: ");
const poderDeAtackPersonagem1 = prompt("Qual o seu poder de ataque: ");

const nomePersonagem2 = prompt("Qual o nome do segundo personagem: ");
let vidaPersonagem2 = prompt("Quanto pontos de vida tem o personagem 2: ");
const defesaPersongem2 = prompt("Qual o poder de defesa do personagem 2");
const escudoPersonagem2 = confirm("Possui escudo?");

let dano;

if (poderDeAtackPersonagem1 > defesaPersongem2 && !escudoPersonagem2) {
  dano = poderDeAtackPersonagem1 - defesaPersongem2;
  vidaPersonagem2 -= dano;
  alert(
    `O dano causado foi de ${dano} e a vida do ${nomePersonagem2} ficou com ${vidaPersonagem2} pontos`
  );
} else if (poderDeAtackPersonagem1 > defesaPersongem2 && escudoPersonagem2) {
  dano = (poderDeAtackPersonagem1 - defesaPersongem2) / 2;
  alert(
    `O dano causado foi de ${dano} e a vida do ${nomePersonagem2} ficou com ${vidaPersonagem2} pontos`
  );
} else if (poderDeAtackPersonagem1 <= defesaPersongem2) {
  dano = 0;
  alert(
    `O dano pelo ${nomePersonagem1} causado foi de ${dano} e a vida do ${nomePersonagem2} ficou com ${vidaPersonagem2} pontos`
  );
}
