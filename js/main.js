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
        let canvaZeroW = canvas.width - canvas.width;        
        let canvaZeroH = canvas.height - canvas.height;
        let canvaCentroW = canvaZeroW + (canvas.width / 2);
        let canvaCentroH = canvaZeroH + (canvas.height / 2);

        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.font = '20px Times New Roman';
        ctx.fillStyle = 'rgba(0,0,255,0.8)';
        ctx.textAlign = 'center';
        ctx.fillText('###  Jogo da Velha  ###', canvaCentroW, 15);


    }

})();