let toDoForm = document.querySelector(".to-do-form");
let todoInp = document.querySelector("#to-do");
let list = document.querySelector(".todos");
let list2 = document.querySelector(".todolist");
const form = document.querySelector('form')
const input = document.querySelector('input')
let errorMas = document.createElement("span")
let button = document.querySelector('.btn')



toDoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (todoInp.value != "" && todoInp.value != " "){
    list.innerHTML += ` <li style="display: flex;
    justify-content: space-between;
    align-items: center;" class="list-group-item">
    <span>${todoInp.value}</span>
    <div>
        <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-danger remove" id="show-modal-example"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>`;


} else {
    errorMas.classList.replace("d-none", "d-block")
}
    todoInp.value = "";
todoInp.addEventListener("keyup", (e)=>{
    if (e.target.value.length<1){
        e.target.nextElementSibling.classList.replace("d-none", "d-block")
    }
    else {
        e.target.nextElementSibling.classList.replace("d-block", "d-none")
    }
})
    //done
    let dones = document.querySelectorAll(".done");
    dones.forEach((item)=>{
        item.addEventListener("click",function(){
            this.parentElement.previousElementSibling.style.textDecoration = "line-through";
        })
    })

    let remove = document.querySelectorAll(".remove");
    remove.forEach((item)=>{
        item.addEventListener("click",function(){
            let box = document.createElement("div")
            let btnModal1 = document.createElement("button")
            let btnModal2 = document.createElement("button")
            box.style.width="600px"
            box.style.height="400px"
            box.style.marginLeft="440px"
            box.style.position="relative"
            box.style.bottom="200px"
            box.textContent="Are You Sure?"
            box.style.display="flex"
            box.style.justifyContent="center"
            box.style.alignItems="center"
            box.style.fontSize="30px"
            box.style.backgroundColor="white"
            btnModal1.textContent="Yes"
            btnModal2.textContent="Cancel"
            btnModal1.style.position="absolute"
            btnModal1.style.top="300px"  
            btnModal2.style.position="absolute"
            btnModal2.style.top="300px"
            btnModal2.style.left="120px"

            btnModal2.style.width="120px"
            btnModal1.style.width="120px"
            btnModal1.style.marginLeft="230px"

            btnModal1.style.backgroundColor="green"
            btnModal2.style.backgroundColor="red"

            document.body.style.backgroundColor="rgba(0, 0 , 0, 0.5)"
            document.body.style.backgroundColor="rgba(0, 0 , 0, 0.5)"
             box.appendChild(btnModal1)
             box.appendChild(btnModal2)
            document.body.appendChild(box)

            btnModal2.addEventListener("click",function(){
                box.style.display="none"
                document.body.style.backgroundColor="white"
            })
            btnModal1.addEventListener("click",function(){
                box.style.display="none"
                todoInp.style.display="none"
                list.style.display="none"
                document.body.style.backgroundColor="white"
               
                let input1 = document.createElement("input")
                let list2 = document.createElement("ul")
                document.body.appendChild(input1)
                document.body.appendChild(list2)
                input1.style.marginLeft="590px"
                input1.style.marginTop="30px"
               
                 
                button.addEventListener("click",(e)=>{
                    e.preventDefault();
                    list2.innerHTML += ` <li style="display: flex;
                     justify-content: space-between;
                     align-items: center; width: 240px; border: 1px solid #999" class="list-group-item">
                     <span>${input1.value}</span>
                     <div>
                    <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
                    <button class="btn btn-danger remove" id="show-modal-example"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    </li>`;
                    list2.style.marginLeft="550px"
                    list2.style.marginTop="30px"
                })
            
            })

        })
       
    })
}); 











































