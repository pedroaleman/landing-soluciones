document.getElementById('year').textContent = new Date().getFullYear();

(function() {
  emailjs.init('75DJtVLfvNtkefBRm'); // ⚠️ reemplázala con tu clave pública

  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    emailjs.send('service_55ui4ef', 'template_spownde', data)
      .then(() => {
        alertBox.innerHTML = '<div class="alert alert-success">✅ Mensaje enviado correctamente.</div>';
        form.reset();
      })
      .catch(() => {
        alertBox.innerHTML = '<div class="alert alert-danger">❌ Error al enviar. Intenta más tarde.</div>';
      });
  });
})();
