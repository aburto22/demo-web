 document.querySelector('#app-roman button').addEventListener('click', () => {
  const romanInput = document.querySelector('#app-roman input').value;
  const romanOutput = romanToNum(romanInput);
  document.querySelector('#app-roman .output').innerHTML = `<p>${romanOutput}</p>`;
});

document.querySelector('#app-prime-factors button').addEventListener('click', () => {
  const primeInput = document.querySelector('#app-prime-factors input').value;
  const primeOutput = findPrimeFactors(Number(primeInput));
  document.querySelector('#app-prime-factors .output').innerHTML = `<p>${primeOutput}</p>`;
});

function hideAllDivs() {
  document.querySelector('.main-image').style.display = 'none';
  document.querySelectorAll('.app').forEach(element => element.style.display = 'none');
}

function resetButtonStyle() {
  document.querySelectorAll('.section').forEach(element => element.style.backgroundColor = 'transparent');
}

document.querySelector('#roman').addEventListener('click', () => {
  hideAllDivs();
  resetButtonStyle();
  document.querySelector('#roman').style.backgroundColor = '#f0ad4e';
  document.querySelector('#app-roman').style.display = 'block'; 
});

document.querySelector('#prime').addEventListener('click', () => {
  hideAllDivs()
  resetButtonStyle();
  document.querySelector('#prime').style.backgroundColor = '#f0ad4e';
  document.querySelector('#app-prime-factors').style.display = 'block';
});

document.querySelector('#funny').addEventListener('click', () => {
  hideAllDivs()
  resetButtonStyle();
  document.querySelector('#funny').style.backgroundColor = '#f0ad4e';
  document.querySelector('#funny-section').style.display = 'block';
});

document.querySelector('#hard').addEventListener('click', () => {
  hideAllDivs()
  resetButtonStyle();
  document.querySelector('#hard').style.backgroundColor = '#f0ad4e';
  document.querySelector('#hard-section').style.display = 'block';
});