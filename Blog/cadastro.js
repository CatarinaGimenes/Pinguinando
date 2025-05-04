function abrirLogin() {
    blogLogin.innerHTML = `
    <div class="tela-inteira">
                <div id="corpo-login">
                    <h2 id="xis" onclick="fecharcadastro()">Fechar</h2>
                    <div id="topo-corpologin">
                        <h2>Cadastre-se</h2>
                    </div>
                    <div id="resto-corpo">
                        <div id="corpo-pinguim">
                            <img id="img_pinguim" src="Fotos/criadordPersonagem/1.png">
                            <h2 id="nome_pinguim"></h2>
                        </div>
                        <div id="corpo-nome">
                            <h2>Escolha um nome para seu pinguim:</h2>
                            <input type="text" class="inserir" id="nome_usuario" maxlength="32" onkeyup="mostrar()">
                            <h2>Crie uma senha bem segura:</h2>
                            <input type="password" class="inserir">
                            <h2>Escolha uma cor:</h2>
                            <div id="todas-cores">
                                <div class="cores">
                                    <button onclick="Acor1()" id="cor1" class="botaoCOR"></button>
                                    <button onclick="Acor2()" id="cor2" class="botaoCOR"></button>
                                    <button onclick="Acor3()" id="cor3" class="botaoCOR"></button>
                                    <button onclick="Acor4()" id="cor4" class="botaoCOR"></button>
                                    <button onclick="Acor5()" id="cor5" class="botaoCOR"></button>
                                    <button onclick="Acor6()" id="cor6" class="botaoCOR"></button>
                                    <button onclick="Acor7()" id="cor7" class="botaoCOR"></button>
                                    <button onclick="Acor8()" id="cor8" class="botaoCOR"></button>
                                </div>
                                <div class="cores">
                                    <button onclick="Acor9()" id="cor9" class="botaoCOR"></button>
                                    <button onclick="Acor10()" id="cor10" class="botaoCOR"></button>
                                    <button onclick="Acor11()" id="cor11" class="botaoCOR"></button>
                                    <button onclick="Acor12()" id="cor12" class="botaoCOR"></button>
                                    <button onclick="Acor13()" id="cor13" class="botaoCOR"></button>
                                    <button onclick="Acor14()" id="cor14" class="botaoCOR"></button>
                                    <button onclick="Acor15()" id="cor15" class="botaoCOR"></button>
                                    <button onclick="Acor16()" id="cor16" class="botaoCOR"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="final-corpo">
                        <button id="btn_continue">Continue</button>
                    </div>
                    <h2 id="entrarlogin">Já tem uma conta? <a href="index.html">Faça Login!</a></h2>
                </div>
            </div>
    `
}

function fecharcadastro() {
    blogLogin.innerHTML = ""
}

function mostrar() {
    nome_pinguim.innerHTML = nome_usuario.value
}

// Funções que alteram a cor do Pinguim

function Acor1() {
    img_pinguim.src = "Fotos/criadordPersonagem/1.png"
}

function Acor2() {
    img_pinguim.src = "Fotos/criadordPersonagem/2.png"
}

function Acor3() {
    img_pinguim.src = "Fotos/criadordPersonagem/3.png"
}

function Acor4() {
    img_pinguim.src = "Fotos/criadordPersonagem/4.png"
}

function Acor5() {
    img_pinguim.src = "Fotos/criadordPersonagem/5.png"
}

function Acor6() {
    img_pinguim.src = "Fotos/criadordPersonagem/6.png"
}

function Acor7() {
    img_pinguim.src = "Fotos/criadordPersonagem/7.png"
}

function Acor8() {
    img_pinguim.src = "Fotos/criadordPersonagem/8.png"
}

function Acor9() {
    img_pinguim.src = "Fotos/criadordPersonagem/9.png"
}

function Acor10() {
    img_pinguim.src = "Fotos/criadordPersonagem/10.png"
}

function Acor11() {
    img_pinguim.src = "Fotos/criadordPersonagem/11.png"
}

function Acor12() {
    img_pinguim.src = "Fotos/criadordPersonagem/12.png"
}

function Acor13() {
    img_pinguim.src = "Fotos/criadordPersonagem/13.png"
}

function Acor14() {
    img_pinguim.src = "Fotos/criadordPersonagem/14.png"
}

function Acor15() {
    img_pinguim.src = "Fotos/criadordPersonagem/15.png"
}

function Acor16() {
    img_pinguim.src = "Fotos/criadordPersonagem/16.png"
}