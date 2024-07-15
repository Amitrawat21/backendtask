


function isPrime(num) {

 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  

    return true;
  }
  

  const isNinePrime = isPrime(9);
  console.log(isNinePrime ? "9 is prime" : "9 is not prime");



function generatePattern(rows) {
    let pattern = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if (j === 0 || j === rows - i - 1 || i === 0) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }
    
    return pattern;
}

console.log(generatePattern(6));


  