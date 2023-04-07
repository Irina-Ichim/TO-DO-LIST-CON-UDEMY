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
 //todoList.innerHTML = '';
 //for(let i = 0; i < todos.length; i++) {//para que no se duplique
   // todoList.innerHTML += '<li>' + todos[i] + '</li>';//concatenando
  //}
  //AGREGANDO EL MAP PARA TENER EJEMPLO
//  const todosTemplate = todos.map(t =>{
//    return 'li' + t + '/li';

 // }) // dentro de () le coloco el ellemnto que estoy iterando
 // console.log(todosTemplate);
 const todosTemplate = todos.map(t => '<li>' + t + '</li>');
 todoList.innerHTML = todosTemplate.join('') //JOIN SE USA PARA AGREGAR MAS ELEMNTOS A MI LI
}
}
// APRENDIENDO .MAP
//Map agrega al elemento del arreglo lo que nosotros devolvemos
//Transforma el elemento dentro de lo que nosotros devolvemos

//.JOIN lo que hace es agregar mas elementos a mi lista de ul del html