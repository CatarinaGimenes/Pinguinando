recarregar = true

function redirecionarIndex() {
    window.location.href = "index.html"
}

function redirecionarLinhaTempo() {
    window.location.href = "LinhadoTempo.html"
}

function redirecionarPersonagens() {
    window.location.href = "Personagens.html"
}

function redirecionarCARDJITSU() {
    window.location.href = "PaginaInicialCADRJITSU.html"
}

function abrircatalogo() {
    blogRevista.innerHTML = `
        <div class='allpag'>
        <div class="caparevista">
            <div onclick="abrirpaginacores()"  id="apertar"></div>
            <div onclick="fecharcatalogo()" class="xiscata"></div>
        </div>
        </div>
        `
}

function abrirpaginacores() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div id="todascores">
                        <div>
                            <h2>Cores</h2>
                            <div class="linhade4">
                                <img onclick="mudarcor(1)" src="Fotos/catalogo/Icon/1.png">
                                <img onclick="mudarcor(2)" src="Fotos/catalogo/Icon/2.png">
                                <img onclick="mudarcor(3)" src="Fotos/catalogo/Icon/3.png">
                                <img onclick="mudarcor(4)" src="Fotos/catalogo/Icon/4.png">
                            </div>
                            <div class="linhade4">
                                <img onclick="mudarcor(5)" src="Fotos/catalogo/Icon/5.png">
                                <img onclick="mudarcor(6)" src="Fotos/catalogo/Icon/6.png">
                                <img onclick="mudarcor(7)" src="Fotos/catalogo/Icon/7.png">
                                <img onclick="mudarcor(8)" src="Fotos/catalogo/Icon/8.png">
                            </div>
                            <div class="linhade4">
                                <img onclick="mudarcor(9)" src="Fotos/catalogo/Icon/9.png">
                                <img onclick="mudarcor(10)" src="Fotos/catalogo/Icon/10.png">
                                <img onclick="mudarcor(11)" src="Fotos/catalogo/Icon/11.png">
                                <img onclick="mudarcor(12)" src="Fotos/catalogo/Icon/12.png">
                                </div>
                            <div class="linhade4">
                                <img onclick="mudarcor(13)" src="Fotos/catalogo/Icon/13.png">
                                <img onclick="mudarcor(14)" src="Fotos/catalogo/Icon/14.png">
                                <img onclick="mudarcor(15)" src="Fotos/catalogo/Icon/15.png">
                                <img onclick="mudarcor(16)" src="Fotos/catalogo/Icon/16.png">
                            </div>
                        </div>
                        <div id="botaocomprarcor">
                            <button onclick="comprar(1)" id="botcolor" class="botbot">20</button>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <img id="pinguimcolorido" src="Fotos/catalogo/1CATALOGO.png">
                </div>
                <div onclick="abrirpaginas()" class="mudadorir"></div>
                <div onclick="abrircatalogo()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function abrirpaginas() {
    blogRevista.innerHTML = `
        <div class="allpag">
            <div class="revista">
                <div class="lado_esquerdo">
                <div id="div_produtos1" class="produtos"></div>
                </div>
                <div class="lado_direito">
                <div id="div_produtos2" class="produtos"></div>
                </div>
                <div onclick="proximapagina()" class="mudadorir"></div>
                <div onclick="ultimapagina()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        </div>
    `
    catalogar()
}

function mudarcor(color) {
    document.getElementById("pinguimcolorido").src = `Fotos/catalogo/${color}CATALOGO.png`

    document.getElementById("botcolor").outerHTML = `<button onclick="comprar(${color})" id="botcolor" class="botbot">20</button>`
}

function fecharcatalogo() {
    blogRevista.innerHTML = ""
}

var qtdpag = 0
var pagina = 1
var qtdpartes = 0
var parte = 1

