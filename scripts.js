$(document).ready(function() {

    // Attach a click event listener to the 'Evaluate My Money' button.
    $('#evaluateBtn').on('click', function() {

        // 1. Get the values from all input fields and convert them to numbers.
        const totalAmount = parseFloat($('#totalAmount').val());
        const roomRentPercent = parseFloat($('#roomRentPercent').val());
        const accessoriesPercent = parseFloat($('#accessoriesPercent').val());
        const emergencyPercent = parseFloat($('#emergencyPercent').val());
        const savingPercent = parseFloat($('#savingPercent').val());

        // 2. Check if all inputs are valid numbers.
        if (isNaN(totalAmount) || isNaN(roomRentPercent) || isNaN(accessoriesPercent) || isNaN(emergencyPercent) || isNaN(savingPercent)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        // 3. Calculate the sum of all percentages.
        const totalPercentage = roomRentPercent + accessoriesPercent + emergencyPercent + savingPercent;

        // 4. Validate if the total percentage is exactly 100.
        if (totalPercentage !== 100) {
            // If not 100, show an alert message and stop the function. 
            alert("The sum of the percentages must be exactly 100 to divide the money correctly.");
            return;
        }

        // 5. If validation passes, calculate the amount for each category. 
        const roomRentValue = (totalAmount * roomRentPercent) / 100;
        const accessoriesValue = (totalAmount * accessoriesPercent) / 100;
        const emergencyValue = (totalAmount * emergencyPercent) / 100;
        const savingValue = (totalAmount * savingPercent) / 100;

        // 6. Display the calculated values in their respective output boxes. 
        // The .toFixed(2) method formats the number to two decimal places.
        $('#roomRentResult').text('Rs.' + roomRentValue.toFixed(2));
        $('#accessoriesResult').text('Rs.' + accessoriesValue.toFixed(2));
        $('#emergencyResult').text('Rs.' + emergencyValue.toFixed(2));
        $('#savingResult').text('Rs.' + savingValue.toFixed(2));
    });

});