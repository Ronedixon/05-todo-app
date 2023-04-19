import html from './app.html?raw';
import todoStore, { Filters } from '../strore/todo.store';
import { renderTodos } from './use-cases';

const ElementIds = {
    clearCompletedButton: '.clear-completed',
    TodoList:'.todo-list',
    NewTodoInpunt: '#new-todo-input',
    todoFilters: '.filtro',
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
    const todoListUL = document.querySelector(ElementIds.TodoList );
    const clearCompletedButton = document.querySelector( ElementIds.clearCompletedButton );
    const filtersLis = document.querySelectorAll(ElementIds.todoFilters);


    //Listeners
    newDescriptionInput.addEventListener( 'keyup', ( event) => {
        if ( event.keyCode !== 13 ) return;
        if (event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value);
        displayTodos();
        event.target.value='';
      });

      todoListUL.addEventListener('click', (event) =>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
      });

      todoListUL.addEventListener('click', (event) =>{
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if ( !element || !isDestroyElement ) return;
        todoStore.deleteTodo( element.getAttribute('data-id'));
        displayTodos();
       });

       clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
       } )

       filtersLis.forEach(element => {
          element.addEventListener( 'click', (element) =>{
            filtersLis.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch(element.target.text){
              case 'Todos':
                 todoStore.setFilter( Filters.All)
              break;
              case 'Pendientes':
                 todoStore.setFilter( Filters.Pending)
              break;
              case 'Completados':
                 todoStore.setFilter( Filters.Completed)
              break;
            }

            displayTodos();

       });

});

}