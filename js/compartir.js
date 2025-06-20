
  // compartir.js
// Este script genera automáticamente los enlaces de redes sociales para compartir
// la URL actual de la página y el título, sin necesidad de escribirlos manualmente.
setTimeout(() => {
// Esperamos que todo el contenido del DOM esté cargado

  // Captura la URL actual de la página
  const currentURL = window.location.href;

  // Captura el título de la página o usa uno por defecto
  const pageTitle = document.title || "Visitá Web Segura";

  // Recorremos todos los botones con el atributo personalizado data-share
  document.querySelectorAll("[data-share]").forEach(function (btn) {
    // Obtenemos el valor del atributo (facebook, x, whatsapp, telegram)
    const type = btn.getAttribute("data-share");
    let shareURL = "#";

    // Dependiendo del tipo, generamos el enlace correcto
    switch (type) {
      case "facebook":
        shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentURL);
        break;
      case "x":
        shareURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(pageTitle + " " + currentURL);
        break;
      case "whatsapp":
        shareURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(pageTitle + " " + currentURL);
        break;
      case "telegram":
        shareURL = "https://t.me/share/url?url=" + encodeURIComponent(currentURL) +
                    "&text=" + encodeURIComponent(pageTitle);
        break;
    }

    // Asignamos dinámicamente el enlace al botón correspondiente
    btn.setAttribute("href", shareURL);
  });
},300);

