var partida_acontecendo = false

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

// Variável para exibição dos resultados
var tipo_string_machine = 0
var string_rodada = 0

// Definindo os resultados das rodadas
var resultado_rodada = 0
var empate = 4
var jogador_win = 5
var jogador_perdeu = 6

// Definindo o vencedor de todas as rodadas
var won_rounds = 0
var lost_rounds = 0
var tied_rounds = 0

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
            div_vitoria.innerHTML += `<b> Player venceu!!! </b>`
        }
        if (lost_rounds > won_rounds) {
            div_vitoria.innerHTML += `<b> Player perdeu :(, vitória da Máquina </b>`
        }
        if (lost_rounds == won_rounds) {
            div_vitoria.innerHTML += `<b> O jogo deu empate! Tente mais uma vez, a segunda tentativa
            sempre dá sorte </b>`
        }
    }

    // Transformando os tipos das cartas (3, 2, 1) em strings (Fogo, água e gelo)
    if (tipo_machine == fogo) {
        tipo_string_machine = "fogo"
    }
    if (tipo_machine == gelo) {
        tipo_string_machine = "gelo"
    }
    if (tipo_machine == agua) {
        tipo_string_machine = "água"
    }

    // Transformando os resultados em strings
    if (resultado_rodada == jogador_win) {
        string_rodada = "ganhou"
    }
    if (resultado_rodada == jogador_perdeu) {
        string_rodada = "perdeu"
    }
    if (resultado_rodada == empate) {
        string_rodada = "empatou"
    }
}

// Funções específicas para cada carta
function lancar1() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = fogo
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

    // div_club.innerHTML = `Rodada ${rodada}- Você lançou uma carta tipo fogo, de valor ${valor_carta1}, <br>
    // seu oponente lançou uma carta tipo ${tipo_string_machine}, de valor ${valor_machine1}, <br>
    // <b> você ${string_rodada}! </b>`

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
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
        }
        fundo.appendChild(novaDiv)
    }, 3500)


    console.log('vitória:' + won_rounds)
    console.log('derrota:' + lost_rounds)
    console.log('empate:' + tied_rounds)
    console.log(resultado_rodada == jogador_win)
}

function lancar2() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = gelo
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

    // div_club.innerHTML = `Rodada ${rodada}- Você lançou uma carta tipo gelo, de valor ${valor_carta2}, <br>
    // seu oponente lançou uma carta tipo ${tipo_string_machine}, de valor ${valor_machine2}, <br>
    // <b> você ${string_rodada}! </b>`

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
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log('vitória:' + won_rounds)
    console.log('derrota:' + lost_rounds)
    console.log('empate:' + tied_rounds)
    console.log(resultado_rodada == jogador_win)
}

function lancar3() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = agua
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

    // div_club.innerHTML = `Rodada ${rodada}- Você lançou uma carta tipo água, de valor ${valor_carta3}, <br>
    // seu oponente lançou uma carta tipo ${tipo_string_machine}, de valor ${valor_machine3}, <br>
    // <b> você ${string_rodada}! </b>`

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
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log('vitória:' + won_rounds)
    console.log('derrota:' + lost_rounds)
    console.log('empate:' + tied_rounds)
    console.log(resultado_rodada == jogador_win)
}

function lancar4() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = agua
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

    // div_club.innerHTML = `Rodada ${rodada}- Você lançou uma carta tipo água, de valor ${valor_carta4}, <br>
    // seu oponente lançou uma carta tipo ${tipo_string_machine}, de valor ${valor_machine4}, <br>
    // <b> você ${string_rodada}! </b>`

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
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log('vitória:' + won_rounds)
    console.log('derrota:' + lost_rounds)
    console.log('empate:' + tied_rounds)
    console.log(resultado_rodada == jogador_win)
}

function lancar5() {
    if (partida_acontecendo) {
        return
    }

    partida_acontecendo = true
    rodada++
    tipo_player = gelo
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

    // div_club.innerHTML = `Rodada ${rodada}- Você lançou uma carta tipo gelo, de valor ${valor_carta5}, <br>
    // seu oponente lançou uma carta tipo ${tipo_string_machine}, de valor ${valor_machine5}, <br>
    // <b> você ${string_rodada}! </b>`

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
            }, 3000)
        } else if (resultado_rodada == jogador_perdeu) {
            novaDiv.classList.add("cartas-contagem-negativo")
            setTimeout(() => {
                fundo.removeChild(novaDiv)
                numero_estatico2.innerHTML = lost_rounds
                partida_acontecendo = false
            }, 3000)
        } else if (resultado_rodada == empate) {
            partida_acontecendo = false
        }
        fundo.appendChild(novaDiv)
    }, 3500)

    console.log('vitória:' + won_rounds)
    console.log('derrota:' + lost_rounds)
    console.log('empate:' + tied_rounds)
    console.log(resultado_rodada == jogador_win)
}

inicial()