/*Cuerpo de Nosotros*/
function nosotros() {
    var nos = `
    <h1>Desarrolladores de este sitio</h1>
    <h2>Con conocimientos adquiridos en el curso CODO A CODO</h2>
    <br>

    <div class="jsnosotros">
        <ul style="list-style: none">
            <li>
                <img src="../img/Damian.jpg">
                <img src="../img/yo.png">
            </li>
        </ul>
    </div>
    <div class="jsnosotros">
    <table>
        <thead>
            <tr>
                <th>Damián Maretto</th>
                <th>Roberto Benavente</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Quien es y que hace Damian &nbsp;&nbsp;&nbsp;</td>
                <td>Quien es y que hace Roberto </td>
            </tr>
        </tbody>
    </table>    
    </div>
    `;
    document.getElementById("centro").innerHTML = nos;
};
/*fin cuerpo Nosotros*/