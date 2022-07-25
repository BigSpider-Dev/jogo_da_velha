(function () {
    const canvas = document.getElementById('tela');
    const ctx = canvas.getContext('2d');

    window.addEventListener('resize', tamanhoCanvas, false);

    function tamanhoCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        console.log(`width: ${canvas.width}`);
        console.log(`heigth: ${canvas.height}`);

        desenharAqui();
    }

    tamanhoCanvas();

    function desenharAqui() {
        // o que eu quero desenhar
        let blockD = 100;
        let blockW = blockD;
        let blockH = blockD;

        let corPrimaria = 'rgba(0,0,255,0.8';
        let corSecundaria = 'rgb(37, 0, 37)';


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

        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.font = '20px Times New Roman';
        ctx.fillStyle = corPrimaria;
        ctx.textAlign = 'center';
        ctx.fillText('###  Jogo da Velha  ###', canvaCentroW, 15);

    }

})();