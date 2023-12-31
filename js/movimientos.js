//-------------------------------------Pagina Movimientos --------------------------------------------

class Movimiento {
    constructor(tipo, concepto, fecha, monto, id) {
        this.tipo = tipo;
        this.concepto = concepto;
        this.fecha = fecha;
        this.monto = monto;
        this.id = id;
    }
}

let movimientos = [];

const agregarMovimiento = function () {
    let inputTipo = document.querySelector("#input_tipo").value;
    let inputConcepto = document.querySelector("#input_concepto").value;
    let inputFecha = document.querySelector("#input_fecha").value;
    let inputMonto = document.querySelector("#input_monto").value;


    if (localStorage.movimientos != null) {
        movimientos = JSON.parse(localStorage.movimientos);
    }

    let idCard = new Date().getTime();

    let cuenta = {
        tipo: inputTipo,
        concepto: inputConcepto,
        fecha: inputFecha,
        monto: inputMonto,
        id: idCard
    };

    if (inputConcepto == "" || inputFecha == "" || inputMonto == "") {


        let popup = document.getElementById("popup");
        popup.style.display = "block"

    } else {

        movimientos.push(cuenta);

        localStorage.setItem("movimientos", JSON.stringify(movimientos));

        location.replace("./home.html");
    };

};

// Función para cerrar el popup
function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

//------------------------------------------------------------------------------------------------------
if (document.getElementById("formularioMovimiento") != null) {
    document.querySelector("#formularioMovimiento").addEventListener("submit", function (e) {
        e.preventDefault();
        agregarMovimiento();
    });
}

// ---------------------------------------------------------------------------------------------------

let botonVolver = document.querySelector('#button_volver').addEventListener('click', volverHome);

function volverHome(e) {

    console.log(e);

    location.replace("./home.html");

};

// -----------------------------------------------------------------------------------------------------