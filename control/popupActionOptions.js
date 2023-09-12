


document.getElementById('mouseEsquerdo').addEventListener('click', function() {
    document.getElementById('popupOptions').style.display = 'block';

    eel.getHtml("./view/PopUps/mouseEsquerdo.html")(function(html){
        document.getElementById('popUpDiv').innerHTML = html
        document.getElementById('popUpDiv').style.transform = 'scale(1)'
    })
    
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popupOptions').style.display = 'none';
        document.getElementById('popUpDiv').style.transform = 'scale(0)'
    });
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

eel.getHtml("./view/PopUps/actionPopUp.html")(function(html){
    const mydiv= document.createElement('div');
    mydiv.innerHTML = html
    document.body.appendChild(mydiv)
});

