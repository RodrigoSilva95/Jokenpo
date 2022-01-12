// Codigo JS do jogo
let jogadorNome = prompt("Qual é o seu nome?")
let definirJogadorNome = (jogadorNome)

let mensagem = ('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...')
let jogadorPontos = 0
let jogadorEscolha = 0

let computadorEscolha = 0
let computadorPontos = 0

/* 
    Gera os números randomicos
    1 - Pedra 
    2 - Papel
    3 - Tesoura
*/ 
function sortear(min, max){
    return math.floor(math.random() * (max - min + 1)) + min;
}

/* 
    Traduz o número em frase 
    1 - Pedra 
    2 - Papel
    3 - Tesoura
*/
function traduzirEscolha(numero){
    if(numero == 1){
        return 'Pedra';
    }

    else if(numero == 2){
        return 'Papel';
    }
    else if(numero == 3){
        return 'Tesoura';
    }
}

// Adiciona a classe selecionada
function selecionar(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

// Remove a classe selecionada
function deselecionar(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

// Escreve na tela uma mensagem.
function mensagem(texto){
    document.getElementById('mensagem').innerHTML = texto;
}

// Escreve no placar o nome do jogador.
function definirJogadorNome(nome){
    document.getElementById('jogador-nome').innerHTML = nome;
}

// Calcula e retorna quem ganhou.
// 0 - Empate
// 1 - Jogador
// 2 - Computador
function calcularEscolha(jogador, computador){
    if (jogador == 1 && computador == 1){
    return 0;
    }
    else if (jogador == 1 && computador == 2){
    return 2;
    }
    else if (jogador == 1 && computador == 3){
    return 1;
    }
    else if (jogador == 2 && computador == 1){
    return 1;
    }
    else if (jogador == 2 && computador == 2){
    return 0;
    }
    else if (jogador == 2 && computador == 3){
    return 2;
    }
    else if (jogador == 3 && computador == 1){
    return 2;
    }
    else if (jogador == 3 && computador == 2){
    return 1;
    }
    else if (jogador == 3 && computador == 3){
    return 0;
    }
}

// Soma os pontos do jogador
function somarPontoJogador(){
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

// Soma os pontos do computador
function somarPontoComputador(){
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

// Função de jogar
function jogar(escolha){
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0){
    mensagem('Empate');
    }
    else if (ganhador == 1){
    mensagem('Ponto para ' + jogadorNome);
    somarPontoJogador();
    }
    else if (ganhador == 2){
    mensagem('Ponto para Computador');
    somarPontoComputador();
    }

    setTimeout(function(){
    deselecionar('jogador', jogadorEscolha);
    deselecionar('computador', computadorEscolha);
    mensagem(jogadorNome + ' escolha uma opção...');
    }, 3500);
}

document.getElementById('jogador-escolha-1').onclick = function(){ jogar(1); };
document.getElementById('jogador-escolha-2').onclick = function(){ jogar(2); };
document.getElementById('jogador-escolha-3').onclick = function(){ jogar(3); };

