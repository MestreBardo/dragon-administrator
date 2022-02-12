<template>
    <div class="cabecalho">
        <h1 class="cabecalho__titulo">{{titulo}}</h1>
    </div>
   
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
.cabecalho {
    background-color: #3a5953;
    background-image: url('../assets/images/TheHeaderBackground.png');
    border-bottom: 1px solid #3a5953;
    padding: 0.5rem 0.5rem;
    z-index: 2;
}
.cabecalho__titulo {
    font-family: 'inquisition';
    color: 	#afd8b5;
    margin: 0;
    z-index: 2;
}
</style>