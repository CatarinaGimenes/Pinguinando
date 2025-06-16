function encontrar(roupinha) {
    if (!localStorage.idPinguim) {
        return
    }
    for (let i = 0; i < TUDOcatalogo.length; i++) {
        if (roupinha == TUDOcatalogo[i].idRoupa) {
            console.log(TUDOcatalogo[i].idRoupa)
            if (TUDOcatalogo[i].FKpinguim == null) {
                executar(roupinha)
            }
        }
    }
}

function executar(roupinha) {
    var FKpinguimVar = localStorage.idPinguim
    var FKroupaVar = roupinha
    var precoVar = 0

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
            exibirtoast(`Fotos/catalogo/Icon/${roupinha}.png`, "Você desbloqueou um novo item! Vá até a loja de roupas dar uma olhada")
            checarroupas()
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function exibirtoast(imagem, mensagem) {
    setTimeout(() => {
        EXIBIRTOAST.innerHTML = `
        <div id="TOAST">
            <img src="${imagem}">
            <h4>${mensagem}</h4>
        </div>
        `
    }, 150);
    setTimeout(() => {
        EXIBIRTOAST.innerHTML = ""
    }, 3000);
}

let TUDOcatalogo = []
function checarroupas() {
    if (!localStorage.idPinguim) {
        return
    }
    var fkpinguimVar = localStorage.idPinguim

    fetch(`/pinguim/checarroupas/${fkpinguimVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log(resposta2)
                TUDOcatalogo = resposta2
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}
checarroupas()