function trocarImagem() {
    document.querySelector("#image").src = "images.png";
    document.querySelector("#img2").src = "images.jpg";

    if(image.style.display = "none"){
        image.style.display = "none"
        img2.style.display = "block";
    }else{
        img2.style.display = "none";
        image.style.display = "block";
        
    }
}