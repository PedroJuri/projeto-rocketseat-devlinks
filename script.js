function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/Avatar-light.png");
        img.setAttribute("alt", "Foto de Pedro Santos, de cabelo platinado, usando óculos de cor prata, camisa preta e relógio preto, barba e fundo branco com porta envernizada")
    } else{
       img.setAttribute("src", "./assets/Avatar.png");
       img.setAttribute("alt", "Foto de Pedro Santos, usando óculos de cor prata, camisa branca e cordão marrom, barba e fundo roxo")
    }
}