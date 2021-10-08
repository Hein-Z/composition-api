import {createRouter, createWebHistory} from "vue-router";
import TodoIndex from "../components/todo/TodoIndex.vue";
import TodoCreate from "../components/todo/TodoCreate";
import TodoEdit from "../components/todo/TodoEdit";

const routes = [
    {
        path: '/dashboard',
        name: 'todo.index',
        component: TodoIndex
    },
    {
        path: '/todo/create',
        name:'todo.create',
        component: TodoCreate
    },
    {
        path: '/todo/:id/edit',
        name:'todo.edit',
        component: TodoEdit,
        props:true
    }
];

export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
);
