<template>
    <div class="Matriz-Info">
		<h3 class="item">{{title}}</h3>
        <Matriz class="item"/>
        <Matriz-Tripleta class="item"/>
    </div>
</template>

<script>

import Matriz from './Matriz.vue'
import MatrizTripleta from './MatrizTripleta.vue'

export default {
    name: 'Matriz-Info',
    props: {
        title: String
    },
    components:{
        Matriz,
        MatrizTripleta
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Matriz-Info{
    justify-content: center;
	align-items: center;
}
.item{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
</style>
