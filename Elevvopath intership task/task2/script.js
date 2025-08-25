const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.textContent = '');

  let isValid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Name validation
  if (name === '') {
    showError('name', 'Full Name is required');
    isValid = false;
  }

  // Email validation
  if (email === '') {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email');
    isValid = false;
  }

  // Subject validation
  if (subject === '') {
    showError('subject', 'Subject is required');
    isValid = false;
  }

  // Message validation
  if (message === '') {
    showError('message', 'Message is required');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = field.nextElementSibling;
  errorElement.textContent = message;
}

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
