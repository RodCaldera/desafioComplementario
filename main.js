let nombre=prompt("Ingresa tu nombre)")
const curso= "Francés"
let cuenta=10
if (cuenta>=0) {
    do{
        alert("Cuidado, " + nombre + "!" + " Quedan " + cuenta + " segundos para terminar tu examen de " + curso + ".");
        cuenta--;
    } while(cuenta>0)
}
    if (cuenta==0) {
    alert("Gracias, " + nombre + ". El tiempo para realizar tu examen de " + curso + " se agotó.")
} 