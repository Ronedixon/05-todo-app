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
        new Todo('Piedra del mar'),
        new Todo('Piedra del agua'),
    ],
    filters: Filters.All,

}

const initStore = () =>{
    console.log(state);
    console.log('InitStore ');
}

const loadStores = ( )=>{
    throw new Error (' Not implemented');
}

const getTodos = ( filter = Filters.All)=>{
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todos => todos.done );

        case Filters.pending:
            return state.todos.filter( todos => !todos.done );
        
            default:
                throw new Error (`Option ${ filter } is not valid.`);
    
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) =>{
    if ( !description) throw new Error ('Description is required');
    state.todos.push( new Todo (description));


}

const toggleTodo = ( todoId ) =>{
    
    state.todos = state.todos.map( todo =>{
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });
}

const deletTodo = (todoId) =>{
    state.todos = state.todos.filter(todo => todo.id !== todo.id);
}

const deletCompleted =( )=>{
    state.todos = state.todos.filter(todo => todo !== todo.done);
}

const setfilter =(newFilter = Filters.All)=>{
    state.filters = newFilter;
}

const getCurrentFilter =()=>{
    return state.filters
}
export default {
    addTodo,
    deletCompleted,
    deletTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStores,
    toggleTodo,
}