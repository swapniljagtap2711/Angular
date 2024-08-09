function halfFaultyCalculator() {
    while (true) {
        // Take user input
        let operation = prompt("Enter operation (or type 'quit' to exit):");

        // Exit condition
        // if (operation.toLowerCase() === 'quit') {
        //     break;
        // }

        // Split the operation into parts
        let parts = operation.split(' ');
        if (parts.length !== 3) {
            alert("Invalid input. Please enter in the format: number operator number (e.g., 45 * 3)");
            continue;
        }

        let num1 = parseFloat(parts[0]);
        let operator = parts[1];
        let num2 = parseFloat(parts[2]);

        let result;

        // Implement faulty cases using if-else
        if (operation === "45 * 3") {
            result = 555;
        } else if (operation === "56 + 9") {
            result = 77;
        } else if (operation === "56 / 6") {
            result = 4;
        } else {
            // Standard calculator operations with if-else
            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                if (num2 === 0) {
                    result = "Error: Division by zero!";
                } else {
                    result = num1 / num2;
                }
            } else {
                result = "Invalid operator! Use one of +, -, *, /.";
            }
        }

        // Display the result
        alert(`The result is: ${result}`);
    }
}

// Run the calculator
halfFaultyCalculator();
