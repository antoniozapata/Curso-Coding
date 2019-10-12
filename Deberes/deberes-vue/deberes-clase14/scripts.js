Vue.component('sing-up-form', {
    template: `
    <div class="container-form">
        <label for="nombre">First name:*</label>
        <input type="text" name="name" id="name" placeholder="First name" required>
        <label for="nombre">Last name:*</label>
        <input type="text" name="last_name" id="primer_apellido" placeholder="Last name" required>
        <label for="email">Correo Electrónico*</label>
        <input type="email" name="email" id="email" placeholder="email" required>
        <label for="nombre">Edad:*</label>
        <input type="number" name="edad" placeholder="Edad" required>
        <button>Send</button>
    </div>
    `
})

new Vue ({
    el: '#app',
    data: function() {
        return {
         count: 1
      }},
       methods: {
         addOne: function() {
           this.count++;
         }
       },
       template: `
         <div>
           <label>first name {{count}}</label>
           <button @click="addOne">Add one</button>
         </div>
       `,
    }
)