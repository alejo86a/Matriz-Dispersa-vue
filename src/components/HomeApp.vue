<template>
<div class="HomeApp">
		<Titulo class="titulo" title="Matrices dispersas"/>
		<Matriz-Input class="input-matriz" title="Matriz"/>
		<Matriz-Info class="matriz-info" title="Matriz Transpuesta"/>
		<Matriz-Info class="matriz-info" title="Matriz Inversa"/>
</div>
</template>

<script>

import Titulo from './Titulo.vue'
import MatrizInfo from './MatrizInfo.vue'
import MatrizInput from './MatrizInput.vue'

export default {
	name: 'Home-App',
	props: {
    },
    components: {
        MatrizInfo,
        MatrizInput,
        Titulo
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
    width: 32vw;
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
