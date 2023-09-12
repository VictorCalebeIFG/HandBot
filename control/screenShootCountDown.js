function iniciarContagemRegressiva() {
    const meuBotao = document.getElementById('screenShoot');
    meuBotao.disabled = true; // Desabilita o botão durante a contagem regressiva

    let tempoRestante = 5;
    meuBotao.textContent = tempoRestante; // Mostra o tempo atual no botão

    const interval = setInterval(() => {
        tempoRestante--;
        meuBotao.textContent = tempoRestante;

        if (tempoRestante === 0) {
            clearInterval(interval); // Para a contagem regressiva
            meuBotao.innerHTML = 'Tire uma foto<img src="images/screenShotIcon.svg">';
            meuBotao.disabled = false; // Habilita o botão novamente
            onFinalCountDown();
        }
    }, 1000); // Atualiza a cada 1 segundo (1000 milissegundos)
}

function onFinalCountDown(){
    eel.takeScreenShot()(function(data){
        document.getElementById('screenshootimage').src = "../ScreenShoots/screenshot.png"

        document.getElementById('screenshootimage').addEventListener('click', (event) => {

            // Obtenha as coordenadas do clique em relação à imagem
            const xImagem = event.offsetX;
            const yImagem = event.offsetY;

            const minhaImagem = document.getElementById('screenshootimage');
            const marca = document.getElementById('marca');
        
            // Atualize o elemento de exibição de coordenadas
            eel.getScreenSize()(function(data){
                const xGlobal = (xImagem / minhaImagem.clientWidth) * data[0];
                const yGlobal = (yImagem / minhaImagem.clientHeight) * data[1];

                //console.log(xGlobal, yGlobal);

                document.getElementById("x-coord").value = xGlobal;
                document.getElementById("y-coord").value = yGlobal;

            })

            const marcaX = event.offsetX - marca.clientWidth/2;
            const marcaY = event.offsetY - marca.clientHeight/2;

            // Define a posição da marca com base nas coordenadas do clique
            marca.style.left = marcaX + 'px';
            marca.style.top = marcaY + 'px';

            // Exibe a marca
            marca.style.display = 'block';

            

        });


    })
}



// Adicione um ouvinte de clique à imagem
