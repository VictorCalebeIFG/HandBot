function addActionToList() {
    document.getElementById('popupOptions').style.display = 'none';
    condeinsertarea = document.getElementById('codeInsertArea')
    console.log(condeinsertarea)

    eel.getHtml("./view/codeElements/codeMouseAction.html")(function(html){
        const mydiv= document.createElement('div');
        mydiv.innerHTML = html
        console.log(mydiv)
        condeinsertarea.appendChild(mydiv)
    });

}


