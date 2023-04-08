const todos = []; //para guardar en la memoria interna todos los 'todo'



window.onload = () => {
const form = document.getElementById('todo-form'); 
form.onsubmit = (e) => {  // reemplazamos con onsubmit
 e.preventDefault(); //para que no se refrescue nuestra web
 const todo = document.getElementById('todo'); //
 //const todoText = todo.value ;
 //todo.value = ''; // reemplazamos su valor por string vacio
 //todos.push(todoText); //agrego elementos a un array
 //const todoList = document.getElementById('todo-list');
 //todoList.innerHTML = '';
 for(let i = 0; i < todos.length; i++) {//para que no se duplique
    todoList.innerHTML += '<li>' + todos[i] + '</li>';//concatenando
  }
  //AGREGANDO EL MAP PARA TENER EJEMPLO
  //const todosTemplate = todos.map(t =>{
    //return 'li' + t + '/li';

 //}) // dentro de () le coloco el ellemnto que estoy iterando
 // console.log(todosTemplate);
 //const todosTemplate = todos.map(t => '<li>' + t + '</li>');
 //todoList.innerHTML = todosTemplate.join('') //JOIN SE USA PARA AGREGAR MAS ELEMNTOS A MI LI
//}
//}
// APRENDIENDO .MAP
//Map agrega al elemento del arreglo lo que nosotros devolvemos
//Transforma el elemento dentro de lo que nosotros devolvemos

//.JOIN lo que hace es agregar mas elementos a mi lista de ul del html

//Eliminar CON SPLICE_ se utiliza para los array y le indicamos de donde hasta donde queremos eliminar elementos de nuestro arreglo
//arr.(splice 0, 1) siendo el 0 el primer elemnto de nuestro array y 1 cuantos elementos quiero eliminar)


//Querry SelectorAll_instruccion para ir a buscar elementos dentro de mi listado y agregarles una funcion que se ejecuta cuando le hago click a uno de estos elementos
//Te permite buscar por clase, por id, por etiqueta que tengas en html poniendo(#elemento que quieres agregar)

//document.querySelectorAll('#todo-list');
//const elementos = document.querySelectorAll('#todo-list li') //llamo a los elementos li
//Si quieres llamar a los elementos de un array tambien puedes utilizar Array.from(elemetos)
//elementos.forEach( x=> console.log(x))

//Para agregar un evento usa add.EventListener(type, listener), siendo type el tipo de evento como click y listener lo que queremos que pasé;

const todoText = todo.value;
todo.value = '';
todos.push(todoText);
const todoList = document.getElementById('todo-list');
const todosTemplate = todos.map(t => '<li> + t +</li>');
todoList.innerHTML = todosTemplate.join('');
const elementos = document.querySelectorAll('#todo-list')
elementos.forEach((elemento, i) => {
  elemento.addEventListener('click', () =>
  console.log(elemento, i));
  
})
}
}

