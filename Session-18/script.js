const buttonContainer = document.getElementById("buttons")
const color = document.getElementById("options")

color.addEventListener("change" , (e)=>{
    console.log(e.target.value);

    val= e.target.value

    const colorBtn= document.createElement("button")
    colorBtn.setAttribute("id",val)
    colorBtn.style.backgroundColor = val.toLowerCase()
    colorBtn.innerHTML= `${val}`
    buttonContainer.appendChild(colorBtn)

    
})

function handleChange(str){
    let val= str

    return function(){
        document.getElementById("bd").style.backgroundColor=val
    }
}

document.getElementById("buttons").addEventListener("click",(e)=>{
    let val= e.target.id;
    console.log(val);
        val=handleChange(val)
        val()
    
})