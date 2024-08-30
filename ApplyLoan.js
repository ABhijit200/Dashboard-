document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loanType = document.getElementById('loan-type').value;
    const requiredDate = document.getElementById('required-date').value;
    const loanAmount = document.getElementById('loan-amount').value;
    const installment = document.getElementById('installment').value;
    const remarks = document.getElementById('remarks').value;

    if (loanType && requiredDate && loanAmount && installment) {
        const loanDescription = `Loan Type: ${loanType}, Required Date: ${requiredDate}, Amount: ${loanAmount}, Installment: ${installment}, Remarks: ${remarks}`;
        const status = 'Pending'; // You can dynamically update this based on real status

        const tableBody = document.getElementById('loanTableBody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${loanDescription}</td><td>${status}</td>`;
        tableBody.appendChild(newRow);

        // Clear form fields
        document.getElementById('loanForm').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});


