var partida_acontecendo = false

// Vetores com as imagens dos Backgrounds das cartas
var vt_fogo = ['FOGO-puffle.png', 'FOGO-fogoartificio.png', 'FOGO-pirotecnista.png', 'FOGO-ninjafogo.png', 'FOGO-pufflelaranja.png', 'FOGO-lovepuffle.png', 'FOGO-lapis.png', 'FOGO-desentupidor.png', 'FOGO-tapete.png']

var vt_agua = ['AGUA-waterslide.png', 'AGUA-iceberg.png', 'AGUA-polvo.png', 'AGUA-puffleverde.png', 'AGUA-trabalhador.png', 'AGUA-puffledourado.png', 'AGUA-chuva.png', 'AGUA-rockhopper.png', 'AGUA-touro.png', 'AGUA-gary.png']

var vt_gelo = ['NEVE-guido.png', 'NEVE-squidzoid.png', 'NEVE-pufflebranco.png', 'NEVE-alien.png', 'NEVE-puffleperdido.png', 'NEVE-arcondicionado.png', 'NEVE-aniversario.png', 'NEVE-halloween.png', 'NEVE-tecladista.png', 'NEVE-boiacross.png']

// Definindo os valores das cartas do player
var valor_carta1 = 0
var valor_carta2 = 0
var valor_carta3 = 0
var valor_carta4 = 0
var valor_carta5 = 0

// cartas da máquina
var valor_machine1 = 0
var valor_machine2 = 0
var valor_machine3 = 0
var valor_machine4 = 0
var valor_machine5 = 0
var tipo_machine = 0

// Definindo o tipo da carta (Fogo, água ou gelo)
var tipo_aleatorio = 0
var tipo_player = 0

// Definindo as rodadas específicas
var rodada = 0
var rodada_1 = 0
var rodada_2 = 0
var rodada_3 = 0
var rodada_4 = 0
var rodada_5 = 0

// Atribuindo valores aos tipos de cartas
var fogo = 3;
var gelo = 2;
var agua = 1;

// Definindo os resultados das rodadas
var resultado_rodada = 0
var empate = 4
var jogador_win = 5
var jogador_perdeu = 6

// Definindo o vencedor de todas as rodadas
var won_rounds = 0
var lost_rounds = 0
var tied_rounds = 0

//Variavel de resultado definitivo
var RESULTADO_TOTAL = "V"

// Função que aleatoriza e define os valores das cartas
var index = 1
function inicial() {

    while (index <= 5) {
        btn_carta = document.getElementById(`carta${index}`)
        btn_tras = document.getElementById(`tras${index}`)

        var valor = Math.floor(Math.random() * 11) + 2
        var valor_machine = Math.floor(Math.random() * 11) + 2

        btn_carta.innerHTML = `<div class="num">${valor}</div>`
        btn_tras.innerHTML = `<div class="numM">${valor_machine}</div>`

        if (index == 1) {
            valor_carta1 = valor
        } else if (index == 2) {
            valor_carta2 = valor
        } else if (index == 3) {
            valor_carta3 = valor
        } else if (index == 4) {
            valor_carta4 = valor
        } else {
            valor_carta5 = valor
        }

        if (index == 1) {
            valor_machine1 = valor_machine
        } else if (index == 2) {
            valor_machine2 = valor_machine
        } else if (index == 3) {
            valor_machine3 = valor_machine
        } else if (index == 4) {
            valor_machine4 = valor_machine
        } else {
            valor_machine5 = valor_machine
        }

        index++
    }
}

// Função que compara os valores e tipos das cartas
function comparar() {
    resultado_rodada = 0

    // Comparando os Tipos
    if (tipo_player == fogo) {
        if (tipo_machine == 3) {
            resultado_rodada = empate
        } else if (tipo_machine == 2) {
            resultado_rodada = jogador_win
        } else {
            resultado_rodada = jogador_perdeu
        }
    }
    if (tipo_player == gelo) {
        if (tipo_machine == 2) {
            resultado_rodada = empate
        } else if (tipo_machine == 1) {
            resultado_rodada = jogador_win
        } else {
            resultado_rodada = jogador_perdeu
        }
    }
    if (tipo_player == agua) {
        if (tipo_machine == 1) {
            resultado_rodada = empate
        } else if (tipo_machine == 3) {
            resultado_rodada = jogador_win
        } else {
            resultado_rodada = jogador_perdeu
        }
    }

    // Definindo os valores das rodadas
    if (rodada == 1) {
        rodada_1 = tipo_player
    } else if (rodada == 2) {
        rodada_2 = tipo_player
    } else if (rodada == 3) {
        rodada_3 = tipo_player
    } else if (rodada == 4) {
        rodada_4 = tipo_player
    } else if (rodada == 5) {
        rodada_5 = tipo_player
    }
}

