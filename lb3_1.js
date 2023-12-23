function checkSequence(N, numbers) {
    let index = 0;
    
    for(let i = 1; i < N; i++) {
      if(numbers[i] >= numbers[i-1]) {
        index = i;
        break;
      }
    }
    
    return index;
  }
  
  // Пример использования функции
  let N = 5;
  let numbers = [5.2, 4.8, 3.6, 2.9, 2.7];
  
  let result = checkSequence(N, numbers);
  
  if(result === 0) {
    console.log("Последовательность убывающая");
  } else {
    console.log("Первое нарушение закономерности на позиции " + result);
  }
  