const form = document.getElementById('myForm');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const passwordError = document.getElementById('passwordError');   

const cpasswordError = document.getElementById('cpasswordError');   


// Define your desired password pattern
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password, errorSpan) {
  if (!passwordPattern.test(password)) {
    errorSpan.textContent = 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.';   

    errorSpan.style.display = 'block';
    return false;
  } else {
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
    return true;
  }
}

passwordInput.addEventListener('input', () => {
  validatePassword(passwordInput.value, passwordError);
});

cpasswordInput.addEventListener('input', () => {
  if (passwordInput.value !== cpasswordInput.value) {
    cpasswordError.textContent   
 = 'Passwords do not match.';
    cpasswordError.style.display   
 = 'block';
  } else {
    cpasswordError.textContent = '';
    cpasswordError.style.display = 'none';
  }
});

form.addEventListener('button', (event) => {
  if (passwordInput.value !== cpasswordInput.value) {
    event.preventDefault(); // Prevent form submission
  }
});



