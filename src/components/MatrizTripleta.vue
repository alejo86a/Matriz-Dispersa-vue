<template>
    <div class="Matriz-Tripleta">
        Matriz en tripletas
        <table>
            <tr
                v-for="(row,i) in tripletas"
                v-bind:key="i">
                <th
                    v-for="(col,j) in row"
                    v-bind:key="j"
                >{{tripletas[i][j]}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Matriz-Tripleta',
    props: {
		tripletas: Number[[]]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
	border: 1px solid black;
    margin-top: 5vh;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
</style>
