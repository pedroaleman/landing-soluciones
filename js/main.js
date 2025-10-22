// ==========================
// Main.js - Landing Page
// ==========================

// ✅ Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

(function () {
  // ✅ Inicializa EmailJS (usa tu clave pública)
  emailjs.init({
    publicKey: "75DJtVLfvNtkefBRm",
  });

  // Elementos principales
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");

  // Función auxiliar para mostrar mensajes
  const mostrarAlerta = (mensaje, tipo = "success") => {
    const tipoClase = tipo === "success" ? "alert-success" : "alert-danger";
    alertBox.innerHTML = `<div class="alert ${tipoClase}" role="alert">${mensaje}</div>`;
  };

  // ✅ Envío del formulario
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    // Validación básica
    if (!data.name || !data.email || !data.message) {
      mostrarAlerta("❌ Todos los campos son obligatorios.", "error");
      return;
    }

    try {
      await emailjs.send("service_55ui4ef", "template_spownde", data);
      mostrarAlerta("✅ Mensaje enviado correctamente.");
      form.reset();
    } catch (error) {
      console.error("Error EmailJS:", error);
      mostrarAlerta("❌ Error al enviar el mensaje. Intenta más tarde.", "error");
    }
  });
})();
