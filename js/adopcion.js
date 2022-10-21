/*Cuerpo del formulario de adopción*/
function adopcion() {
    var adop = `
    <div class="jsadopcion" style="margin-left: 40px;">
    <h1>Formulario de adopción</h1>
    <h3>Llene los datos siguientes para comenzar el proceso de adopción de su Lombriz de Tierra</h3>
    <form align="left">
        <div class="form-group">
            <label for="exampleInput">Nombre/s</label>
            <input type="text" class="form-control" placeholder="Nombre/s">
        </div>
        <div class="form-group">
            <label for="exampleInput">Apellido/s</label>
            <input type="text" class="form-control" placeholder="Apellido/s">
        </div>
        <div class="form-group">
            <label for="exampleInput">Dirección</label>
            <input type="text" class="form-control" placeholder="Dirección">
        </div>
        
        <div class="form-group">
            <label for="exampleInputEmail1">Su dirección de correo electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="sunombre@gmail.com">
            <small id="emailHelp" class="form-text text-muted">Copmartiremos su correo electrónico con cualquiera</small>
        </div>

        <div class="form-group">
            <label for="paises" class="form-label">País</label>
            <input class="form-control" list="paises" name="pais" id="pais" placeholder="Argentina">
            <datalist id="paises">
                <option value="Argentina">
                <option value="República de Congo">
                <option value="Suiza">
                <option value="Nueva Zelandia">
                <option value="Canadá">
                <option value="Cualquier otro...">
            </datalist>
        </div>

        <div class="form-group">
        <label for="profesiones" class="form-label">Profesión</label>
        <input class="form-control" list="profesiones" name="profesion" id="profesion" placeholder="Desocupado/changas">
            <datalist id="profesiones">
                <option value="Gigoló">
                <option value="Striper">
                <option value="Ama/o de casa">
                <option value="jubilado / Pensionado / Ñoqui">
                <option value="Planero">
                <option value="Cualquier otro...">
            </datalist>
        </div>

        <br>
        <h3>Datos de su tarjeta de crédito/débito</h3>

        <div class="form-group">
            <input class="form-control" list="tarjetas" name="tarjeta" id="tarjeta" placeholder="VISA">
            <datalist id="tarjetas">
                <option value="Visa">
                <option value="Master-Card">
                <option value="American Express">
                <option value="Blokbuster">
                <option value="Mercado Pago">
                <option value="Naranja x">
                <option value="Verde z">
                <option value="Ualá">
                <option value="Dia %">
                <option value="Cualquier otra....">
            </datalist>
        </div>

        <div class="form-group">
            <label for="exampleInput">Nombre que figura en la tarjeta</label>
            <input type="text" class="form-control" placeholder="Nombre y Apellido del titular de la tarjeta">
        </div>
 
        <div class="form-group">
            <label for="exampleInput">Número de tarjeta</label>
            <input type="text" class="form-control" placeholder="Número de tarjeta (sin guiones ni espacios)">
        </div>

        <div class="form-group">
            <label for="exampleInput">Fecha de vencimiento</label>
            <input type="text" class="form-control" placeholder="MM/AAAA">
        </div>

        <div class="form-group">
            <label for="exampleInput">Código de seguridad de la tarjeta</label>
            <input type="text" class="form-control" placeholder="El que figura en el reverso de la tarjeta">
        </div>

        <div class="form-group">
            <label for="exampleInput">¿Cuánto dinero va a transferirnos?</label><br>
            <label class="checkbox-inline">
                <input type="checkbox" id="checkboxEnLinea1" value="opcion_1"> 100 u$s </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="checkboxEnLinea2" value="opcion_2"> 200 u$s </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="checkboxEnLinea3" value="opcion_3"> 300 u$s </label>
            <label class="checkbox-inline">
                <input type="checkbox" id="checkboxEnLinea4" value="opcion_4"> 500 u$s </label>
            <label class="checkbox-inline">
                <input type="checkbox" id="checkboxEnLinea5" value="opcion_5"> 1.000 u$s </label>
            <label class="checkbox-inline">
                <input type="checkbox" id="checkboxEnLinea6" value="opcion_6"> 10.000 u$s </label>
        </div>
        <br>
        
        <br>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Aceptar términos y condiciones</label>
        </div>

        <div id="nombre" style="margin-left: -40px;">
            <p >Puede personalizar el nombre de su lombriz, 
            ingrese el nombre que más le guste:</p>
            <input type="text" v-model="nombre" style="margin-left: 45px;">
            <p>Desde hoy el nuevo nombre que tenrá su lombriz será:
            <b>"{{nombre}}"</b></p>
        </div>

        <button type="button" class="btn btn-primary" onclick="javascript:mensaje();">Enviar solicitud de adpción</button>
    </form>
    </div>
    `;
    document.getElementById("centro").innerHTML = adop;
    //
    // Para cambiar el nombre a la lombriz adoptada
    var fin = `
        const miAplicacion = Vue.createApp({
        data() {
            return { nombre: ""}
        },
        watch: {
            nombre(valor) {
                this.nombre = valor
                },
            }
        }).mount("#nombre")
    `;
    document.getElementById("viu").innerHTML = fin;
};
/*fin cuerpo adopción*/