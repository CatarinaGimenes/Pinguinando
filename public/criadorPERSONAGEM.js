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
        <div class="caparevista">
            <div onclick="abrirpagina1()"  id="apertar"></div>
            <div onclick="fecharcatalogo()" class="xiscata"></div>
        </div>
        `
    }

    function comprar(id) {
        console.log(id)
    }

    function abrirpagina1() {
        blogRevista.innerHTML = `
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/100.png">
                                <button onclick="comprar(100)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/101.png">
                                <button onclick="comprar(101)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/102.png">
                                <button onclick="comprar(102)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/103.png">
                                <button onclick="comprar(103)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/104.png">
                                <button onclick="comprar(104)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/105.png">
                                <button onclick="comprar(105)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/106.png">
                                <button onclick="comprar(106)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/107.png">
                                <button onclick="comprar(107)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/108.png">
                                <button onclick="comprar(108)" class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/109.png">
                                <button onclick="comprar(109)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/110.png">
                                <button onclick="comprar(110)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/111.png">
                                <button onclick="comprar(111)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/112.png">
                                <button onclick="comprar(112)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/113.png">
                                <button onclick="comprar(113)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/114.png">
                                <button onclick="comprar(114)" class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/115.png">
                                <button onclick="comprar(115)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/116.png">
                                <button onclick="comprar(116)" class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/117.png">
                                <button onclick="comprar(117)" class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina2()" class="mudadorir"></div>
                <div onclick="abrircatalogo()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        `
    }

    function abrirpagina2() {
        blogRevista.innerHTML = `
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/118.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/119.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/120.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/121.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/122.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/123.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/124.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/125.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/126.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/127.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/128.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/129.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/130.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/131.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/132.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/133.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/134.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/135.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina3()" class="mudadorir"></div>
                <div onclick="abrirpagina1()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        `
    }

    function abrirpagina3() {
        blogRevista.innerHTML = `
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/136.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/137.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/138.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/139.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/corpo/140.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/200.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/201.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/202.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/203.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/204.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/205.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/206.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/207.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/208.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/209.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/210.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/211.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/212.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina4()" class="mudadorir"></div>
                <div onclick="abrirpagina2()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        `
    }

    function abrirpagina4() {
        blogRevista.innerHTML = `
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/213.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/214.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/215.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/216.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/217.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/218.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/219.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/220.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/221.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/222.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/223.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/224.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/225.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/226.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/227.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/228.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/229.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/230.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina5()" class="mudadorir"></div>
                <div onclick="abrirpagina3()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        `
    }

    function abrirpagina5() {
        blogRevista.innerHTML = `
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/cabeca/231.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/300.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/301.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/302.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/303.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/304.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/305.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/306.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/307.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/308.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/309.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/310.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pes/311.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/nadadeiras/400.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/nadadeiras/401.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/nadadeiras/402.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/500.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/501.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina6()" class="mudadorir"></div>
                <div onclick="abrirpagina4()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        `
    }

    function abrirpagina6() {
        blogRevista.innerHTML = `
        <div class="revista">
                <div class="lado_esquerdo">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/502.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/503.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/504.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/505.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/506.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/507.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/508.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/wallpaper/509.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/600.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lado_direito">
                    <div class="produtos">
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/601.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/602.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/603.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                        <div class="linhaprods">
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/604.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/605.png">
                                <button class="botbot"></button>
                            </div>
                            <div class="roupinha">
                                <img src="Fotos/catalogo/Icon/pin/606.png">
                                <button class="botbot"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onclick="abrirpagina5()" class="mudadorvoltar"></div>
                <div onclick="fecharcatalogo()" class="xiscat"></div>
            </div>
        `
    }

    function fecharcatalogo() {
        blogRevista.innerHTML = ""
    }