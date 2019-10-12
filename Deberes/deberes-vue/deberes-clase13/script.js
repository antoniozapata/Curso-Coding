Vue.component('task-item', {
    template: `
        <li>
            <span>{{task.id}}</span>
            <p :class="{
                'task-done': task.done
            }">{{ task.name }}</p>
            <input type="checkbox" name="checkbox" v-model="task.done">
            <label for="checkbox">Checked</label>
            <button 
            v-if="task.done"
            @click="$emit('remove', task.id)"
            >remove</button>
            <div v-if="task.done">This task is done</div>
            <div v-else>this task is not done</div>
        </li>
    `,
    props: ["task"]
})

new Vue({
    el: '#app',
    data: {
        newNameTask:"",
        taskList: [
        ]  
    },
    methods:{
        createTask: function(){
           this.taskList.push({
               name: this.newNameTask,
               done: false,
               id: this.taskList.length+1
           });
        },
        removeTask: function(id){
            this.taskList = this.taskList.filter(x => x.id !== id);
        },
        printDate1: function(){
            this.date = new Date();
        }
    },
    computed:{
        printDate2: function(){
            return new Date()
        }
    }
})

//Si la tarea esta hecha mostrar mensaje.
