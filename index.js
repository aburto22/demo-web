document.querySelector('#app-roman button').addEventListener('click', () => {
  const romanInput = document.querySelector('#app-roman input').value;
  const romanOutput = romanToNum(romanInput);
  document.querySelector('#app-roman .output').innerHTML = `<p>${romanOutput}</p>`;
})

document.querySelector('#app-prime-factors button').addEventListener('click', () => {
    const primeInput = document.querySelector('#app-prime-factors input').value;
    const primeOutput = findPrimeFactors(Number(primeInput));
    document.querySelector('#app-prime-factors .output').innerHTML = `<p>${primeOutput}</p>`;
  })
