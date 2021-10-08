import {ref} from "vue";
import {useRouter} from "vue-router";

export default function useTodo() {
    const todos = ref([]);
    const todo = ref({});
    const errors = ref('');
    const router = useRouter();

    const getTodos = async () => {
        let response = await axios.get('/api/todo');
        todos.value = response.data.data;
    }
    const getTodo = async (id) => {
        let response = await axios.get('/api/todo/' + id);
        todo.value = response.data.data;


    }
    const updateTodo = async (id) => {
        try {
            let response = await axios.put('/api/todo/' + id,todo.value);
            await router.push({name: 'todo.index'});
        } catch (e) {
            if (e.response.status = 422) {
                for (const key in e.response.data.errors)
                    errors.value = e.response.data.errors[key][0] + ' ';

            }
        }
    }

    const destroyTodo = async (id) => {
        if (!window.confirm('Are you sure!'))
            return
        let response = await axios.delete('api/todo/' + id);
    }

    const storeTodo = async (data) => {
        errors.value = '';
        try {
            await axios.post('/api/todo/', data);
            await router.push({name: 'todo.index'});
        } catch (e) {
            if (e.response.status = 422) {
                for (const key in e.response.data.errors)
                    errors.value = e.response.data.errors[key][0] + ' ';

            }
        }

    }
    return {
        todos,
        getTodos,
        todo,
        destroyTodo,
        storeTodo,
        getTodo,
        updateTodo,
        errors
    }
}
