function generateReport(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let reportBody = document.getElementById('sales-report-body');
        let totalSales = 0;

        reportBody.innerHTML = '';

        data.sales.forEach(item => {
            let total = item.quantity * item.price;
            totalSales += total;

            let row = `<tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${item.price.toFixed(2)}</td>
            </tr>`;
            reportBody.innerHTML += row;
        });

        document.getElementById('total-sales').textContent = `$${totalSales.toFixed(2)}`;
    })
    .catch(error => console.error('Error:', error));

}