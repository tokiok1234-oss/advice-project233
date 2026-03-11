
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

// Form Submission feedback (Optional enhancement)
const inquiryForm = document.getElementById('inquiry-form');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', () => {
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    });
}
