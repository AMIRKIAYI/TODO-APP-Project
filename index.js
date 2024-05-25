

const inputfield = document.getElementById("input");
const orderedList = document.getElementById("orderedList");

// orderedList.addEventListener("click", function(e){
//     e.target.remove();

// })
document.getElementById("button-addon2").addEventListener("click",function(){
    if(inputfield.value === ""){
        alert("Your inputfield is empty")
    }else{
        
        const list = document.createElement("li")
        list.textContent = inputfield.value
        list.classList.add("list-group-item", "category-tag")
        orderedList.appendChild(list)
        
        

        
    }
    inputfield.value = "";
    store()

})
orderedList.addEventListener("click",function(e){
    e.target.style.textDecoration = "line-through"
})

document.addEventListener("keydown", function(e){

    if(e.key === "Enter")
       if(inputfield.value === ""){
        alert("Your inputfield is empty")
       }else{

        const list = document.createElement("li")
        list.textContent = inputfield.value
        list.classList.add("list-group-item", "category-tag")
        orderedList.appendChild(list)
        inputfield.value = "";
       
    }
    store()
    
    
})

function store(){
    localStorage.setItem("data", orderedList.innerHTML)
}
function read(){
    orderedList.innerHTML = localStorage.getItem("data")
}
read()




