// colocarermos una variable led
// esl cual es app y le accionamos el valor
// de un objeto que nos debuelve vue y
// a este nuevo objeto le damos parametro

let app=new Vue({
    // obtenemos el elemto que tenga el id #app que este en algun lugar del DOM
    el:"#app",
    data:{
        contador:0
    },
    // estos son los metodos que podemos colocar el vue
    methods: {
        sumar: function(){
            this.contador++
        },
        restar:function(){
            this.contador--
        }
        
    }
})

// GOOD DATA
/*algo importante es
que lo que hace es que vue ahora ese elembto es reactivo
y que responde a cambios en el estado
de la aplicacion */