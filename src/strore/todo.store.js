import { Todo } from "../todos/models/todo.models";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filters: Filters.All,

}

const initStore = () =>{
    console.log(state);
    console.log('InitStore ');
}

export default {
    initStore,

}