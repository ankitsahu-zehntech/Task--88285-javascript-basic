function basicCalculator(previousInput, currentInput, operator) {
    let result;
  
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
  
    if (isNaN(prev) || isNaN(curr)) {
      console.log('Error: Invalid input');
      return;
    }
  
    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        if (curr === 0) {
          console.log('Error: Division by zero');
          return;
        }
        result = prev / curr;
        break;
      case '%':
        result = prev * (curr / 100);
        break;
      default:
        console.log('Error: Invalid operator');
        return;
    }
  
    console.log(`Result: ${result}`);
    return result;
  }
  
  basicCalculator(200, 10, '+');  // Output: 210
  basicCalculator(200, 10, '-');  // Output: 190
  basicCalculator(200, 10, '*');  // Output: 2000
  basicCalculator(200, 10, '/');  // Output: 20
  basicCalculator(200, 10, '%');  // Output: 20 
  