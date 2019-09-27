Vue.component('task-item', {
    template: `
        <li>
            <h6>Task number {{ index }}</h6>
            <p :class="{
                'task-done': task.done
            }">{{ task.name }}</p>
            <input type="checkbox" name="checkbox" v-model="task.done">
            <label for="checkbox">Checked</label>
            <div v-if="task.done">This task is done</div>
            <div v-else>this task is not done</div>
        </li>
    `
})

/* new Vue ({
    el: '#app',
    data: {
        isChecked: false
    }
}) */

/* new Vue ({
    el: '#app',
    data: {
        message: 'My Message'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
}) */


new Vue({
    el: '#app',
    data: {
        taskList: [
            {
                name: 'First task',
                done: false
            },
            {
                name: 'Second task',
                done: false
            },
            {
                name: 'Third task',
                done: false
            },
            {
                name: 'Fourth task',
                done: false
            }
        ]  
    }
})

//Si la tarea esta hecha mostrar mensaje.
