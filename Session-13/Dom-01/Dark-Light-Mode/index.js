
function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const themebutton = document.getElementById("theme-button");

    themebutton.addEventListener('click',function(){
        const currentColor=document.body.style.backgroundColor

    if(!currentColor || currentColor=="white"){
        changeBgColor('black')
        themebutton.innerText="Light Mode"
    }else{
        changeBgColor('white')
        themebutton.innerText="Dark Mode"

    }
    })


    
});

