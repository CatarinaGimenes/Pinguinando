function abrirMapa() {
    blogId.innerHTML += `
        <div class="tela-inteira">
            <div class="mapa-inteiro">
                <img onclick="redirecionarIndex()" class="montanha" src="Fotos/montanha.png">
                <div class="localizacao" id="locmontanha">Página Inicial</div>
                <img class="EPF" src="Fotos/EstranhaParafernaliaFalante.png">
                <div class="localizacao" id="locEPF">Estranha Parafernália Falante</div>
                <img onclick="redirecionarPersonagens()" class="farol" src="Fotos/farol.png">
                <div class="localizacao" id="locpersonagens">Personagens</div>
                <img onclick="redirecionarCRIADOR()" class="catalogo" src="Fotos/catalogo.png">
                <div class="localizacao" id="loccatalogo">Loja de Roupas</div>
                <img onclick="redirecionarLinhaTempo()" class="plaza" src="Fotos/plaza.png">
                <div class="localizacao" id="loclinhatempo">Linha do Tempo</div>
                <img onclick="redirecionarCARDJITSU()" class="dojo" src="Fotos/dojo.png">
                <div class="localizacao" id="locdojo">Card Jitsu</div>
                <img onclick="fechar()" class="xis" src="Fotos/Inventory_image-metade.png">
            </div>
        </div>
        `
}

function fechar() {
    blogId.innerHTML = ""
}
