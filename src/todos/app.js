import html from './app.html?raw';
import todoStore from '../strore/todo.store';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList:'.todo-list',
    NewTodoInpunt: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId )=> {

    const displayTodos =( )=> {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos( ElementIds.TodoList, todos );
    }
    // cuando la función App() se llama

    (( ) =>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
        displayTodos();
    })();


    // referencias HTML
    const newDescriptionInput = document.querySelector( ElementIds.NewTodoInpunt );


    //Listeners
    newDescriptionInput.addEventListener( 'keyup', ( event) => {
        if ( event.keyCode !== 13 ) return;
        if (event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value);
        displayTodos();
        event.target.value='';
      });


}