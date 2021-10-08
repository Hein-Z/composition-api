<template>
    <table class=" border-collapse border border-green-800">
        <router-link :to="{name:'todo.create'}"><button class="text-green-900">Create</button></router-link>
        <thead>
        <tr>
            <th class="border border-green-600">Title</th>
            <th class="border border-green-600">Description</th>
            <th class="border border-green-600">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in todos" :key="todos.id">
            <td class="border border-green-600">{{ item.title }}</td>
            <td class="border border-green-600">{{ item.description }}</td>
            <td class="border border-green-600">
<!--                <button class="p-3 py-1 bg-green-400 rounded"> Show</button>-->

                <router-link :to="{name:'todo.edit',params:{id:item.id}}">
                    <button class="p-3 py-1 bg-blue-400 rounded mx-1"> Edit</button>

                </router-link>
                <button class="p-3 py-1 bg-red-400 rounded" @click="deleteTodo(item.id)"> Delete</button>

            </td>
        </tr>

        </tbody>
    </table>
</template>
<script>
import useTodo from "../../composable/todo";
import {onMounted} from "vue";


export default {
    setup() {

        const {todos, getTodos, destroyTodo} = useTodo();
        onMounted(getTodos);
        const deleteTodo = async (id) => {
            await destroyTodo(id);
            await getTodos();
        }
        return {
            todos,
            deleteTodo
        }
    }
}
</script>

