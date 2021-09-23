
  const paciente1= "lautaro"
  const paciente2= "martina"
  const paciente3= "lisandro"

  let usuario= prompt("Ingresa tu numero de usuario")
  
  if (usuario === paciente1|| usuario === paciente2|| usuario === paciente3){
    console.log(`Bienvenidx ${usuario}, gracias por confiar en nuestro servicio!`)

    let profesional= prompt("Ingrese el nombre de su medico")
    if (profesional == "fournier"){
      console.log(`${usuario}, usted sera llamado por el consultorio 5 con el dr ${profesional}`);
    }else if (profesional == "aimar"){
      console.log(`${usuario}, usted sera llamado por el consultorio 3 con el dr ${profesional}`);
    }else if (profesional == "messi"){
      console.log(`${usuario}, usted sera llamado por el consultorio 1 con el dr ${profesional}`);
    }else{
      console.log(`${usuario}, el profesional ingresado no ejerce en Nutrimaster`)
    }

  }else{
    console.log(`Hola ${usuario}, usted no esta registrado en nuestro sitio`)
  }
  
  //calcular imc
  let peso = parseFloat(prompt("Ingrese su peso en Kilogramos"));
  let estatura = parseFloat(prompt("Ingrese su estatura en metro"));
  let resultado = peso/estatura
  //consola
  console.log (resultado);
  //alert
  alert (`Tu indice de masa corporal es ${resultado} !`);