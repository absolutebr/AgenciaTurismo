function abrirModal(img){
    
    document.getElementById('imgmodal').src=img.src
    // document.getElementById('imgmodal').
    document.getElementById('modal').style.display="block";
}
function fecharModal(){
    document.getElementById('modal').style.display="none";
}