// Função que determina o padrão de jogadas da máquina
function jogada_maquina() {
    if (rodada == 1) {
        tipo_machine = Math.floor(Math.random() * 3) + 1
    }
    if (rodada == 2) {
        if (rodada_1 == fogo) {
            tipo_machine = gelo
        } else if (rodada_1 == gelo) {
            tipo_machine = agua
        } else {
            tipo_machine = fogo
        }
    }
    if (rodada == 3) {
        if (rodada_2 == fogo) {
            tipo_machine = gelo
        } else if (rodada_2 == gelo) {
            tipo_machine = agua
        } else {
            tipo_machine = fogo
        }
    }
    if (rodada == 4) {
        if (rodada_3 == fogo) {
            tipo_machine = gelo
        } else if (rodada_3 == gelo) {
            tipo_machine = agua
        } else {
            tipo_machine = fogo
        }
    }
    if (rodada == 5) {
        if (rodada_4 == fogo) {
            tipo_machine = gelo
        } else if (rodada_4 == gelo) {
            tipo_machine = agua
        } else {
            tipo_machine = fogo
        }
    }
}

// Função que determina o vencedor do game
function vencer() {
    if (rodada == 5) {
        if (won_rounds > lost_rounds) {
            RESULTADO_TOTAL = "V"
            if (!localStorage.idPinguim) {
                fundo.innerHTML += `
                <div id="finalizar">
                    <p>Você Venceu!!</p>
                    <button onclick="jogardnovo()" class="botao" id="btn_jogar">Jogar Novamente</button>
                    <button onclick="sair()" class="botao" id="btn_sair">Sair</button>
                </div>
                    `
            } else {
                fundo.innerHTML += `
                <div id="finalizar">
                    <p>Você Venceu!!</p>
                    <button onclick="jogardnovo()" class="botao" id="btn_jogar">Jogar Novamente</button>
                    <button onclick="redirecionarDASHBOARD()" class="botao" id="btn_dash">Dashboard</button>
                    <button onclick="sair()" class="botao" id="btn_sair">Sair</button>
                </div>
                    `
            }
            salvarPartida()
        }
        if (lost_rounds > won_rounds) {
            RESULTADO_TOTAL = "D"
            if (!localStorage.idPinguim){
                fundo.innerHTML += `
                <div id="finalizar">
                    <p>Que pena, você perdeu!</p>
                    <button onclick="jogardnovo()" class="botao" id="btn_jogar">Jogar Novamente</button>
                    <button onclick="sair()" class="botao" id="btn_sair">Sair</button>
                </div>
                `
            } else {
                fundo.innerHTML += `
                <div id="finalizar">
                    <p>Que pena, você perdeu!</p>
                    <button onclick="jogardnovo()" class="botao" id="btn_jogar">Jogar Novamente</button>
                    <button onclick="redirecionarDASHBOARD()" class="botao" id="btn_dash">Dashboard</button>
                    <button onclick="sair()" class="botao" id="btn_sair">Sair</button>
                </div>
                    `
            }
            salvarPartida()
        }
        if (lost_rounds == won_rounds) {
            RESULTADO_TOTAL = "E"
            if (!localStorage.idPinguim) {
                fundo.innerHTML += `
                <div id="finalizar">
                    <p>Empate!</p>
                    <button onclick="jogardnovo()" class="botao" id="btn_jogar">Jogar Novamente</button>
                    <button onclick="sair()" class="botao" id="btn_sair">Sair</button>
                </div>
                `
            } else {
                fundo.innerHTML += `
                <div id="finalizar">
                    <p>Empate!</p>
                    <button onclick="jogardnovo()" class="botao" id="btn_jogar">Jogar Novamente</button>
                    <button onclick="redirecionarDASHBOARD()" class="botao" id="btn_dash">Dashboard</button>
                    <button onclick="sair()" class="botao" id="btn_sair">Sair</button>
                </div>
                    `
            }
            salvarPartida()
        }
    }
}

