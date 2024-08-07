const form = document.getElementById('myForm');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const passwordError = document.getElementById('passwordError');   

const cpasswordError = document.getElementById('cpasswordError');   

cpasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== cpasswordInput.value) {
      cpasswordError.textContent = 'Passwords do not match.';
      cpasswordError.style.display = 'block';
    } else {
      cpasswordError.textContent = '';
      cpasswordError.style.display = 'none';
    }
  });
  
  form.addEventListener('submit', (event) => {
    if (passwordInput.value !== cpasswordInput.value) {
      event.preventDefault(); // Prevent form submission
    }
  });
  