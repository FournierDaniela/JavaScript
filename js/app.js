const paciente1= "lautaro"
const paciente2= "martina"
const paciente3= "lisandro"

const usuario= prompt("Ingresa tu nombre de usuario");

switch(usuario){
        case paciente1:
                alert(`hola ${usuario} bienvenidx a Nutrimaster, tu profesional asignado es Messi.`)
                let dia= prompt("escoja la fecha")
                let hora= prompt ("indique el horario solicitado")
                alert(`${usuario} su turno es el dia ${dia} a las ${hora}hs`)
                break
        case paciente2:
               alert(`hola ${usuario} bienvenidx a Nutrimaster, tu profesional asignado es Montiel.`)
               let dia1= prompt("escoja la fecha")
               let hora1= prompt ("indique el horario solicitado")
               alert(`${usuario} su turno es el dia ${dia1} a las ${hora1}hs`)
               break 
        case paciente3:
               alert(`hola ${usuario} bienvenidx a Nutrimaster, tu profesional asignado es Aimar.`)
               let dia2= prompt("escoja la fecha")
               let hora2= prompt ("indique el horario solicitado")
               alert(`${usuario} su turno es el dia ${dia2} a las ${hora2}hs`)
               break       
        default:
                alert(`${usuario}, usted no esta registradx en nuestra institucion.`);
                break

}
