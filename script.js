document.addEventListener('DOMContentLoaded', ()=>{
    const result = document.getElementById('result');
    let currentInput = '0';

    function updateResult() {
        result.textContent = currentInput;
    }

    function buttonclick(event){
        const value = event.target.textContent;
        if (value == 'C'){
            currentInput = '0'
        }
        else if (value == "DEL"){
            if (currentInput == "Err"){
                currentInput = '0'
            }
            else{
            currentInput =currentInput.slice(0,-1) 
            if (currentInput == ''){
                currentInput = "0"
            }
        }}
        else if ( value == "="){
            try{
                currentInput = String(eval(currentInput))
        }   catch(error){
                currentInput = "Err"
        }}
        else{
            if(currentInput=="Err"){
                currentInput = value
            }
            else if(currentInput == '0' && value != "."){
                currentInput = value
            }   
            else{
                currentInput += value
            }
        }
        updateResult()
    }
    const buttons = document.querySelectorAll('.btn ,.btn_equal,.btn_zero')
    for (let button of buttons){
        button.addEventListener('click', buttonclick)
    }

})