// Función para alternar la visibilidad de los tips
function toggleTips(button) {
  const tipsContainer = button.nextElementSibling;

  if (!tipsContainer.querySelector('.close-btn')) {
      const closeButton = document.createElement('span');
      closeButton.innerHTML = '&times;'; // "×"
      closeButton.className = 'close-btn';
      closeButton.style.cursor = 'pointer';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '1px';
      closeButton.style.right = '5px';
      closeButton.onclick = function() {
          tipsContainer.style.display = 'none';
      };
      tipsContainer.appendChild(closeButton);
  }

  if (tipsContainer.style.display === "none" || tipsContainer.style.display === "") {
      tipsContainer.style.display = "block";
  } else {
      tipsContainer.style.display = "none";
  }
}

// Función para botón más información
function toggleExtraContent(id) {
  var content = document.getElementById(id);

  if (!content.querySelector('.close-btn')) {
      const closeButton = document.createElement('span');
      closeButton.innerHTML = '&times;'; //  "×"
      closeButton.className = 'close-btn';
      closeButton.style.cursor = 'pointer';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.onclick = function() {
          content.style.display = 'none';
      };
      content.appendChild(closeButton);
  }

  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

     
