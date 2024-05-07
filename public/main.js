onload = () => {
        document.body.classList.remove("container");
};

window.addEventListener("beforeunload", function (event) {
        var audio = document.getElementById("music");
        audio.pause(); // Pausa a reprodução do áudio
});
