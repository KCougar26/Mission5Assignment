$(document).ready(function () {
    $("#btnCalc").click(function () {
        // 1. Get the input value
        let hours = $("#hoursInput").val();
        let hourlyRate = $("#rate").val();

        // 2. Validation: Ensure it's a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid number of hours greater than 0.");
            $("#hoursInput").val(""); // Clear the box
            return;
        }

        // 3. Calculation
        let total = hours * hourlyRate;

        // 4. Output the result formatted as currency
        $("#totalOutput").val("$" + total.toFixed(2));
    });
});