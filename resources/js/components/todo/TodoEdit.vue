<template>
    <form @submit.prevent="saveTodo">
        <p>{{ errors }}</p>
        <lable>Title</lable>
        <input type="text" v-model="todo.title">
        <lable>Description</lable>
        <textarea cols="30" rows="10" v-model="todo.description"></textarea>
        <button type="submit">Save</button>
    </form>
</template>
<script>
import {onMounted, reactive} from "vue";
import useTodo from "../../composable/todo";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    }, setup(props) {

        const {getTodo, todo,updateTodo,errors} = useTodo();

        const saveTodo = async () => {
            await updateTodo(props.id);
        }

        onMounted(getTodo(props.id));


        return {
            todo,
            errors,
            saveTodo
        }
    }
    ,

}
</script>
