// colocarermos una variable led
// esl cual es app y le accionamos el valor
// de un objeto que nos debuelve vue y
// a este nuevo objeto le damos parametro

let app=new Vue({
    // obtenemos el elemto que tenga el id #app que este en algun lugar del DOM
    el:"#app",
    data:{
        titulo:"SOY UN TITULO SEXI",
        subtitulo:"SOY UN SUBTITULO NO TAN SEXI",
        texto:"soy un texto sexi"
    },
    // estamos agregando los filtros
    filters:{
        //esta funcion resive un str que es el titulo
        uppercase:function(str){
            return str.toUpperCase()
        },
        lowercase:function(str){
            return str.toLowerCase()
        }
    }
})

// GOOD DATA
/*algo importante es
que lo que hace es que vue ahora ese elembto es reactivo
y que responde a cambios en el estado
de la aplicacion */