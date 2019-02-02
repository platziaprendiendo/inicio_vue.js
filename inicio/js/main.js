// colocarermos una variable led
// esl cual es app y le accionamos el valor
// de un objeto que nos debuelve vue y
// a este nuevo objeto le damos parametro

let app=new Vue({
    // obtenemos el elemto que tenga el id #app que este en algun lugar del DOM
    el:"#app",
    data:{
        nombre:"Alvaro",
        url:"www.yarqay.com",
        pagina:"Soy un boton sexi",
        mostrar:true
    }    
})

// GOOD DATA
/*algo importante es
que lo que hace es que vue ahora ese elembto es reactivo
y que responde a cambios en el estado
de la aplicacion */