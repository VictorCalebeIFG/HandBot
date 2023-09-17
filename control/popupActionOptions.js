


document.getElementById('mouseEsquerdo').addEventListener('click', function() {
    

    eel.getHtml("./view/PopUps/mouseEsquerdo.html")(function(html){
        document.getElementById('popUpDiv').innerHTML = html
    })
    
    document.getElementById('closePopup').addEventListener('click', function() {
        
        anime({
            targets: document.getElementById('popupOptions'),
            width: 0,
            duration: 500,
            easing: 'easeInOutQuad'
        })
        //document.getElementById('popupOptions').style.display = 'none';
    });

    document.getElementById('popupOptions').style.display = 'block';
});

document.getElementById('mouseDireito').addEventListener('click', function() {
    document.getElementById('popupOptions').style.display = 'block';

    eel.getHtml("./view/PopUps/mouseDireito.html")(function(html){
        document.getElementById('popUpDiv').innerHTML = html
    })
    
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popupOptions').style.display = 'none';
    });
});

// Adicionando PopUp de Ação
eel.getHtml("./view/PopUps/actionPopUp.html")(function(html){
    const mydiv= document.createElement('div');
    mydiv.innerHTML = html
    document.body.appendChild(mydiv)
});
