$(document).ready(function(){
    
    
    $("#btnValidar").click('submit', function(e){
        e.preventDefault();

        let nombre = $("#name").val();
        let appaterno = $("#lastname").val();
        let apmaterno = $("#lastname2").val();
        let edad = $("#age").val();
        let rut = $("#rut").val();
        let numeroTelefono = $("#telefono").val();
        console.log(nombre);
        console.log(appaterno);
        console.log(apmaterno);
        console.log(edad);
        console.log(rut);
        console.log(numeroTelefono)
    })
    
    

    /* JQUERY
        selector = puede tomar por ID por Clase por tag 
        evento = click doble click mouse encima tecla focus etc
        funcion = instrucciones de codigo 
        $("Selector").evento(funcion(){
            Lo que quiero que pase 
        })
    */

        /* Para empezar 
            1.- capturar las variables
            2.- comprobar con console.log
            3.- Una vez listos , validar los campos , almenos 1 
            4.- comprobar el si y el no TRUE || False 
            5.- Una vez listo , generamos modulo grafico 
        */
        
})