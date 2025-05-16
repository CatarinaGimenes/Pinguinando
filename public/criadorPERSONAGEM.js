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

function comprar(id) {
    console.log(id)
}

function abrirpagina1() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/100.png">
                                <button onclick="comprar(100)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/101.png">
                                <button onclick="comprar(101)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/102.png">
                                <button onclick="comprar(102)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/103.png">
                                <button onclick="comprar(103)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/104.png">
                                <button onclick="comprar(104)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/105.png">
                                <button onclick="comprar(105)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/106.png">
                                <button onclick="comprar(106)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/107.png">
                                <button onclick="comprar(107)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/108.png">
                                <button onclick="comprar(108)" class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/109.png">
                                <button onclick="comprar(109)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/110.png">
                                <button onclick="comprar(110)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/111.png">
                                <button onclick="comprar(111)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/112.png">
                                <button onclick="comprar(112)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/113.png">
                                <button onclick="comprar(113)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/114.png">
                                <button onclick="comprar(114)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/115.png">
                                <button onclick="comprar(115)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/116.png">
                                <button onclick="comprar(116)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/117.png">
                                <button onclick="comprar(117)" class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina2()" class="mudadorir"></div>
                <div onclick="abrirpaginacores()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function abrirpagina2() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/118.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/119.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/120.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/121.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/122.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/123.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/124.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/125.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/126.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/127.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/128.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/129.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/130.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/131.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/132.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/133.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/134.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/135.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina3()" class="mudadorir"></div>
                <div onclick="abrirpagina1()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function abrirpagina3() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/136.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/137.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/138.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/139.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/140.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/200.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/201.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/202.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/203.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/204.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/205.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/206.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/207.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/208.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/209.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/210.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/211.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/212.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina4()" class="mudadorir"></div>
                <div onclick="abrirpagina2()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function abrirpagina4() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/213.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/214.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/215.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/216.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/217.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/218.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/219.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/220.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/221.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/222.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/223.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/224.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/225.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/226.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/227.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/228.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/229.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/230.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina5()" class="mudadorir"></div>
                <div onclick="abrirpagina3()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function abrirpagina5() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/231.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/300.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/301.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/302.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/303.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/304.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/305.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/306.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/307.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/308.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/309.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/310.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/311.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/400.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/401.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/402.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/500.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/501.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina6()" class="mudadorir"></div>
                <div onclick="abrirpagina4()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function abrirpagina6() {
    blogRevista.innerHTML = `
        <div class="allpag">
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/502.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/503.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/504.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/505.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/506.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/507.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/508.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/509.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/600.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/601.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/602.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/603.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/604.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/605.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/606.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina5()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
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
                                <img onclick="mudarcor(5)" src="Fotos/catalogo/Icon/5.png">
                            </div>
                            <div class="linhade4">
                                <img onclick="mudarcor(6)" src="Fotos/catalogo/Icon/6.png">
                                <img onclick="mudarcor(7)" src="Fotos/catalogo/Icon/7.png">
                                <img onclick="mudarcor(8)" src="Fotos/catalogo/Icon/8.png">
                                <img onclick="mudarcor(9)" src="Fotos/catalogo/Icon/9.png">
                                <img onclick="mudarcor(10)" src="Fotos/catalogo/Icon/10.png">
                            </div>
                            <div class="linhade4">
                                <img onclick="mudarcor(11)" src="Fotos/catalogo/Icon/11.png">
                                <img onclick="mudarcor(12)" src="Fotos/catalogo/Icon/12.png">
                                <img onclick="mudarcor(13)" src="Fotos/catalogo/Icon/13.png">
                                <img onclick="mudarcor(14)" src="Fotos/catalogo/Icon/14.png">
                                <img onclick="mudarcor(15)" src="Fotos/catalogo/Icon/15.png">
                            </div>
                        </div>
                        <div id="botaocomprarcor">
                            <button class="botbot"></button>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <img id="pinguimcolorido" src="Fotos/catalogo/1CATALOGO.png">
                </div>
                <div onclick="abrirpagina1()" class="mudadorir"></div>
                <div onclick="abrircatalogo()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
            </div>
        `
}

function mudarcor(color) {
    document.getElementById("pinguimcolorido").src = `Fotos/catalogo/${color}CATALOGO.png`
}

function fecharcatalogo() {
    blogRevista.innerHTML = ""
}

var qtdpag = 0
var pagina = 1


function selectarroupas() {
    var fkpinguimVar = localStorage.idPinguim

    fetch(`/pinguim/selectarroupas/${fkpinguimVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log(resposta2)

                qtdpag = Math.ceil(resposta2.length / 12)
                console.log(qtdpag)

                div_itens.innerHTML = ""
                for (let i = ((pagina * 12) - 12); i < (pagina * 12); i++) {
                    div_itens.innerHTML += `<img src="Fotos/catalogo/Icon/${resposta2[i].FKroupa}.png">`
                }
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

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

selectarroupas()