document.addEventListener("DOMContentLoaded", function () {
  // Cargar componentes
  loadComponent("head.html", "head");
  loadComponent("./nav.html", "nav");
  loadComponent("./footer.html", "footer");
  loadComponent("./compartir.html","compartir");

  // Configurar enlace de correo
  const emailLink = document.getElementById('email-link');  
  if (emailLink) {  
      const emailAddress = 'websegura24@gmail.com';  
      emailLink.addEventListener('click', function (event) {  
          event.preventDefault();  
          window.location.href = `mailto:${emailAddress}`;  
      });  
  }  
});

function loadComponent(url, target) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          if (target === "head") {
              document.head.innerHTML += data; // Agrega contenido al <head>
          } else {
              document.getElementById(target).innerHTML = data;
          }
      })
      .catch(error => console.error(`Error al cargar ${url}:`, error))
      .finally(() => {
         
        // Escondemos el loading después de cargar todos los componentes
          const loadingElement = document.getElementById("loading");
          if (loadingElement) {
              loadingElement.classList.add("hidden");
          }
      });
}

