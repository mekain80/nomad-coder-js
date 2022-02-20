const toDoForm=document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos"

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li =(event.target.parentElement);
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.addEventListener("click",deleteToDo);

    span.innerText=newTodo.text;
    button.innerText="x";

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";

    const newTOdoObj={
        text:newTodo,
        id: Date.now(),
    };

    toDos.push(newTOdoObj);
    paintToDo(newTOdoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

function sayHello(item){
    console.log("Thid is the turn of ",item);
}

if(savedToDos!==null){
    const parseToDos=JSON.parse(savedToDos)
    toDos=parseToDos;
    parseToDos.forEach(paintToDo);
}

