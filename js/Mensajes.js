document.addEventListener('DOMContentLoaded', function() {
    var messages = {
        'index.html': 'message1',  
        'Malware.html': 'message2',
        'Phishing.html': 'message3',
    };
  
    var currentPage = window.location.pathname.split('/').pop();
    var messageId = messages[currentPage];
  
    if (messageId) {
        var message = document.getElementById(messageId);
        if (message) {
            var toast = new bootstrap.Toast(message);  // Inicializa el Toast de Bootstrap
            toast.show();  // Muestra el Toast
            setTimeout(function() {
                toast.hide();  // Oculta el Toast después de 8 segundos
            }, 8000);
        }
    }
  });
  
