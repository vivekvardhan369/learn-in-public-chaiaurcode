document.addEventListener("DOMContentLoaded",()=>{
            const inputText = document.getElementById("inputText");
        const AddBtn = document.getElementById("AddBtn");
        const ulList = document.getElementById("to-do");

        AddBtn.addEventListener('click', () => {
            const value = inputText.value.trim();

            if (value) {
                let li = document.createElement("li");
                li.innerHTML = value;

                let btn= document.createElement("button")
                btn.innerText= 'X'

                li.appendChild(btn)
                ulList.appendChild(li);
                inputText.value = ""; 

                btn.addEventListener('click',()=>{
                    li.remove()
                })
            } else {
                alert("Please enter a task.");
            }
        })
        const DeleteAll=document.getElementById("deleteAll");
        DeleteAll.addEventListener('click', () => {
            ulList.innerHTML = '';
        });
        
        
})