
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
        data: [62.5, 25, 12.5],
    }]
}

const config = {
    type: 'pie',
    data: data,
};

const graficoPartidas = new Chart(
    document.getElementById('graficoPartidas'),
    config
);