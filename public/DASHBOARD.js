
const labels = [
    'Vitórias',
    'Derrotas',
    'Emptates',
];

const data = {
    labels: labels,
    datasets: [{
        backgroundColor: [
            '#fdb732',
            '#a16e15',
            '#dfd3ac',
        ],
        borderColor: '#f6f1d7',
        hoverOffset: 1,
        data: [],
    }]
}

const config = {
    type: 'pie',
    data: data,
};



function selecinardadosgrafico() {

    var fkpinguimVar = localStorage.idPinguim

    fetch(`/pinguim/selecionardadosgrafico/${fkpinguimVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log(resposta2)

                var vitoria = 0
                var derrota = 0
                var empate = 0

                for (let i = 0; i < resposta2.length; i++) {
                    if (resposta2[i].resultado == "V") {
                        vitoria++
                    } else if (resposta2[i].resultado == "D") {
                        derrota++
                    } else if (resposta2[i].resultado == "E") {
                        empate++
                    }
                }

                var tudo = vitoria + derrota + empate
                var porcentagemvitorias = Number(((vitoria * 100) / tudo).toFixed(2))
                var porcentagemderrotas = Number(((derrota * 100) / tudo).toFixed(2))
                var porcentagemempates = Number(((empate * 100) / tudo).toFixed(2))

                const dados = [porcentagemvitorias, porcentagemderrotas, porcentagemempates]
                console.log(dados)

                data.datasets[0].data = dados

                new Chart(
                    document.getElementById('graficoPartidas'),
                    config
                );

                // Exibindo a soma de todas as moedas

                var total_moedas = 0
                for (let i = 0; i < resposta2.length; i++) {
                    console.log(resposta2[i])
                    total_moedas += resposta2[i].moedas
                }
                console.log(total_moedas)

                moedinhas_pinguim.innerHTML = total_moedas

                // Exibindo o XP da última semana
                const ultimasemana = new Date()
                ultimasemana.setDate(ultimasemana.getDate() - 7)
                var XP_total7dias = 0

                for (let i = 0; i < resposta2.length; i++) {

                    const dataGame = new Date(resposta2[i].dtFinal)

                    if (dataGame > ultimasemana) {
                        XP_total7dias += resposta2[i].XP
                    }
                }
                xp_ultimasem.innerHTML = XP_total7dias

                // Exibindo a maior sequência de vitórias
                var contagem_vitorias = 0
                var seq_vitorias = 0

                for (let i = 0; i < resposta2.length; i++) {
                    if (resposta2[i].resultado == "V") {
                        contagem_vitorias++
                        if (contagem_vitorias > seq_vitorias) {
                            seq_vitorias = contagem_vitorias
                        }
                    } else {
                        contagem_vitorias = 0
                    }
                }
                sequencia.innerHTML = seq_vitorias

                // Exibindo os alertas na tabela
                /*for (let i = 6; i > 0; i--) {
                    console.log(resposta2[resposta2.length - 1].resultado)
                }*/

                for (let i = 1; i <= 6; i++) {
                    var resultadoTexto = ""
                    var resultadoImage = ""
                    if (resposta2[resposta2.length - i].resultado == "V") {
                        resultadoTexto = "Vitória"
                        resultadoImage = "Fotos/Happy_emoticon.webp"
                    } else if (resposta2[resposta2.length - i].resultado == "D") {
                        resultadoTexto = "Derrota"
                        resultadoImage = "Fotos/Moody_Emoticon.webp"
                    } else {
                        resultadoTexto = "Empate"
                        resultadoImage = "Fotos/Hmm_Emoticon.webp"
                    }

                    var datahora = new Date(resposta2[resposta2.length - i].dtFinal)

                    alerts.innerHTML += `
                    <div class="alerta">
                        <img src="${resultadoImage}">
                        <h5>${resultadoTexto}</h5>
                        <h3>${datahora.toLocaleString("en-GB", { timeZone: "UTC" })}</h3>
                    </div>
                    `
                }

                // Exibindo alterações em 'Faixa Atual'/'Próxima Faixa'
                var XPTOTAL = 0
                var faixas = {}

                for (let i = 0; i < resposta2.length; i++) {
                    XPTOTAL += resposta2[i].XP
                }

                if (XPTOTAL < 500) {
                    faixas = {
                        faixa_atual: "Fotos/faixaBRANCA.webp",
                        proxima_faixa: "Fotos/faixaAMARELA.webp",
                        xp_atual: XPTOTAL,
                        xp_necessario: 500,
                    }
                } else if (XPTOTAL < 1500) {
                    faixas = {
                        faixa_atual: "Fotos/faixaAMARELA.webp",
                        proxima_faixa: "Fotos/faixaLARANJA.webp",
                        xp_atual: XPTOTAL - 500,
                        xp_necessario: 1000,
                    }
                } else if (XPTOTAL < 3000) {
                    faixas = {
                        faixa_atual: "Fotos/faixaLARANJA.webp",
                        proxima_faixa: "Fotos/faixaVERDE.webp",
                        xp_atual: XPTOTAL - 1500,
                        xp_necessario: 1500,
                    }
                } else if (XPTOTAL < 5000) {
                    faixas = {
                        faixa_atual: "Fotos/faixaVERDE.webp",
                        proxima_faixa: "Fotos/faixaAZUL.webp",
                        xp_atual: XPTOTAL - 3000,
                        xp_necessario: 2000,
                    }
                } else if (XPTOTAL < 7500) {
                    faixas = {
                        faixa_atual: "Fotos/faixaAZUL.webp",
                        proxima_faixa: "Fotos/faixaVERMELHA.webp",
                        xp_atual: XPTOTAL - 5000,
                        xp_necessario: 2500,
                    }
                } else if (XPTOTAL < 10500) {
                    faixas = {
                        faixa_atual: "Fotos/faixaVERMELHA.webp",
                        proxima_faixa: "Fotos/faixaROXA.webp",
                        xp_atual: XPTOTAL - 7500,
                        xp_necessario: 3000,
                    }
                } else if (XPTOTAL < 14000) {
                    faixas = {
                        faixa_atual: "Fotos/faixaROXA.webp",
                        proxima_faixa: "Fotos/faixaMARROM.webp",
                        xp_atual: XPTOTAL - 10500,
                        xp_necessario: 3500,
                    }
                } else if (XPTOTAL < 18000) {
                    faixas = {
                        faixa_atual: "Fotos/faixaMARROM.webp",
                        proxima_faixa: "Fotos/faixaPRETA.webp",
                        xp_atual: XPTOTAL - 14000,
                        xp_necessario: 4000,
                    }
                }
                faixas.tamanho = 100 / faixas.xp_necessario * faixas.xp_atual

                caixa_progressao.innerHTML = `
                <div class="faixas">
                    <h4>Faixa Atual</h4>
                    <img src="${faixas.faixa_atual}">
                </div>
                <div id="barrinha">
                    <div id="BARRA">
                        <div style="width: ${faixas.tamanho}%;" id="barra_XP">
                            <h2>${faixas.xp_atual} / ${faixas.xp_necessario} XP</h2>
                        </div>
                    </div>
                </div>
                <div class="faixas" id="prox_faixa">
                    <h4>Próxima Faixa</h4>
                    <img onclick="mostrar()" id="proxima_faixa" src="${faixas.proxima_faixa}">
                </div>
                `

                if (XPTOTAL >= 18000) {
                    caixa_progressao.innerHTML = `
                    <div id="faixapreta">
                        <h2>Faixa Preta</h2>
                        <img id="proxima_faixa" src="Fotos/faixaPRETA.webp">
                    </div>
                    `
                }
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

}

function mostrar() {
    mostrar_tabela.innerHTML = `
    <div id="telatoda">
        <div  id="tabla">
            <img onclick="fechar()" id="ex" src="Fotos/Xtabela.png">
        </div>
    </div>
    `
}

function fechar() {
    mostrar_tabela.innerHTML = ""
}

selecinardadosgrafico()