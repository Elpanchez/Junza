const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Ingresos', 'Gastos'],
    datasets: [{
      label: 'Ingresos vs Gastos',
      data: [6020000, 2400000],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)', // Azul
        'rgba(255, 99, 132, 0.6)' // Rojo
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false
  }
});
