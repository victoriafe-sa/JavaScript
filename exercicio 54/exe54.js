document.getElementById("mudar").addEventListener("click", function() {
    const paragrafo = document.querySelector("p");
        if (paragrafo.style.color === "black") {
            paragrafo.style.color = "white";
        }else{
            paragrafo.style.color = "black";
        }
});