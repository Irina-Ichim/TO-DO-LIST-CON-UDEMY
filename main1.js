console.log('irina');
const todos = [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () =>{
        elemento.parentNode.removeChild(elemento)
        todos.splice(i, 1)
        render()
    })
})
}

window.onload = () => {
const form= document.getElementById('todo-form');
form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById ('todo');
    const todoText = todo.value ;
    todo.value = '';
    todos.push(todoText);
}
}

//LocalStorage
//localStorage.setItem('lala', 'chanchito feliz') Guarda los elementos aunque cierras el ordenador

//localStorage.getItem('lala') Como buscar en localStorage