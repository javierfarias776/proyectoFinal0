//solicitamos un valor al usuario
let ingresarNumero =parseInt(prompt("ingresar Numero"));
//en cada repeticion calculamos el numero ingresado x el numero de repeticion(i)
for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + "X" + i + "=" + resultado)
}