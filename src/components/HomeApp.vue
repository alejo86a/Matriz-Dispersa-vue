<template>
<div class="HomeApp">
		<Titulo class="titulo" title="Matrices dispersas"/>
		<Matriz-Input class="input-matriz" title="Matriz" @cambio-matriz="cambioMatriz" v-bind:tripletas="tripletas" />
		<Matriz-Info class="matriz-info" title="Matriz Transpuesta" v-bind:matriz="matrizTranspuesta" v-bind:tripletas="matrizTripletasTranspuesta"/>
		<Matriz-Info class="matriz-info" title="Matriz Inversa" v-bind:matriz="matrizInversa" v-bind:tripletas="matrizTripletasInversa"/>
</div>
</template>

<script>

import Titulo from './Titulo.vue'
import MatrizInfo from './MatrizInfo.vue'
import MatrizInput from './MatrizInput.vue'
import MatrizDispersa from '../services/MatrizDispersa'

export default {
	name: 'Home-App',
	props: {
    },
    components: {
        MatrizInfo,
        MatrizInput,
        Titulo
    },
    data () {
        return {
            tripletas: Number[[]],
            matrizTripletasTranspuesta: Number[[]],
            matrizTripletasInversa: Number[[]],
            matrizTranspuesta: Number[[]],
            matrizInversa: Number[[]]
        }
    },
	methods: {
		cambioMatriz: function(e) {
            this.getMatrizTripletas(e)
            MatrizDispersa.getMatrizEnTripleta(e);
            this.matrizTripletasTranspuesta = e;
            this.matrizTripletasInversa = e;
            this.matrizTranspuesta = e;
            this.matrizInversa = e;

            console.log("en home app cambio la matriz")
            console.log(e)
        },
        getMatrizTripletas: function(matriz) {
            let A = [];
            A.push([matriz.length, matriz[0].length, 1]);
            for (let i = 0; i < matriz.length; i++) {
                for (let j = 0; j < matriz[0].length; j++) {
                    if (matriz[i][j] != 0 && matriz[i][j] != "0") {
                        A[0][2] = A[0][2] + 1;
                        A.push([i, j, matriz[i][j]]);
                    }
                }
            }
            A.push([matriz.length + 1, matriz[0].length + 1, A[0][2] - 1]);
            this.tripletas = A;
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	margin: 0;
    padding: 0;
    border: 0;
}
.titulo{
    width: 100vw;
    height: 17vh;
    background-color: blue;
    float: left;
}
.input-matriz{
    width: 31vw;
    height: 80vh;
    background-color: red;
    margin-left: 1vw;
    /* border-right: solid 9px; */
    float: left;
}
.matriz-info{
    width: 32vw;
    height: 80vh;
    background-color: green;
    border-left: solid 9px;
    float: left;
}
</style>
