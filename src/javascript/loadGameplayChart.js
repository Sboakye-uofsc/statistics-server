import Chart from 'chart.js/auto';

async function loadGameplayChart() {
    const canvas = document.getElementById("myLines");
    
    if (!canvas) {
        console.error("Canvas element 'myLines' not found");
        return;
    }

    const zValues = [100,200,300,400,500,600,700,800,900,1000];

    new Chart(canvas, {
        type: "line",
        data: {
            labels: zValues,
            datasets: [{
                data: [860,1140,1060,5000,1070,1110,1900,2210,7830,2478],
                borderColor: "red",
                fill: false
            }]
        },
        options: {
            plugins: {
                legend: { display: false }
            }
        }
    });
}

export default loadGameplayChart;