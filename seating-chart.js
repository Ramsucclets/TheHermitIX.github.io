function loadData() {
    fetch('https://api.sheety.co/4161650c9e791fb7f0a199de24f748c3/dramaBi/sheet1')
        .then(response => response.json())
        .then(data => {
            renderSeats(data);
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
}

function renderSeats(data) {
    // Clear the seating chart
    document.getElementById('seating-chart').innerHTML = '';

    // Create a new table element
    var table = document.createElement('table');

    // Iterate over the data and create a new row for each seat
    data.forEach(function (seat) {
        var row = document.createElement('tr');
        var seatNumber = seat['Seat Number'];
        var status = seat['Status'];

        // Create a new cell for the seat number
        var seatNumberCell = document.createElement('td');
        seatNumberCell.textContent = seatNumber;
        row.appendChild(seatNumberCell);

        // Create a new cell for the seat status
        var statusCell = document.createElement('td');
        statusCell.className = status.toLowerCase();
        if (status.toLowerCase() === 'available') {
            statusCell.textContent = '';
            statusCell.className += ' available';
            statusCell.addEventListener('click', function () {
                if (this.className.indexOf('selected') === -1) {
                    this.className += ' selected';
                } else {
                    this.className = this.className.replace(' selected', '');
                }
            });
        } else {
            statusCell.textContent = 'X';
            statusCell.className += ' blocked';
            statusCell.title = 'This seat is not available for selection';
        }
        row.appendChild(statusCell);

        // Add the row to the table
        table.appendChild(row);
    });

    // Add the table to the seating chart div
    document.getElementById('seating-chart').appendChild(table);
}

loadData();
  