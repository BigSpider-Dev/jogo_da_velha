let jogadas = [];
let p1 = [];
let p2 = [];
let p3 = [];
let p4 = [];
let p5 = [];
let p6 = [];
let p7 = [];
let p8 = [];
let p9 = [];
let jogador = false;
let posicaoJogador = [];
let inicioJogo = true;

let ganha = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const canvas = document.getElementById('tela');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', tamanhoCanvas, false);

function tamanhoCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //console.log(`width: ${canvas.width}`);
    //console.log(`heigth: ${canvas.height}`);
    desenharAqui();
}

tamanhoCanvas();

function desenharAqui() {
    // o que eu quero desenhar
    let blockD = 100;
    let blockW = blockD;
    let blockH = blockD;

    let corPrimaria = 'rgba(0,59,74,0.9';
    let corSecundaria = 'rgb(13, 161, 146)';
    let corObjetoX = 'rgb(84,84,84)';
    let corObjetoO = 'rgb(242, 235, 211)';

    let canvaZeroW = canvas.width - canvas.width;
    let canvaZeroH = canvas.height - canvas.height;
    let canvaCentroW = canvaZeroW + (canvas.width / 2);
    let canvaCentroH = canvaZeroH + (canvas.height / 2);

    let somaBlockW = blockW * 3;
    let somaBlockH = blockW * 3;

    let blockP1W = canvaCentroW - (somaBlockW / 2);
    let blockP2W = (canvaCentroW - (somaBlockW / 2)) + blockW;
    let blockP3W = (canvaCentroW - (somaBlockW / 2)) + (blockW * 2);
    let blockP4W = canvaCentroW - (somaBlockW / 2);
    let blockP5W = (canvaCentroW - (somaBlockW / 2)) + blockW;
    let blockP6W = (canvaCentroW - (somaBlockW / 2)) + (blockW * 2);
    let blockP7W = canvaCentroW - (somaBlockW / 2);
    let blockP8W = (canvaCentroW - (somaBlockW / 2)) + blockW;
    let blockP9W = (canvaCentroW - (somaBlockW / 2)) + (blockW * 2);
    let blockP1H = (canvaCentroH - ((blockH) + (blockH / 2)));
    let blockP2H = (canvaCentroH - ((blockH) + (blockH / 2)));
    let blockP3H = (canvaCentroH - ((blockH) + (blockH / 2)));
    let blockP4H = (canvaCentroH - (blockH / 2));
    let blockP5H = (canvaCentroH - (blockH / 2));
    let blockP6H = (canvaCentroH - (blockH / 2));
    let blockP7H = (canvaCentroH + (blockH / 2));
    let blockP8H = (canvaCentroH + (blockH / 2));
    let blockP9H = (canvaCentroH + (blockH / 2));

    //ferificar possibildade de criar as variaveis com for
    let blockP1PW = ((blockP1W + (blockW / 2)));
    let blockP1PH = ((blockP1H + (blockH / 2)));
    let blockP2PW = ((blockP2W + (blockW / 2)));
    let blockP2PH = ((blockP2H + (blockH / 2)));
    let blockP3PW = ((blockP3W + (blockW / 2)));
    let blockP3PH = ((blockP3H + (blockH / 2)));
    let blockP4PW = ((blockP4W + (blockW / 2)));
    let blockP4PH = ((blockP4H + (blockH / 2)));
    let blockP5PW = ((blockP5W + (blockW / 2)));
    let blockP5PH = ((blockP5H + (blockH / 2)));
    let blockP6PW = ((blockP6W + (blockW / 2)));
    let blockP6PH = ((blockP6H + (blockH / 2)));
    let blockP7PW = ((blockP7W + (blockW / 2)));
    let blockP7PH = ((blockP7H + (blockH / 2)));
    let blockP8PW = ((blockP8W + (blockW / 2)));
    let blockP8PH = ((blockP8H + (blockH / 2)));
    let blockP9PW = ((blockP9W + (blockW / 2)));
    let blockP9PH = ((blockP9H + (blockH / 2)));

    ctx.lineWidth = 5;
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP1W, blockP1H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP2W, blockP2H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP3W, blockP3H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP4W, blockP4H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP5W, blockP5H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP6W, blockP6H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP7W, blockP7H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP8W, blockP8H, blockW, blockH);
    ctx.strokeStyle = corSecundaria;
    ctx.strokeRect(blockP9W, blockP9H, blockW, blockH);

    ctx.lineWidth = 6;

    ctx.strokeStyle = '#14bdac';
    ctx.beginPath();
    ctx.moveTo(blockP1W, blockP1H);
    ctx.lineTo((blockP1W + somaBlockW), blockP1H);
    ctx.stroke();

    ctx.strokeStyle = '#14bdac';
    ctx.beginPath();
    ctx.moveTo(blockP1W, (blockP7H + blockH));
    ctx.lineTo((blockP1W + somaBlockW), (blockP7H + blockH));
    ctx.stroke();

    ctx.strokeStyle = '#14bdac';
    ctx.beginPath();
    ctx.moveTo(blockP1W, (blockP1H));
    ctx.lineTo(blockP1W, (blockP7H + blockH));
    ctx.stroke();

    ctx.strokeStyle = '#14bdac';
    ctx.beginPath();
    ctx.moveTo((blockP1W + somaBlockW), (blockP1H));
    ctx.lineTo((blockP1W + somaBlockW), (blockP7H + blockH));
    ctx.stroke();

    ctx.lineWidth = 1;

    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.font = '20px Times New Roman';
    ctx.fillStyle = corPrimaria;
    ctx.textAlign = 'center';
    ctx.fillText('###  Jogo da Velha  ###', canvaCentroW, blockP3H - (blockH * 0.2));

    ctx.textAlign = 'left';
    ctx.font = '20px Times New Roman';
    ctx.fillText('  By Ricardo Cunegatto', blockP8W, (blockP9H + blockH + (blockH * 0.2)));
    ctx.fillText('V1.01', blockP7W, (blockP9H + blockH + (blockH * 0.2)));



    //recebe posição do mouse na hora do click
    function posicaoM(evento) {
        let x = evento.pageX - canvas.offsetLeft;
        let y = evento.pageY - canvas.offsetTop;
        console.log(x + ',' + y);
        return verificaPosicao(x, y);
    }
    canvas.onclick = posicaoM;

    function verificaPosicao(xP, yP) {
        if (!inicioJogo && posicaoJogador[0]) {
            return iniciaJogo(xP, yP);
        } else {
            if (xP > blockP1W && xP < blockP2W && yP > blockP1H && yP < blockP4H) {
                //console.log('posição 1 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p1[0]) {
                    console.log('Posição Ocupada');
                } else {

                    p1[0] = true;
                    posicaoJogador[1] = jogador;

                    if (posicaoJogador[1]) {
                        jogadas[0] = 'O';
                    } else {
                        jogadas[0] = 'X';
                    }
                    jogador = !jogador;

                    return testaPosicao(p1);
                }
            }
            if (xP > blockP2W && xP < blockP3W && yP > blockP1H && yP < blockP4H) {
                console.log('posição 2 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p2[0]) {
                    console.log('Posição Ocupada');
                } else {

                    p2[0] = true;
                    posicaoJogador[2] = jogador;

                    if (posicaoJogador[2]) {
                        jogadas[1] = 'O';
                    } else {
                        jogadas[1] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p2);
                }
            }
            if (xP > blockP3W && xP < (blockP3W + blockW) && yP > blockP1H && yP < blockP4H) {
                console.log('posição 3 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p3[0]) {
                    console.log('Posição Ocupada');
                } else {
                    //p3.ocup = true;
                    p3[0] = true;
                    posicaoJogador[3] = jogador;
                    //p3.jogador = posicaoJogador3;
                    if (posicaoJogador[3]) {
                        jogadas[2] = 'O';
                    } else {
                        jogadas[2] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p3);
                }
            }
            if (xP > blockP4W && xP < (blockP4W + blockW) && yP > blockP4H && yP < blockP7H) {
                console.log('posição 4 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p4[0]) {
                    console.log('Posição Ocupada');
                } else {
                    p4[0] = true;
                    posicaoJogador[4] = jogador;
                    if (posicaoJogador[4]) {
                        jogadas[3] = 'O';
                    } else {
                        jogadas[3] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p4);
                }
            }
            if (xP > blockP5W && xP < (blockP5W + blockW) && yP > blockP5H && yP < blockP7H) {
                console.log('posição 5 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p5[0]) {
                    console.log('Posição Ocupada');
                } else {
                    p5[0] = true;
                    posicaoJogador[5] = jogador;
                    if (posicaoJogador[5]) {
                        jogadas[4] = 'O';
                    } else {
                        jogadas[4] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p5);
                }
            }
            if (xP > blockP6W && xP < (blockP6W + blockW) && yP > blockP6H && yP < blockP7H) {
                console.log('posição 6 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p6[0]) {
                    console.log('Posição Ocupada');
                } else {
                    p6[0] = true;
                    posicaoJogador[6] = jogador;
                    if (posicaoJogador[6]) {
                        jogadas[5] = 'O';
                    } else {
                        jogadas[5] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p6);
                }
            }
            if (xP > blockP7W && xP < (blockP7W + blockW) && yP > blockP7H && yP < (blockP7H + blockH)) {
                console.log('posição 7 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p7[0]) {
                    console.log('Posição Ocupada');
                } else {
                    p7[0] = true;
                    posicaoJogador[7] = jogador;
                    if (posicaoJogador[7]) {
                        jogadas[6] = 'O';
                    } else {
                        jogadas[6] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p7);
                }
            }
            if (xP > blockP8W && xP < (blockP8W + blockW) && yP > blockP8H && yP < (blockP8H + blockH)) {
                console.log('posição 8 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p8[0]) {
                    console.log('Posição Ocupada');
                } else {
                    p8[0] = true;
                    posicaoJogador[8] = jogador;
                    if (posicaoJogador[8]) {
                        jogadas[7] = 'O';
                    } else {
                        jogadas[7] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p8);
                }
            }
            if (xP > blockP9W && xP < (blockP9W + blockW) && yP > blockP9H && yP < (blockP9H + blockH)) {
                console.log('posição 9 ' + xP, yP + '  ' + blockP1PW, blockP1PH);
                if (p9[0]) {
                    console.log('Posição Ocupada');
                } else {
                    p9[0] = true;
                    posicaoJogador[9] = jogador;
                    if (posicaoJogador[9]) {
                        jogadas[8] = 'O';
                    } else {
                        jogadas[8] = 'X';
                    }
                    jogador = !jogador;
                    return testaPosicao(p9);
                }
            }
        }
    }
    function testaPosicao(tPosicao) {
        console.log(jogadas);
        console.log('jogador = ' + jogador);

        if (p1[0] || p2[0] || p3[0] || p4[0] || p5[0] || p6[0] || p7[0] || p8[0] || p9[0]) {
            if (p1[0]) {
                if (posicaoJogador[1]) {
                    desenhaC(blockP1PW, blockP1PH);
                } else {
                    desenhaX((blockP1W + (blockD * 0.25)), (blockP1H + (blockD * 0.25)), blockP2W - (blockD * 0.25), blockP5H - (blockD * 0.25), blockP4H - (blockD * 0.25));
                    //console.log('j1 ' + jogador + ' X');
                }
            }
            if (p2[0]) {
                if (posicaoJogador[2]) {
                    desenhaC(blockP2PW, blockP2PH);
                } else {
                    desenhaX((blockP2W + (blockD * 0.25)), (blockP2H + (blockD * 0.25)), blockP3W - (blockD * 0.25), blockP6H - (blockD * 0.25), blockP5H - (blockD * 0.25));
                    //console.log('j2 ' + jogador);
                }
            }
            if (p3[0]) {
                if (posicaoJogador[3]) {
                    desenhaC(blockP3PW, blockP3PH);
                } else {
                    desenhaX((blockP3W + (blockD * 0.25)), (blockP3H + (blockD * 0.25)), (blockP3W + blockD) - (blockD * 0.25), blockP6H - (blockD * 0.25), blockP5H - (blockD * 0.25));
                    //console.log('j3 ' + jogador);
                }
            }
            if (p4[0]) {
                if (posicaoJogador[4]) {
                    desenhaC(blockP4PW, blockP4PH);
                } else {
                    desenhaX((blockP4W + (blockD * 0.25)), (blockP4H + (blockD * 0.25)), blockP5W - (blockD * 0.25), blockP8H - (blockD * 0.25), blockP7H - (blockD * 0.25));
                    console.log('j4 ' + jogador);
                }
            }
            if (p5[0]) {
                if (posicaoJogador[5]) {
                    desenhaC(blockP5PW, blockP5PH);
                } else {
                    desenhaX((blockP5W + (blockD * 0.25)), (blockP5H + (blockD * 0.25)), blockP6W - (blockD * 0.25), blockP9H - (blockD * 0.25), blockP8H - (blockD * 0.25));
                    console.log('j5 ' + jogador);
                }
            }
            if (p6[0]) {
                if (posicaoJogador[6]) {
                    desenhaC(blockP6PW, blockP6PH);
                } else {
                    desenhaX((blockP6W + (blockD * 0.25)), (blockP6H + (blockD * 0.25)), (blockP6W + blockD) - (blockD * 0.25), blockP9H - (blockD * 0.25), blockP8H - (blockD * 0.25));
                    console.log('j6 ' + jogador);
                }
            }
            if (p7[0]) {
                if (posicaoJogador[7]) {
                    desenhaC(blockP7PW, blockP7PH);
                } else {
                    desenhaX((blockP7W + (blockD * 0.25)), (blockP7H + (blockD * 0.25)), blockP8W - (blockD * 0.25), (blockP8H + blockH) - (blockD * 0.25), (blockP7H + blockH) - (blockD * 0.25));
                    console.log('j7 ' + jogador);
                }
            }
            if (p8[0]) {
                if (posicaoJogador[8]) {
                    desenhaC(blockP8PW, blockP8PH);
                } else {
                    desenhaX((blockP8W + (blockD * 0.25)), (blockP8H + (blockD * 0.25)), blockP9W - (blockD * 0.25), (blockP9H + blockH) - (blockD * 0.25), (blockP8H + blockH) - (blockD * 0.25));
                    console.log('j8 ' + jogador);
                }
            }
            if (p9[0]) {
                if (posicaoJogador[9]) {
                    desenhaC(blockP9PW, blockP9PH);
                } else {
                    desenhaX((blockP9W + (blockD * 0.25)), (blockP9H + (blockD * 0.25)), (blockP9W + blockD) - (blockD * 0.25), (blockP9H + blockH) - (blockD * 0.25), (blockP8H + blockH) - (blockD * 0.25));
                    console.log('j9 ' + jogador);
                }
            }
            ganhador();

        }
    }
    testaPosicao();


    function ganhador() {
        let mapV = ganha.map(condicao => condicao.map(posicao => jogadas[posicao]).join(''))
        console.log('aqui!' + mapV.includes('XXX'))
        console.log('ali!' + mapV.includes('OOO'));
        let xW = mapV.includes('XXX');
        let oW = mapV.includes('OOO');

        if (xW || oW) {
            if (xW) {
                console.log(`O X venceu!`);
                return mostraGanhador('Player "X" Venceu!');
            } else {
                console.log(`O O venceu!`);
                return mostraGanhador('Player "O" Venceu!')
            }
        }
        empate();
    }
    function iniciaJogo(xP, yP) {
        if (xP < (canvaCentroW - (blockW * 2)) + (blockW * 4) && xP > canvaCentroW - (blockW * 2) && yP > blockP5H && yP < blockP5H + blockH) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            p1[0] = false;
            p2[0] = false;
            p3[0] = false;
            p4[0] = false;
            p5[0] = false;
            p6[0] = false;
            p7[0] = false;
            p8[0] = false;
            p9[0] = false;
            jogador = false;
            inicioJogo = true;
            for (i = 0; i < 9; i++) {
                jogadas[i] = '';
            }
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            desenharAqui();
            console.log('no alvo');
        } else {
            console.log('ops');
        }
    }
    function empate() {
        if (p1[0] && p2[0] && p3[0] && p4[0] && p5[0] && p6[0] && p7[0] && p8[0] && p9[0]) {
            return mostraGanhador('DEU VELHA!')
        }
    }
    function mostraGanhador(valor) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(20, 189, 172, 0.9)'
        ctx.beginPath();
        ctx.fillStyle = 'rgba(20, 189, 172, 0.9)'
        ctx.strokeStyle = 'rgba(10, 179, 162, 0.7)';
        ctx.lineWidth = 5;
        ctx.moveTo(canvaCentroW, blockP2H + (blockD * 0.8));
        ctx.arcTo(blockP3W + (blockD * 1.2), blockP2H + (blockD * 0.8), blockP3W + (blockD * 1.2), blockP9H + (blockD * 0.8), 23);
        ctx.arcTo(blockP3W + (blockD * 1.2), blockP9H + (blockD * 0.2), canvaCentroW, blockP9H + (blockD * 0.2), 23);
        ctx.arcTo(blockP2W - (blockD * 1.2), blockP7H + (blockD * 0.2), blockP2W - (blockD * 1.2), blockP7H - (blockD * 0.2), 23);
        ctx.arcTo(blockP2W - (blockD * 1.2), blockP4H - (blockD * 0.2), blockP2W + (blockD * 1.2), blockP4H - (blockD * 0.2), 23);
        ctx.lineTo(canvaCentroW, blockP4H - (blockD * 0.2));
        ctx.stroke();
        ctx.fill();
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.font = '40px Times New Roman';
        ctx.fillStyle = corPrimaria;
        ctx.textAlign = 'center';
        ctx.fillText(valor, canvaCentroW, canvaCentroH - 10);
        ctx.fillText('Iniciar', canvaCentroW, canvaCentroH + 40);
        posicaoJogador[0] = true;
        inicioJogo = false;
        verificaPosicao()
    }
    function desenhaC(objW, objH, objW2, objH2, objH3) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 8;
        ctx.strokeStyle = corObjetoO;
        ctx.beginPath();
        ctx.arc(objW, objH, (blockW * 0.30), 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.lineWidth = 1;
    }
    function desenhaX(objW, objH, objW2, objH2, objH3) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 8;
        ctx.strokeStyle = corObjetoX;
        ctx.beginPath();
        ctx.moveTo(objW, objH);
        ctx.lineTo(objW2, objH2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(objW2, objH);
        ctx.lineTo(objW, objH3);
        ctx.stroke();
        ctx.lineWidth = 1;
    }
}