var vt_tipos = []
function cartarPLAYER() {

    // Definindo os Tipos das cartas do player
    for (let i = 1; i <= 5; i++) {
        var tipo_aleatorio = Math.floor(Math.random() * 3) + 1
        var img_tipofogo = Math.floor(Math.random() * vt_fogo.length)
        var img_tipogelo = Math.floor(Math.random() * vt_gelo.length)
        var img_tipoagua = Math.floor(Math.random() * vt_agua.length)

        if (tipo_aleatorio == 3) {
            document.getElementById(`carta${i}`).classList.add("FIRECARD")
            vt_tipos.push(fogo)

            document.getElementById(`carta${i}`).style.backgroundImage = `url('Fotos/Cartas/Conjunto-1/${vt_fogo[img_tipofogo]}')`;

        } else if (tipo_aleatorio == 2) {
            document.getElementById(`carta${i}`).classList.add("ICECARD")
            vt_tipos.push(gelo)

            document.getElementById(`carta${i}`).style.backgroundImage = `url('Fotos/Cartas/Conjunto-1/${vt_gelo[img_tipogelo]}')`;

        } else {
            document.getElementById(`carta${i}`).classList.add("WATERCARD")
            vt_tipos.push(agua)

            document.getElementById(`carta${i}`).style.backgroundImage = `url('Fotos/Cartas/Conjunto-1/${vt_agua[img_tipoagua]}')`;
        }
    }
}
cartarPLAYER()

// Funções específicas para cada carta
function lancar1() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = vt_tipos[0]
    jogada_maquina()
    comparar()

    if (resultado_rodada == empate) {

        if (valor_carta1 > valor_machine1) {
            resultado_rodada = jogador_win
        } else if (valor_carta1 < valor_machine1) {
            resultado_rodada = jogador_perdeu
        } else if (valor_carta1 == valor_machine1) {
            resultado_rodada = empate
        }
    }

    if (tipo_machine == agua) {
        document.getElementById("tras1").classList.add("water")
    } else if (tipo_machine == fogo) {
        document.getElementById("tras1").classList.add("fire")
    } else if (tipo_machine == gelo) {
        document.getElementById("tras1").classList.add("ice")
    }

    // Definindo vencedores
    if (resultado_rodada == jogador_win) {
        won_rounds++
    } else if (resultado_rodada == jogador_perdeu) {
        lost_rounds++
    } else if (resultado_rodada == empate) {
        tied_rounds++
    }

    document.getElementById("carta1").classList.add("cards-after")
    setTimeout(() => {
        document.getElementById("carta1").outerHTML = ""
    }, 4000)

    document.getElementById("carta1-sensei").classList.add("cards-sensei-after")
    setTimeout(() => {
        document.getElementById("carta1-sensei").outerHTML = ""
    }, 4000)


    setTimeout(() => {
        var novaDiv = document.createElement("div")
        if (resultado_rodada == jogador_win) {
            novaDiv.classList.add("cartas-contagem")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico.innerHTML = won_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
            vencer()
        }
        fundo.appendChild(novaDiv)
    }, 3500)


    console.log(tipo_player)
    console.log(tipo_machine)
}

