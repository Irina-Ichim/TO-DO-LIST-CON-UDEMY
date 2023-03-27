const todos = []; //para guardar en la memoria interna todos los 'todo'



window.onload = () => {
 const form = document.getElementById('todo-form'); //tomamos nuestro formulario
 form.onsubmit = (e) => {  // reemplazamos con onsubmit
 e.preventDefault(); //para que no se refrescue nuestra web
 const todo = document.getElementById('todo'); //
 const todoText = todo.value ;
 todo.value = ''; // reemplazamos su valor por string vacio
 todos.push(todoText); //agrego elementos a un array
 const todoList = document.getElementById('todo-list');
 todoList.innerHTML = '';
 for(let i = 0; i < todos.length; i++) {
    todoList.innerHTML += '<li>' + todos[i] + '</li>';//concatenando
  }
 }
}