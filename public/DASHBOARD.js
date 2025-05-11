
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
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

}

selecinardadosgrafico()