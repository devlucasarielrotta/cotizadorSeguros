const precioBase = 10000;
const iva = 1.21;
let gastosAdministrativos = 5000;

let numeroSeguro = parseInt(prompt('Debera ingresar su tipo de seguro de automotor:\n1-Básico.\n2-Intermedio.\n3-Completo.'));


while(numeroSeguro !== 1 && numeroSeguro !== 2 && numeroSeguro !== 3){
    alert(`El tipo de seguro ${numeroSeguro || 0} no existe, por favor ingresar una opcion válida`);
    numeroSeguro = parseInt(prompt('Debera ingresar su tipo de seguro de automotor:\n1-Básico.\n2-Intermedio.\n3-Completo.'));
}

let modeloAuto = parseInt(prompt('Por favor ingresa el año de fabricación de tu auto: '))


while(modeloAuto <= 1960 || isNaN(modeloAuto) ){

    alert(`El modelo del auto ${modeloAuto || 0} es muy viejo, ingresa otro modelo`);
    modeloAuto = parseInt(prompt('Por favor ingresa el año de fabricación de tu auto: '));

}

let confirmar = confirm('¿Desea ver el valor de su seguro?');

if (confirmar){ 
    let valorTotal = (precioBase * numeroSeguro + gastosAdministrativos) * iva;
    alert(`El valor de su seguro es: ${valorTotal}`)
    alert(`Muchas gracias, hasta luego`)

}else {
    alert('Hasta luego')
}