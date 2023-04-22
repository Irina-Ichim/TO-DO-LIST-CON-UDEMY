
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () =>{
        elemento.parentNode.removeChild(elemento)
        todos.splice(i, 1)
        actualizaTodos(todos)
        render()
    })
})
}

const actualizaTodos = (todos) => {                //Se repetian lo que tengo dentro de esta funcion en la funcion de arriba y la de abajo, para que no pase uso esto
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem(`todos`, todoStrings)
}

window.onload = () => {
    render()
const form= document.getElementById('todo-form');
form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById ('todo');
    const todoText = todo.value ;
    todo.value = '';
    todos.push(todoText);
    actualizaTodos(todos)
    render()
}
}

//LocalStorage
//localStorage.setItem('lala', 'chanchito feliz') Guarda los elementos aunque cierras el ordenador

//localStorage.getItem('lala') Como buscar en localStorage

//ShortCircuit

//Me he quedado en Operador de propagación