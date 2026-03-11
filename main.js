
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
    wrapper.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
    wrapper.textContent = number;
    shadow.appendChild(wrapper);
  }
}

customElements.define('lotto-ball', LottoBall);

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeButtonText(savedTheme);

themeBtn.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButtonText(newTheme);
});

function updateThemeButtonText(theme) {
  themeBtn.textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// Lotto Generation Logic
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
