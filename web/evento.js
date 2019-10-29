/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function soloNumeros(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " 0123456789 ";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
            
            
            
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}
function valida(f) {
    var numero_uno = document.getElementById("cambio").value;
    
    var numerino = parseInt(numero_uno);
    if(numerino >  99999999 || numerino < 0){
        alert("numero fuera de los limites");
        return false;
    }

    return true;
        
}
