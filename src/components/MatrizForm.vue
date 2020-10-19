<template>
  <div class="Matriz-Form">
        Ingresa los datos de la matriz
        <input v-model="size" type="number">
        <button v-on:click="generarMatriz">Crear Matriz</button>
        <table v-if="verMatrizForm">
            <tr
                v-for="(row,i) in matriz"
                v-bind:key="i">
                <th
                    v-for="(col,j) in row"
                    v-bind:key="j"
                ><input v-model="matriz[i][j]" type="number" v-on:change="enterInput"></th>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
    name: 'Matriz-Form',
    props: {
    },
    data () {
        return {
            matriz:[[1,2,3],[4,5,6],[7,8,9]],
            size: 1,
			verMatrizForm: false,
			inputTemp: ''
        }
    },
  methods: {
	generarMatriz: function() {
		console.log(this.size)
		// this.matriz = Array(parseInt(this.size)).fill(Array(parseInt(this.size)))
		this.matriz = Array(parseInt(this.size)).fill().map(()=>Array(parseInt(this.size)).fill(0))
		console.log(this.matriz)
		this.verMatrizForm = true
		this.$emit('cambio-matriz', this.matriz)
	},
	enterInput: function() {
		this.$emit('cambio-matriz', this.matriz)
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
}

table, th, td {
	border: 1px solid black;
    margin-top: 5vh;
	margin-bottom: 3vh;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
input {
    width: 2vw;
}
</style>