function lancar2() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = vt_tipos[1]
    jogada_maquina()
    comparar()

    if (resultado_rodada == empate) {

        if (valor_carta2 > valor_machine2) {
            resultado_rodada = jogador_win
        } else if (valor_carta2 < valor_machine2) {
            resultado_rodada = jogador_perdeu
        } else if (valor_carta2 == valor_machine2) {
            resultado_rodada = empate
        }
    }

    if (tipo_machine == agua) {
        document.getElementById("tras2").classList.add("water")
    } else if (tipo_machine == fogo) {
        document.getElementById("tras2").classList.add("fire")
    } else if (tipo_machine == gelo) {
        document.getElementById("tras2").classList.add("ice")
    }

    if (resultado_rodada == jogador_win) {
        won_rounds++
    } else if (resultado_rodada == jogador_perdeu) {
        lost_rounds++
    } else if (resultado_rodada == empate) {
        tied_rounds++
    }

    document.getElementById("carta2").classList.add("cards-after")
    setTimeout(() => {
        document.getElementById("carta2").outerHTML = ""
    }, 4000)

    document.getElementById("carta2-sensei").classList.add("cards-sensei-after")
    setTimeout(() => {
        document.getElementById("carta2-sensei").outerHTML = ""
    }, 4000)

    setTimeout(() => {
        var novaDiv = document.createElement("div")
        if (resultado_rodada == jogador_win) {
            novaDiv.classList.add("cartas-contagem")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico.innerHTML = won_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
            vencer()
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log(tipo_player)
    console.log(tipo_machine)
}

function lancar3() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = vt_tipos[2]
    jogada_maquina()
    comparar()

    if (resultado_rodada == empate) {

        if (valor_carta3 > valor_machine3) {
            resultado_rodada = jogador_win
        } else if (valor_carta3 < valor_machine3) {
            resultado_rodada = jogador_perdeu
        } else if (valor_carta3 == valor_machine3) {
            resultado_rodada = empate
        }
    }

    if (tipo_machine == agua) {
        document.getElementById("tras3").classList.add("water")
    } else if (tipo_machine == fogo) {
        document.getElementById("tras3").classList.add("fire")
    } else if (tipo_machine == gelo) {
        document.getElementById("tras3").classList.add("ice")
    }

    if (resultado_rodada == jogador_win) {
        won_rounds++
    } else if (resultado_rodada == jogador_perdeu) {
        lost_rounds++
    } else if (resultado_rodada == empate) {
        tied_rounds++
    }

    document.getElementById("carta3").classList.add("cards-after")
    setTimeout(() => {
        document.getElementById("carta3").outerHTML = ""
    }, 4000)
    document.getElementById("carta3-sensei").classList.add("cards-sensei-after")
    setTimeout(() => {
        document.getElementById("carta3-sensei").outerHTML = ""
    }, 4000)

    setTimeout(() => {
        var novaDiv = document.createElement("div")
        if (resultado_rodada == jogador_win) {
            novaDiv.classList.add("cartas-contagem")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico.innerHTML = won_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
            vencer()
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log(tipo_player)
    console.log(tipo_machine)
}

function lancar4() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = vt_tipos[3]
    jogada_maquina()
    comparar()

    if (resultado_rodada == empate) {

        if (valor_carta4 > valor_machine4) {
            resultado_rodada = jogador_win
        } else if (valor_carta4 < valor_machine4) {
            resultado_rodada = jogador_perdeu
        } else if (valor_carta4 == valor_machine4) {
            resultado_rodada = empate
        }
    }

    if (tipo_machine == agua) {
        document.getElementById("tras4").classList.add("water")
    } else if (tipo_machine == fogo) {
        document.getElementById("tras4").classList.add("fire")
    } else if (tipo_machine == gelo) {
        document.getElementById("tras4").classList.add("ice")
    }

    if (resultado_rodada == jogador_win) {
        won_rounds++
    } else if (resultado_rodada == jogador_perdeu) {
        lost_rounds++
    } else if (resultado_rodada == empate) {
        tied_rounds++
    }

    document.getElementById("carta4").classList.add("cards-after")
    setTimeout(() => {
        document.getElementById("carta4").outerHTML = ""
    }, 4000)
    document.getElementById("carta4-sensei").classList.add("cards-sensei-after")
    setTimeout(() => {
        document.getElementById("carta4-sensei").outerHTML = ""
    }, 4000)

    setTimeout(() => {
        var novaDiv = document.createElement("div")
        if (resultado_rodada == jogador_win) {
            novaDiv.classList.add("cartas-contagem")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico.innerHTML = won_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
            vencer()
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log(tipo_player)
    console.log(tipo_machine)
}

function lancar5() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = vt_tipos[4]
    jogada_maquina()
    comparar()

    if (resultado_rodada == empate) {

        if (valor_carta5 > valor_machine5) {
            resultado_rodada = jogador_win
        } else if (valor_carta5 < valor_machine5) {
            resultado_rodada = jogador_perdeu
        } else if (valor_carta5 == valor_machine5) {
            resultado_rodada = empate
        }
    }

    if (tipo_machine == agua) {
        document.getElementById("tras5").classList.add("water")
    } else if (tipo_machine == fogo) {
        document.getElementById("tras5").classList.add("fire")
    } else if (tipo_machine == gelo) {
        document.getElementById("tras5").classList.add("ice")
    }

    if (resultado_rodada == jogador_win) {
        won_rounds++
    } else if (resultado_rodada == jogador_perdeu) {
        lost_rounds++
    } else if (resultado_rodada == empate) {
        tied_rounds++
    }

    document.getElementById("carta5").classList.add("cards-after")
    setTimeout(() => {
        document.getElementById("carta5").outerHTML = ""
    }, 4000)
    document.getElementById("carta5-sensei").classList.add("cards-sensei-after")
    setTimeout(() => {
        document.getElementById("carta5-sensei").outerHTML = ""
    }, 4000)

    setTimeout(() => {
        var novaDiv = document.createElement("div")
        if (resultado_rodada == jogador_win) {
            novaDiv.classList.add("cartas-contagem")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico.innerHTML = won_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
                vencer()
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
            vencer()
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log(tipo_player)
    console.log(tipo_machine)
}

inicial()



function salvarPartida() {
    if (!localStorage.idPinguim) {
        return
    }

    var fkpinguimVar = localStorage.idPinguim
    var resultadoVar = RESULTADO_TOTAL
    var pontosPlayerVar = won_rounds
    var pontosMaquinaVar = lost_rounds

    fetch("/pinguim/salvarPartida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkpinguim: fkpinguimVar,
            resultado: resultadoVar,
            pontosPlayer: pontosPlayerVar,
            pontosMaquina: pontosMaquinaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

}