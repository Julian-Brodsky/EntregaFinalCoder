//----------------------------------- Pagina Login ------------------------------------------------

const validarDatos = function () {
    let inputEmailLogin = document.querySelector("#input_email-login").value;
    let inputPasswordLogin = document.querySelector("#input_password-login").value;
  
    usuarios = JSON.parse(localStorage.usuarios);
  
  
    function validar_email(usuario) {
      return usuario.email === inputEmailLogin;
    }
  
    function validar_password(usuario) {
      return usuario.pass === inputPasswordLogin;
    }
  
    if (usuarios.find(validar_email)) {
  
      if (usuarios.find(validar_password)) {
  
        let result = usuarios.filter(obj => {
          return obj.email === inputEmailLogin //filtra en base a los usuarios que ya tengo. Encuentra obj cuyo email === input. Devuelve usuario completo
        });
  
  
        localStorage.setItem("usuarioLogueado", JSON.stringify(result[0].username)); //resultado unico
  
  
        location.replace("./pages/movimiento.html");
  
      } else {
        // Mostrar el popup con el mensaje de error
      let popup = document.getElementById("popup");
      let popupMessage = document.getElementById("popup-message");
      popupMessage.innerText = "Email o contraseña incorrecto";
      popup.style.display = "block";
    }

  } else {
    // Mostrar el popup con el mensaje de error
    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popup-message");
    popupMessage.innerText = "Email o contraseña incorrecto";
    popup.style.display = "block";
  }
};

function cerrarPopup() {
  // Cerrar el popup
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}


  if (document.getElementById("formularioDelIndex") != null) {
    document.querySelector("#formularioDelIndex").addEventListener("submit", function (e) {
      e.preventDefault();
      validarDatos();
    });
  }
  
  // -----------------------------------------------------------------------------------------------------