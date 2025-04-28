const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Başlangıçta eğer localStorage'da kayıt varsa inputlara doldur
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  if (savedData.email) {
    form.elements.email.value = savedData.email;
  }
  if (savedData.message) {
    form.elements.message.value = savedData.message;
  }
}

// Form inputlarına her yazıldığında localStorage güncelle
form.addEventListener('input', (event) => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Form gönderilince
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Please fill in both fields.');
    return;
  }

  console.log({ email, message });

  // Formu ve LocalStorage'ı temizle
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});