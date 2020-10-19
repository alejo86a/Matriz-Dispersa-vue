<template>
    <div class="Matriz">
        Matriz en tripletas
        <table>
            <tr
                v-for="(row,i) in matriz"
                v-bind:key="i">
                <th
                    v-for="(col,j) in row"
                    v-bind:key="j"
                >{{matriz[i][j]}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Matriz',
    props: {
		matriz: Number[[]],
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
	border: 1px solid black;
    margin-top: 5vh;
	margin-bottom: 3vh;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
</style>
