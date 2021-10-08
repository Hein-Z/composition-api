require('./bootstrap');

require('alpinejs');

import router from './router';
import TodoIndex from "./components/todo/TodoIndex";

const {createApp} = require("vue");


createApp({
    components:{
        TodoIndex
    }
}).use(router).mount('#app');
