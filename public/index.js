document.querySelector('#app-roman button').addEventListener('click', async () => {
  const romanInput = document.querySelector('#app-roman input').value;
  const res = await fetch('/api/roman', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: romanInput }),
  });
  const json = await res.json();
  document.querySelector('#app-roman .output').innerHTML = `<p>${json.result}</p>`;
});

document.querySelector('#app-prime-factors button').addEventListener('click', async () => {
  const primeInput = document.querySelector('#app-prime-factors input').value;
  const res = await fetch('/api/primes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: primeInput }),
  });
  const json = await res.json();
  document.querySelector('#app-prime-factors .output').innerHTML = `<p>${json.result}</p>`;
});

function hideAllDivs() {
  document.querySelector('.main-image').style.display = 'none';
  document.querySelectorAll('.app').forEach((element) => {
    const myElement = element;
    myElement.style.display = 'none';
  });
}

function resetButtonStyle() {
  document.querySelectorAll('.section').forEach((element) => {
    const myElement = element;
    myElement.style.backgroundColor = 'transparent';
  });
}

document.querySelector('#roman').addEventListener('click', () => {
  hideAllDivs();
  resetButtonStyle();
  document.querySelector('#roman').style.backgroundColor = '#f0ad4e';
  document.querySelector('#app-roman').style.display = 'block';
});

document.querySelector('#prime').addEventListener('click', () => {
  hideAllDivs();
  resetButtonStyle();
  document.querySelector('#prime').style.backgroundColor = '#f0ad4e';
  document.querySelector('#app-prime-factors').style.display = 'block';
});

document.querySelector('#funny').addEventListener('click', () => {
  hideAllDivs();
  resetButtonStyle();
  document.querySelector('#funny').style.backgroundColor = '#f0ad4e';
  document.querySelector('#funny-section').style.display = 'block';
});

document.querySelector('#hard').addEventListener('click', () => {
  hideAllDivs();
  resetButtonStyle();
  document.querySelector('#hard').style.backgroundColor = '#f0ad4e';
  document.querySelector('#hard-section').style.display = 'block';
});
