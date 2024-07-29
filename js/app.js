let qtdeAlugados = 0;

function contarAlugados () {
    console.log(`Total de jogos alugados: ${qtdeAlugados}`);
}

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nomeJogo = game.querySelector(".dashboard__item__name");
   
        if (imagem.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')) {
            if (confirm(`Tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            qtdeAlugados--;
            }

        } else {
            if (confirm(`Tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            qtdeAlugados++;
            }
        }
contarAlugados();
}

//A função abaixo incializa a contagem considerando que os jogos já começam alugados

document.addEventListener('DOMContentLoaded', function () {
    qtdeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarAlugados();
})

/*
Vamos praticar?

No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais. OK
No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados. OK
Crie um programa que verifica se uma palavra ou frase é um palíndromo.
Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
*/

/* 
palavraEpalindromo();

function palavraEpalindromo () {
    let palavra = "ovo";
    let palavraClusterizada = palavra.split("");
    let palavraInvertida = palavraClusterizada.reverse().join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra: ${palavra} é um palíndromo.`);
    }else {
        console.log(`A palavra: ${palavra} NÃO é um palíndromo.`);
    }
    console.log(palavraInvertida);
}

*/