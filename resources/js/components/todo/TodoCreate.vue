<template>
    <form @submit.prevent="saveTodo">
        <p>{{errors}}</p>
        <lable>Title</lable>
        <input type="text" v-model="form.title">
        <lable>Description</lable>
        <textarea cols="30" rows="10" v-model="form.description"></textarea>
        <button type="submit">Save</button>
    </form>
</template>
<script>
import {reactive} from "vue";
import useTodo from "../../composable/todo";

export default {
   setup(){

       const form=reactive({
           title:'',
           description:''
       });
       const {storeTodo,errors}= useTodo();

       const saveTodo=async ()=>{
           await storeTodo(form);
       }


       return {
           form,
           errors,
           saveTodo
       }
   },

}
</script>
