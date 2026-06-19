// To-Do List with Local Storage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        let li = document.createElement("li");

        li.innerHTML =
        task +
        ` <button onclick="deleteTask(${index})">Delete</button>`;

        taskList.appendChild(li);
    });
}

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    if(taskInput.value==="") return;

    tasks.push(taskInput.value);

    saveTasks();
    renderTasks();

    taskInput.value="";
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();
    renderTasks();
}

renderTasks();


// Product Listing

const products = [
{
name:"Laptop A",
category:"Laptop",
price:50000,
rating:4.5
},
{
name:"Mobile A",
category:"Mobile",
price:15000,
rating:4.2
},
{
name:"Laptop B",
category:"Laptop",
price:60000,
rating:4.8
},
{
name:"Mobile B",
category:"Mobile",
price:20000,
rating:4.6
}
];

function displayProducts(){

    let filter =
    document.getElementById("filter").value;

    let sort =
    document.getElementById("sort").value;

    let filtered = products;

    if(filter !== "all"){
        filtered =
        products.filter(
        p => p.category === filter
        );
    }

    if(sort === "price"){
        filtered.sort(
        (a,b)=>a.price-b.price
        );
    }
    else{
        filtered.sort(
        (a,b)=>b.rating-a.rating
        );
    }

    let output =
    document.getElementById("products");

    output.innerHTML = "";

    filtered.forEach(product=>{

        output.innerHTML += `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}</p>
        </div>
        `;
    });
}

displayProducts();