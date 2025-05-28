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

function abrirtelefone() {
    blogCelular.innerHTML = `
    <div class="telainteira">
            <div id="celular">
                <img onclick="abrirLogin()" id="escudoicon" class="icons" src="Fotos/iconeescudo.png">
                <h2 id="excudotxt">Cadastro</h2>
                <img onclick="abrirdoc()" id="mensagemicon" class="icons" src="Fotos/iconemensagem.png">
                <h2 id="mensagemtxt">Creditos</h2>
                <img onclick="irlogin()" id="pinguimicon" class="icons" src="Fotos/IconePinguim.png">
                <h2 id="pinguimtxt">Login</h2>
                <img onclick="redirecionarCREDITOS()" id="LOGINicon" class="icons" src="Fotos/IconeLOGIN.png">
                <h2 id="doctxt">Documentação</h2>
                <img onclick="exibirtabelas()" id="TABELASicon" class="icons" src="Fotos/IconeTABELAS.png">
                <h2 id="modelagemtxt">Modelagem</h2>
                <img onclick="fechartelefone()" id="btnsair" src="Fotos/botaoEPF.png">
            </div>
        </div>
    `
}

function abrirdoc() {
    window.open('Pinguinando.pdf')
}

function fechartelefone() {
    blogCelular.innerHTML = ""
}

function exibirtabelas() {
    msg_erro.innerHTML = `
    <div class="telainteira">
        <img onclick="fecharmodelagem()" id="imgmodelagem" src="Fotos/modelagemlogica.png">
    </div>
    `
}

function fecharmodelagem() {
    msg_erro.innerHTML = ""
}

function redirecionarCREDITOS() {
    window.location.href = "creditos.html"
}