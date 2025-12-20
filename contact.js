(function () {
  emailjs.init("zN5poxSAc6404Q5HP");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  if (!form) {
    console.error("Formulario no encontrado");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('input[type="submit"]');
    const originalBtnText = submitBtn.value;
    submitBtn.value = "Enviando...";
    submitBtn.disabled = true;

    emailjs.sendForm(
      "service_bnvn7b9",
      "template_wif78ek",
      this
    )
    .then(() => {
      alert("Mensaje enviado correctamente!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Error al enviar el mensaje. Revisa la consola para más detalles (F12). Posible error de configuración de EmailJS.");
    })
    .finally(() => {
        submitBtn.value = originalBtnText;
        submitBtn.disabled = false;
    });
  });
});
