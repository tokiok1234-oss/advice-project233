
class LottoBall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    const number = this.getAttribute('number');
    const color = this.getAttribute('color');
    wrapper.style.backgroundColor = color;
    wrapper.style.width = '50px';
    wrapper.style.height = '50px';
    wrapper.style.borderRadius = '50%';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';
    wrapper.style.color = 'white';
    wrapper.style.fontSize = '20px';
    wrapper.style.fontWeight = 'bold';
    wrapper.textContent = number;
    shadow.appendChild(wrapper);
  }
}

customElements.define('lotto-ball', LottoBall);


document.getElementById('generate-btn').addEventListener('click', () => {
  const lottoNumbersContainer = document.getElementById('lotto-numbers');
  lottoNumbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3'];

  Array.from(numbers).sort((a, b) => a - b).forEach((number, index) => {
    const lottoBall = document.createElement('lotto-ball');
    lottoBall.setAttribute('number', number);
    lottoBall.setAttribute('color', colors[index]);
    lottoNumbersContainer.appendChild(lottoBall);
  });
});
