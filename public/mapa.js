function abrirMapa() {
    blogId.innerHTML += `
    <div class="tela-inteira">
            <div class="mapa-inteiro">
                <img onclick="redirecionarIndex()" class="montanha" src="Fotos/montanha.png">
                <img class="EPF" src="Fotos/EstranhaParafernaliaFalante.png">
                <img onclick="redirecionarPersonagens()" class="farol" src="Fotos/farol.png">
                <img onclick="redirecionarCRIADOR()" class="catalogo" src="Fotos/catalogo.png">
                <img onclick="redirecionarLinhaTempo()" class="plaza" src="Fotos/plaza.png">
                <img onclick="redirecionarCARDJITSU()" class="dojo" src="Fotos/dojo.png">
                <img onclick="fechar()" class="xis" src="Fotos/Inventory_image-metade.png">
            </div>
        </div>
        `
}

function fechar() {
    blogId.innerHTML = ""
}
