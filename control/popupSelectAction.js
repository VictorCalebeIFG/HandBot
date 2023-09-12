var popUpDiv = document.getElementById('popupSelectAction');
var mostrarPopUpBotoes = document.querySelectorAll('.addTaskButton');
var visivel = false;

// Adicione o ouvinte de eventos ao body
document.body.addEventListener('click', function() {
    if (visivel) {
        popUpDiv.style.transform = 'scale(0)';
        popUpDiv.style.width = '0px';
        visivel = false;
    }
});

mostrarPopUpBotoes.forEach(function(botao) {
    botao.addEventListener('click', function(event) {
        // Evite que o evento de clique no botão propague para o body
        event.stopPropagation();
        
        if (visivel) {
            popUpDiv.style.transform = 'scale(0)';
            popUpDiv.style.width = '0px';
            visivel = false;
        } else {
            popUpDiv.style.transform = 'scale(1)';
            popUpDiv.style.width = '200px';
            visivel = true;
        }
    });
});

