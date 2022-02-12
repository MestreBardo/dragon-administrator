<template>
  <div class="mapper-container">
    <div v-for="caminho in caminhos" :key="caminho.id">
        <router-link :to="caminho.navegacao">
            <span class="mapper-container__link">{{caminho.valor}}</span> 
        </router-link>
        <span class="mapper-container__separatorrun serve" v-if="verificarSequenciaCaminho(caminho.id)" style="color:white">></span>
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            caminhos: [],
        }
    },
    methods: {
        gerarCaminhoRota(caminhos, id) {
            const caminhosAceitos = caminhos.filter((caminho, index) => index <= id);
            const linkRetorno = caminhosAceitos.reduce((caminhoJaGerado, caminho ) => caminhoJaGerado += `/${caminho}`, "");
            return linkRetorno;
        }
    },
    computed: {
        verificarSequenciaCaminho() {
            return (id) => {
                return !(this.caminhos.length - 1 === id); 
            }
        } 
    },
    watch: {
        $route(value) {
            console.log(value);
            const caminhosDaRota = value.fullPath
                .split('/')
                .filter(
                    caminho => caminho !== ''
                );
            
            this.caminhos = caminhosDaRota
                .map(
                    (caminho, id) => {
                        return {
                            id,
                            valor: caminho,
                            navegacao: this.gerarCaminhoRota(caminhosDaRota, id)
                        }
                    }
                );

        }
    },
}
</script>

<style>
    .mapper-container {
        display: flex;
        align-items: center;
        padding: .2rem .3rem;
        background-color: #131615;
    }
    .mapper-container__link {
        color: #fffba3;
        font-family: 'Saira Condensed', sans-serif;
        padding: 0 .2rem;
    }

    .mapper-container__separator {
        color: #fffba3;
        font-family: 'Saira Condensed', sans-serif;
        padding: 0 .4rem;
    }
</style>