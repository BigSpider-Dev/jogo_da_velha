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
    }

})();