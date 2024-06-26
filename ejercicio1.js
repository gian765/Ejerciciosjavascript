function calcular1() {
    // Constantes del DOM
    const inputBase1 = document.getElementById('base1');
    const inputAltura1 = document.getElementById('altura1');
    const spanSup1 = document.getElementById('sup1');
    // Variables de ingreso de datos
    let base1 = parseFloat(inputBase1.value);
    let altura1 = parseFloat(inputAltura1.value);
    // Cálculo de la superficie
    sup1 = base1 * altura1 / 2;
    // Mostrar la superficie
    spanSup1.innerHTML = sup1;
}

function calcular2() {
    // Constantes del DOM
    const inputBase2 = document.getElementById('base2');
    const inputAltura2 = document.getElementById('altura2');
    const spanSup2 = document.getElementById('sup2');
    const spanPer2 = document.getElementById('per2')
    // Variables de ingreso de datos
    let base2 = parseFloat(inputBase2.value);
    let altura2 = parseFloat(inputAltura2.value);
    // Cálculo de la superficie
    sup2 = base2 * altura2 / 2;
    // Mostrar la superficie
    spanSup2.innerHTML = sup2;
    // Cálculo del perimetro
    per2 = (base2 + altura2) * 2;
    // Mostrar el perimetro
    spanPer2.innerHTML = per2;
}

function calcular3() {
    // Constantes del DOM
    const inputRadio3 = document.getElementById('radio3');
    const inputAltura3 = document.getElementById('altura3');
    const spanVol3 = document.getElementById('vol3');
    const spanArea3 = document.getElementById('area3');
    const Pi3 = Math.PI;
    // Variables de ingreso de datos
    let radio3 = parseFloat(inputRadio3.value);
    let altura3 = parseFloat(inputAltura3.value);
    // Cálculo del volumen
    vol3 = Pi3 * (radio3^2) * altura3
    // Mostrar el volumen
    spanVol3.innerHTML = vol3;
    // Cálculo del area
    area3 = 2 * Pi3 * radio3 * altura3;
    // Mostrar el area
    spanArea3.innerHTML = area3;
}

function calcular4() {
    // Constantes del DOM
    const inputPrecio4 = document.getElementById('precio4');
    const inputPago4 = document.getElementById('pago4');
    const spanVuelto4 = document.getElementById('vuelto4');
    // Variables de ingreso de datos
    let precio4 = parseFloat(inputPrecio4.value);
    let pago4 = parseFloat(inputPago4.value);
    // Cálculo del vuelto
    vuelto4 = pago4 - precio4;
    // Mostrar el vuelto
    spanVuelto4.innerHTML = vuelto4;
}

function calcular5() {
    // Constantes del DOM
    const inputDias5 = document.getElementById('dias5');
    const spanSegs5 = document.getElementById('segs5');
    const spanDiasSeg5 = document.getElementById('diasseg5');
    // Variables de ingreso de datos
    let dias5 = parseFloat(inputDias5.value);
    
    // Cálculo de los segundos
    segs5 = dias5 *24*60*60;
    // Mostrar los segundos en un dia
    spanDiasSeg5.innerHTML = dias5;
    spanSegs5.innerHTML = segs5;
}