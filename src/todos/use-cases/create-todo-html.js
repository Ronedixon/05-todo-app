import { Todo } from "../models/todo.models";

/**
 * 
 * @param {Todo} todo 
 */

export const createTodoHtml =( todo )=> {
    if ( !todo) throw new Error ('A TODO objet is required');

      const html = `<h1>${ todo.description}</h1>`;

    const liElement = document.createElement('li');
    liElement.innerText= html;

    return liElement;

}