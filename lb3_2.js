function calculateExpression(x, N) {
    let result = 1; // начальное значение выражения
    let term = 1; // значение очередного слагаемого
  
    for (let i = 1; i <= N; i++) {
      term *= (-1) * x * x / ((2 * i) * (2 * i - 1)); // вычисляем каждое слагаемое
      result += term; // прибавляем слагаемое к результату
    }
  
    return result;
  }
  
  // Пример использования
  console.log(calculateExpression(2, 5)); // выводит значение выражения при x = 2 и N = 5
  