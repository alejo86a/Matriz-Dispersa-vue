<template>
  <div class="titulo">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo {
    background: yellow;
    /* height: 150px; */
    /*IMPORTANTE*/
    display: flex;
    justify-content: center;
    align-items: center;
}
h1 {
    font-size: xx-large
}
</style>
