// procedure of the app
//importing values
const steps = document.querySelector(".steps");
const total = document.querySelector(".total");
const buttons = document.querySelectorAll(".btn-input");
//const equal = document.querySelector(".equal");

steps.textContent = '';
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let target = e.target;
        switch(target.id){ 
            case "btn":
                steps.textContent += ` ${button.value}`;
                break;
            
            case "equal":
                total.textContent = 'Total';
                console.log('clicking');
        }
    });
});

// write functions below to perform calculations and output

function sum(value){
    //calculations for sums
}

function multiply(value){
    //calculations for *
}

function divide(value){

}

function minus(value){

}
