<template>
	<div class="Matriz-Input">
		<h3 class="item">{{title}}</h3>
		<Matriz-Form class="item"/>
		<Matriz-Tripleta class="item"/>
	</div>
</template>

<script>

import MatrizForm from './MatrizForm.vue'
import MatrizTripleta from './MatrizTripleta.vue'

export default {
	name: 'Matriz-Input',
	props: {
		title: String,
		size: Number,
		matriz: Array,
		verMatrizForm: Boolean
	},
	components: {
		MatrizForm,
		MatrizTripleta
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Matriz-Input{
    justify-content: center;
	align-items: center;
}
.item{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
</style>
