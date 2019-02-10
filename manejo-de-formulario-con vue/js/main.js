// colocarermos una variable led
// esl cual es app y le accionamos el valor
// de un objeto que nos debuelve vue y
// a este nuevo objeto le damos parametro

let app=new Vue({
    // obtenemos el elemto que tenga el id #app que este en algun lugar del DOM
    el:"#app",
    data:{
        nombre:""
    },
     // estos son los metodos que podemos colocar el vue
    filters:{
        mayuscula:function(str){
            return str.toUpperCase()
        }
    },
    methods:{
        agregarArticulo:function(){
            console.log("Hola ya enviaste los datos");
        }
    }
})

// GOOD DATA
/*algo importante es
que lo que hace es que vue ahora ese elembto es reactivo
y que responde a cambios en el estado
de la aplicacion */
// https://www.tutorialesprogramacionya.com/vueya/detalleconcepto.php?punto=8&codigo=8&inicio=0