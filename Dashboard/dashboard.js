//dashboard.js
document.addEventListener('DOMContentLoaded',function(){
    //sample data for charts
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets:[{
            label:'Revenue Trend',
            data: [65000, 59000, 80000, 81000, 56000,75000],
            bordercolor: '#3498db',
            tension:0.1
        }]
    };

    const barchart = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
            label: 'Sales Performance',
            data: [65, 59, 80, 81],
            backgroundcolor:'#2ecc71'
        }]
    };

    //Initialize charts
    const lineChart = new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: lineChartData
    });

    const barChart = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: barchartData
    });

    //populate recent orders
    const orders = [
        {
            { id: '#1234', customer: 'John Doe', product: 'Laptop', amount: '$1200', status: 'completed'},
            { id: '#1235', customer: 'Jane smith', product: 'Phone', amount: '$800', status: 'pending'},
            { id: '#1236', customer: 'Bob wilson', product: 'Tablet', amount: '$400', status: 'processing'}
        };
    ]

    const ordersBody = document.getElementById('orders-body');
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = '
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.product}</td>
        <td>${order.amount}</td>
        s
        '
    })
})