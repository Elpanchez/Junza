document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myPieChart').getContext('2d');
  const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Ingresos', 'Gastos'],
          datasets: [{
              label: 'Ingresos vs Gastos',
              data: [0, 0],
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

  const incomeForm = document.getElementById('incomeForm');
  const incomeList = document.getElementById('incomeList');
  const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');
  const saldoElement = document.getElementById('saldo');

  let totalIncome = 0;
  let totalExpenses = 0;

  incomeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const incomeName = document.getElementById('incomeName').value;
      const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
      totalIncome += incomeAmount;
      updateChartAndBalance();
      addToList(incomeList, incomeName, incomeAmount);
      incomeForm.reset();
  });

  expenseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const expenseName = document.getElementById('expenseName').value;
      const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
      totalExpenses += expenseAmount;
      updateChartAndBalance();
      addToList(expenseList, expenseName, expenseAmount);
      expenseForm.reset();
  });

  function updateChartAndBalance() {
    myPieChart.data.datasets[0].data = [totalIncome, totalExpenses];
    myPieChart.update();
    const balance = totalIncome - totalExpenses;
    saldoElement.textContent = `Su saldo es $${balance.toLocaleString()}`;
}

  function addToList(list, name, amount) {
      const listItem = document.createElement('div');
      listItem.classList.add('flex');
      listItem.innerHTML = `<span>${name}</span> => <span>$${amount.toFixed(2)}</span>`;
      list.appendChild(listItem);
  }
});

    // Dropdown functionality
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('#dropdownButton')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
});