let roupasDoBanco = []
function inicializar() {
    var fkpinguimVar = localStorage.idPinguim

    fetch(`/pinguim/selectarroupas/${fkpinguimVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log(resposta2)
                roupasDoBanco = resposta2

                // Carregando as roupas que o pinguim está usando pela primeira vez
                for (let i = 0; i < resposta2.length; i++) {

                    if (resposta2[i].tipo == "cor" && resposta2[i].vestindo == true) {
                        document.getElementById("rpcor").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    if (resposta2[i].tipo == "corpo" && resposta2[i].vestindo == true) {
                        document.getElementById("rpcorpo").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    if (resposta2[i].tipo == "pes" && resposta2[i].vestindo == true) {
                        document.getElementById("rppes").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    if (resposta2[i].tipo == "mao" && resposta2[i].vestindo == true) {
                        document.getElementById("rpmao").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    if (resposta2[i].tipo == "pin" && resposta2[i].vestindo == true) {
                        document.getElementById("rppin").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    if (resposta2[i].tipo == "wallpaper" && resposta2[i].vestindo == true) {
                        document.getElementById("rpwallpaper").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    if (resposta2[i].tipo == "cabeca" && resposta2[i].vestindo == true) {
                        document.getElementById("rpcabeca").src = `Fotos/catalogo/paper/${resposta2[i].FKroupa}.png`
                    }
                    selectarroupas()
                }
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}


function catalogar() {
    qtdpartes = Math.ceil(vt_semcor.length / 18)

    div_produtos1.innerHTML = ""
    div_produtos2.innerHTML = ""
    if (parte == qtdpartes) {
        var contadoriteracoes = 0
        for (let i = ((parte * 18) - 18); i < vt_semcor.length; i++) {
            contadoriteracoes++
            if (contadoriteracoes <= 9) {
                div_produtos1.innerHTML += `
                    <div class="roupinha">
                        <img src="Fotos/catalogo/Icon/${vt_semcor[i].idRoupa}.png">
                        <button onclick="comprar(${vt_semcor[i].idRoupa})" class="botbot">${vt_semcor[i].preco}</button>
                    </div>
                    `
            } else {
                div_produtos2.innerHTML += `
                    <div class="roupinha">
                        <img src="Fotos/catalogo/Icon/${vt_semcor[i].idRoupa}.png">
                        <button onclick="comprar(${vt_semcor[i].idRoupa})" class="botbot">${vt_semcor[i].preco}</button>
                    </div>
                    `
            }
        }
    } else {
        var contadoriteracoes = 0
        for (let i = ((parte * 18) - 18); i < (parte * 18); i++) {
            contadoriteracoes++
            if (contadoriteracoes <= 9) {
                div_produtos1.innerHTML += `
                    <div class="roupinha">
                        <img src="Fotos/catalogo/Icon/${vt_semcor[i].idRoupa}.png">
                        <button onclick="comprar(${vt_semcor[i].idRoupa})" class="botbot">${vt_semcor[i].preco}</button>
                    </div>
                    `
            } else {
                div_produtos2.innerHTML += `
                    <div class="roupinha">
                        <img src="Fotos/catalogo/Icon/${vt_semcor[i].idRoupa}.png">
                        <button onclick="comprar(${vt_semcor[i].idRoupa})" class="botbot">${vt_semcor[i].preco}</button>
                    </div>
                    `
            }
        }
    }
}

function comprar(clothesId) {
    for (let i = 0; i < TUDOcatalogo.length; i++) {
        if (TUDOcatalogo[i].idRoupa == clothesId) {
            if (TUDOcatalogo[i].preco > minhasmoedas) {
                catalogoId.innerHTML = `
                    <div class="pagint">
                    <div id="modalerro">
                        <h2>Que pena, você não tem dinheiro para efetuar esta compra</h2>
                        <button onclick="nao()">Okay</button>
                    </div>
                    </div>
                    `
            } else {
                if (TUDOcatalogo[i].FKpinguim == null) {
                    catalogoId.innerHTML = `
                    <div class="pagint">
                    <div id="modal">
                        <h2>Deseja mesmo comprar este item?</h2>
                        <img src="Fotos/catalogo/Icon/${TUDOcatalogo[i].idRoupa}.png">
                        <div id="botoes">
                            <button onclick="sim(${TUDOcatalogo[i].idRoupa}, ${TUDOcatalogo[i].preco})">Sim</button>
                            <button onclick="nao()">Não</button>
                        </div>
                    </div>
                    </div>
                    `
                } else {
                    // mensagem de já ter
                    console.log("Já tem")
                    catalogoId.innerHTML = `
                    <div class="pagint">
                    <div id="modalerro">
                        <h2>Você já possui este item! Não gaste suas moedinhas à toa</h2>
                        <button onclick="nao()">Okay</button>
                    </div>
                    </div>
                    `
                }
            }
        }
    }
}

function nao() {
    catalogoId.innerHTML = ""
}

function sim(roupinha, precinho) {
    var FKpinguimVar = localStorage.idPinguim
    var FKroupaVar = roupinha
    var precoVar = precinho

    fetch("/pinguim/tirardinheiro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            FKpinguim: FKpinguimVar,
            FKroupa: FKroupaVar,
            preco: precoVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            inicializar()
            exibircatalogo()
            moedar()
            catalogoId.innerHTML = ""
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function proximapagina() {
    if (parte == qtdpartes) {
        return
    } else {
        parte++
        catalogar()
    }
}

function ultimapagina() {
    if (parte == 1) {
        abrirpaginacores()
    } else {
        parte--
        catalogar()
    }
}

function selectarroupas() {
    qtdpag = Math.ceil(roupasDoBanco.length / 12)

    div_itens.innerHTML = ""
    if (roupasDoBanco.length < 12 || pagina == qtdpag) {
        for (let i = ((pagina * 12) - 12); i < roupasDoBanco.length; i++) {
            div_itens.innerHTML += `<img class="roupaicon" onclick="colocar(${roupasDoBanco[i].FKroupa})" src="Fotos/catalogo/Icon/${roupasDoBanco[i].FKroupa}.png">`
        }
    } else {
        for (let i = ((pagina * 12) - 12); i < (pagina * 12); i++) {
            div_itens.innerHTML += `<img class="roupaicon" onclick="colocar(${roupasDoBanco[i].FKroupa})" src="Fotos/catalogo/Icon/${roupasDoBanco[i].FKroupa}.png">`
        }
    }
}

function ir() {
    if (pagina == qtdpag) {
        return
    } else {
        pagina++
        selectarroupas()
    }
    console.log(pagina)
}

function voltar() {
    if (pagina == 1) {
        return
    } else {
        pagina--
        selectarroupas()
    }
    console.log(pagina)
}


function colocar(roupa) {
    var FKroupaVar = 0
    var tipoRoupa = ""
    for (let i = 0; i < roupasDoBanco.length; i++) {
        if (roupasDoBanco[i].FKroupa == roupa) {
            tipoRoupa = roupasDoBanco[i].tipo

            if (roupasDoBanco[i].vestindo == 1 && (tipoRoupa != "cor" && tipoRoupa != "wallpaper")) {
                FKroupaVar = 0
                document.getElementById(`rp${tipoRoupa}`).src = ""
            } else {
                FKroupaVar = roupa
                document.getElementById(`rp${tipoRoupa}`).src = `Fotos/catalogo/paper/${roupa}.png`
            }
            break
        }
    }

    var FKpinguimVar = localStorage.idPinguim
    var tipoVar = tipoRoupa
    console.log(FKpinguimVar);


    fetch("/pinguim/updatearroupas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            FKpinguim: FKpinguimVar,
            tipo: tipoVar,
            FKroupa: FKroupaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            inicializar()
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

}

let TUDOcatalogo = []
function exibircatalogo() {
    var fkpinguimVar = localStorage.idPinguim

    fetch(`/pinguim/exibircatalogo/${fkpinguimVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log(resposta2)
                TUDOcatalogo = resposta2
                criarvetor()
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}
exibircatalogo()

var vt_semcor = []
function criarvetor() {
    for (let i = 0; i < TUDOcatalogo.length; i++) {
        if (i >= 16) {
            vt_semcor.push(TUDOcatalogo[i])
        }
    }
}

var minhasmoedas = 0

function moedar() {
    var idPinguimVar = localStorage.idPinguim

    fetch(`/pinguim/moedar/${idPinguimVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log("mais", resposta2)
                minhasmoedas = resposta2[0].moedas
                textomostrador.innerHTML = resposta2[0].moedas
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

moedar()
inicializar()