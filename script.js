let result=document.querySelector(".result")
let buttons=document.querySelectorAll(".btn")

function display(a){
    result.value+=a
}

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        a=btn.innerText
        if(a=="="){
            result.value=eval(result.value);
        }
        else if(a=="C"){
            result.value="";
        }
        else if(a=="DEL"){
            x=(result.value).length
            result.value=(result.value).slice(0, x-1)
        }
        else{
            display(a);
        }
        // if(a%1==0){
        //     display(a)
        // }

    })
})
// buttons[0].addEventListener("click", ()=>{
//     result.value=""
// })
// buttons[1].addEventListener("click", ()=>{
//     // result.value=result.value.slice(0:result.value.length)
// })