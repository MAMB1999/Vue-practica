const variable = new Vue({
    el: "#contenedor",
    data: {
        nombre: "Moises",
        comida: "Pizaaaaa",
        htmlcontent: "<h3>Holamundo</h3>",
        img1: "/img/lily.jpg"
    }
});
//Prueba componente
Vue.component("pruebacomponente", {
    template: "<p>Holiwi</p>"
});   //template2
const tem = new Vue({
    el: "#c1"

});    //template1
const tem1 = new Vue({
    el: "#c2"
});
//Prueba componentes funciones:

Vue.component("pruebacomponentefuncion", {
    template: "<h2 v-on:mouseover='cambiarnombre()' v-on:mouseout='originalnombre()'>Algoritmo hecho por:<span id='name'>{{name}}</span></h2>",
    data: function () {
        return {
            name: "Moises"
        }
    },
    methods: {
        cambiarnombre: function () {
            this.name = "Alejandro";
        },
        originalnombre: function () {
            this.name = "Edd";
        }
    }
})
const comp = new Vue({
    el: "#comFun"
});
const comp1 = new Vue({
    el: "conFum2"
});
//prueba componentes dinamicos:
const componenteDin = new Vue({
    el:"#comDi",
    data:{
        title:"componente1"
    },
    components:{
        componente1:{
            template:"<p>Hola,soy un componente dinamico</p>"
        }
    }
});

//Prueba propiedades computadas
const computada = new Vue({
    el:"#propiedadComputada",
    data:{
        firstname:"",
        lastname:""
    },
    computed:{
        computadaFun:function(){
            return this.firstname +" "+ this.lastname;
        }
    }
});