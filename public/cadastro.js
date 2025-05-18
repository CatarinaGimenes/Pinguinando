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
                            <input type="password" class="inserir" maxlength="32" id="senha">
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
                        <button onclick="cadastrar()" id="btn_continue">Cadastrar</button>
                    </div>
                    <h2 onclick="irlogin()" id="entrarlogin">Já tem uma conta? Faça Login!</h2>
                </div>
            </div>
    `
}

function irlogin() {
    blogLogin.innerHTML = `
                <div class="tela-inteira">
                <div class="aba-login">
                    <div class="campos">

                        <div class="campo">
                            <h2>Nome do Pinguim:</h2>
                            <input id="logar_nome" type="text" class="pwd">
                        </div>
                        <div class="campo">
                            <h2>Senha:</h2>
                            <input id="logar_senha" type="password" class="pwd">
                        </div>
                    </div>
                    <div>
                        <button onclick="logar()" id="btn_entrar">Entrar</button>
                        <h2 onclick="fecharlogin()" id="fechar-login">Fechar</h2>
                    </div>
                </div>
            </div>
    `
}

function fecharlogin() {
    blogLogin.innerHTML = ""
}

function fecharcadastro() {
    blogLogin.innerHTML = ""
}

function mostrar() {
    nome_pinguim.innerHTML = nome_usuario.value
}

// Funções que alteram a cor do Pinguim

var colorido = 0

function Acor1() {
    img_pinguim.src = "Fotos/criadordPersonagem/1.png"
    colorido = 1
}

function Acor2() {
    img_pinguim.src = "Fotos/criadordPersonagem/2.png"
    colorido = 2
}

function Acor3() {
    img_pinguim.src = "Fotos/criadordPersonagem/3.png"
    colorido = 3
}

function Acor4() {
    img_pinguim.src = "Fotos/criadordPersonagem/4.png"
    colorido = 4
}

function Acor5() {
    img_pinguim.src = "Fotos/criadordPersonagem/5.png"
    colorido = 5
}

function Acor6() {
    img_pinguim.src = "Fotos/criadordPersonagem/6.png"
    colorido = 6
}

function Acor7() {
    img_pinguim.src = "Fotos/criadordPersonagem/7.png"
    colorido = 7
}

function Acor8() {
    img_pinguim.src = "Fotos/criadordPersonagem/8.png"
    colorido = 8
}

function Acor9() {
    img_pinguim.src = "Fotos/criadordPersonagem/9.png"
    colorido = 9
}

function Acor10() {
    img_pinguim.src = "Fotos/criadordPersonagem/10.png"
    colorido = 10
}

function Acor11() {
    img_pinguim.src = "Fotos/criadordPersonagem/11.png"
    colorido = 11
}

function Acor12() {
    img_pinguim.src = "Fotos/criadordPersonagem/12.png"
    colorido = 12
}

function Acor13() {
    img_pinguim.src = "Fotos/criadordPersonagem/13.png"
    colorido = 13
}

function Acor14() {
    img_pinguim.src = "Fotos/criadordPersonagem/14.png"
    colorido = 14
}

function Acor15() {
    img_pinguim.src = "Fotos/criadordPersonagem/15.png"
    colorido = 15
}

function Acor16() {
    img_pinguim.src = "Fotos/criadordPersonagem/16.png"
    colorido = 16
}


function cadastrar() {

    var nomeVar = nome_usuario.value
    var senhaVar = senha.value
    var corVar = colorido

    if (nome_usuario.value == "" || senha.value == "") {
        msg_erro.innerHTML = `
        <div class="telainteira">
            <div id="mensagem">
                <h2>Você deixou alguns campos em branco, seu cadastro não pôde ser realizado</h2>
                <button onclick="fecharerro()">Okay</button>
            </div>
        </div>
        `
    } else {
        fetch(`/pinguim/validar/${nomeVar}`, {
            method: "GET",
        })
            .then(function (resposta) {
                resposta.json().then((resposta2) => {
                    console.log(resposta2)

                    if (resposta2.length > 0) {
                        msg_erro.innerHTML = `
                        <div class="telainteira">
                            <div id="mensagem">
                                <h2>Que pena! Já existe outro usuário com esse nome</h2>
                                <button onclick="fecharerro()">Okay</button>
                            </div>
                        </div>
                        `
                        return
                    }

                    fetch("/pinguim/cadastrar", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nome: nomeVar,
                            senha: senhaVar,
                            cor: corVar,
                        }),
                    })
                        .then(function (resposta) {
                            console.log("resposta: ", resposta);
                            irlogin()
                        })
                        .catch(function (resposta) {
                            console.log(`#ERRO: ${resposta}`);
                        });
                })
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }
}

var recarregar = false
function logar() {

    var nomeVar = logar_nome.value
    var senhaVar = logar_senha.value

    if (logar_nome.value == "" || logar_senha.value == "") {
        msg_erro.innerHTML = `
        <div class="telainteira">
            <div id="mensagem">
                <h2>Você deixou alguns campos em branco, seu cadastro não pôde ser realizado</h2>
                <button onclick="fecharerro()">Okay</button>
            </div>
        </div>
        `
    } else {
        fetch("/pinguim/logar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nomeVar,
                senha: senhaVar,
            }),
        })
            .then(function (resposta) {
                resposta.json().then((resposta2) => {
                    console.log(resposta2)
                    if (resposta2.length == 0) {
                        msg_erro.innerHTML = `
                            <div class="telainteira">
                                <div id="mensagem">
                                    <h2>Nome ou senha inválidos</h2>
                                    <button onclick="fecharerro()">Okay</button>
                                </div>
                            </div>
                            `
                    } else {
                        localStorage.idPinguim = resposta2[0].idPinguim
                        localStorage.nome = resposta2[0].nome
                        fecharlogin()
                        if (recarregar) {
                            window.location.reload()
                        }
                    }
                })
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }

}

function fecharerro() {
    msg_erro.innerHTML = ""
}