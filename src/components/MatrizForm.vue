<template>
  <div class="Matriz-Form">
        Ingresa los datos de la matriz
        <input v-model="size" type="number">
        <button v-on:click="generarMatriz">Mensaje invertido</button>
        <table v-if="verMatrizForm">
            <tr
                v-for="(row,i) in matriz"
                v-bind:key="i">
                <th
                    v-for="(col,j) in row"
                    v-bind:key="j"
                ><input v-model="matriz[i][j]"></th>
            </tr>
        </table>
  </div>
</template>

<script>
import MatrizDispersa from '../services/MatrizDispersa'
export default {
    name: 'Matriz-Form',
    props: {
    },
    data () {
        return {
            matriz:[[1,2,3],[4,5,6],[7,8,9]],
            size: 1,
            verMatrizForm: true
        }
    },
  methods: {
      generarMatriz: function() {
          console.log(this.size)
          MatrizDispersa.getMatriz();
            this.matriz = Array(this.size).fill(Array(this.size))
            this.verMatrizForm = true
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
}
input {
    width: 2vw;
}
</style>
