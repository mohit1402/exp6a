$(document).ready(function() {
    // Check 1: This message should appear as soon as the page loads.
    console.log("Document is ready. jQuery is working.");

    $('#evaluateBtn').on('click', function() {
        // Check 2: This message should appear every time you click the button.
        console.log("Evaluate button clicked.");

        // Reading input values
        const totalAmountStr = $('#totalAmount').val();
        const roomRentStr = $('#roomRentPercent').val();
        const accessoriesStr = $('#accessoriesPercent').val();
        const emergencyStr = $('#emergencyPercent').val();
        const savingStr = $('#savingPercent').val();
        
        // Check 3: Shows the raw values read from the form.
        console.log("Raw input values:", { totalAmountStr, roomRentStr, accessoriesStr, emergencyStr, savingStr });

        if (!totalAmountStr || !roomRentStr || !accessoriesStr || !emergencyStr || !savingStr) {
            alert("Error: Please make sure all input fields are filled.");
            return;
        }

        // Parsing numbers
        const totalAmount = parseFloat(totalAmountStr);
        const roomRentPercent = parseFloat(roomRentStr);
        const accessoriesPercent = parseFloat(accessoriesStr);
        const emergencyPercent = parseFloat(emergencyStr);
        const savingPercent = parseFloat(savingStr);

        // Check 4: Shows the values after converting them to numbers.
        console.log("Parsed numbers:", { totalAmount, roomRentPercent, accessoriesPercent, emergencyPercent, savingPercent });

        const totalPercentage = roomRentPercent + accessoriesPercent + emergencyPercent + savingPercent;
        console.log("Total Percentage calculated:", totalPercentage);

        if (Math.abs(totalPercentage - 100) > 0.001) {
            alert("Error: The sum of the percentages must be exactly 100. The current sum is " + totalPercentage + "%.");
            return;
        }

        // Check 5: Confirms that validation passed.
        console.log("Validation passed. Starting calculation...");

        // Calculating the final amounts
        const roomRentValue = (totalAmount * roomRentPercent) / 100;
        const accessoriesValue = (totalAmount * accessoriesPercent) / 100;
        const emergencyValue = (totalAmount * emergencyPercent) / 100;
        const savingValue = (totalAmount * savingPercent) / 100;
        
        // Check 6: Shows the final calculated budget values.
        console.log("Calculated values:", { roomRentValue, accessoriesValue, emergencyValue, savingValue });

        $('#roomRentResult').text('Rs.' + roomRentValue.toFixed(2));
        $('#accessoriesResult').text('Rs.' + accessoriesValue.toFixed(2));
        $('#emergencyResult').text('Rs.' + emergencyValue.toFixed(2));
        $('#savingResult').text('Rs.' + savingValue.toFixed(2));
        
        // Check 7: Confirms that the display was updated.
        console.log("Results displayed on the page.");
    });
});
