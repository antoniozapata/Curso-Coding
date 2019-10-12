<template>
    <div class="form">
        <div class="container-campo">
            <label for="nombre">Nombre:*</label>
            <input type="text" name="nombre" v-model="firstName">
            <span></span>
        </div>
        <div class="container-campo">
            <label for="apellido">Primer Apellido:*</label>
            <input type="text" name="primer_apellido">
            <span></span>
        </div>
        <div class="container-campo">
            <label for="edad">Edad:*</label>
            <input type="number" name="edad">
            <span></span>
        </div>
        <div class="container-campo">
            <label for="email">Correo Electrónico:*</label>
            <input type="email" name="email">
            <span></span>
        </div>
        <div>
            <button @click="checkInputs">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormularioValidacion',
  data: () => {
      return {
          firstName:"",


      };
  },
    methods:{
        checkInputs: function() {
            this.firstName
            
        }
  }
}

</script>

<style scoped>
.form {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
};

.container-campo {
    padding: 10px;
    margin: 1px;
};
</style>
