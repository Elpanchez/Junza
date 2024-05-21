document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    let ingresos = 0;
    let gastos = 0;
    let data = [];
    let labels = [];
    let backgroundColors = [];
  
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Patrimonio',
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
    });
  
    const saldoElement = document.getElementById('saldo');
  
    function updateSaldo() {
        const saldo = ingresos - gastos;
        saldoElement.textContent = `Su saldo es $${saldo.toLocaleString()}`;
    }
  
    function updateChart() {
        myPieChart.update();
        updateSaldo();
    }
  
    function addTransaction(cardTitle, nombre, cantidad) {
        const index = labels.indexOf(cardTitle);
        if (index === -1) {
            labels.push(cardTitle);
            data.push(cantidad);
            backgroundColors.push(getRandomColor());
        } else {
            data[index] += cantidad;
        }
        updateChart();
    }
  
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  
    const forms = document.querySelectorAll('.card form');
  
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const nombre = formData.get('nombre');
            const cantidad = parseInt(formData.get('cantidad'));
  
            const cardTitle = form.closest('.card').querySelector('.card-title').textContent;
  
            if (cardTitle === 'Ingresos') {
                ingresos += cantidad;
            } else if (cardTitle === 'Gastos') {
                gastos += cantidad;
            }
  
            const div = document.createElement('div');
            div.textContent = `${nombre}: $${cantidad.toLocaleString()}`;
            form.nextElementSibling.appendChild(div);
  
            addTransaction(cardTitle, nombre, cantidad);
            form.reset();
        });
    });
  
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
  
    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
  
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#dropdownButton')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
  
    const grid = document.getElementById('grid');
    const optionButtons = document.querySelectorAll('.dropdown-item');
  
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            duplicateCard(button.textContent);
        });
    });
  
    function duplicateCard(title) {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
            <h2 class="card-title">${title}</h2>
            <form>
                <input type="text" name="nombre" placeholder="Nombre del ${title.toLowerCase()}" required>
                <input type="number" name="cantidad" placeholder="Cantidad" required>
                <button type="submit" class="btn">Agregar</button>
            </form>
            <div class="montos"></div>
        `;
        grid.appendChild(newCard);
  
        const form = newCard.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const nombre = formData.get('nombre');
            const cantidad = parseInt(formData.get('cantidad'));
  
            if (title === 'Ingresos') {
                ingresos += cantidad;
            } else if (title === 'Gastos') {
                gastos += cantidad;
            }
  
            const div = document.createElement('div');
            div.textContent = `${nombre}: $${cantidad.toLocaleString()}`;
            form.nextElementSibling.appendChild(div);
  
            addTransaction(title, nombre, cantidad);
            form.reset();
        });
    }
  });
  
  

document.getElementById('cerrar_sesion').addEventListener('click', function() {
    window.location.href = '../index.html';
});