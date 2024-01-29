const displayHistory = document.querySelector(".display-history");
const display = document.querySelector(".display-input");
const tempResult = document.querySelector(".temporary-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector("last-enetity-clear");

let disNum1 = "";
let disNum2 = "";
let result = "";
let lastOperation = "";
let haveDot = false;

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText == "." && !haveDot){
            console.log (e.target.innerText);
            haveDot = true;
        } else if (e.target.innerText == "." && haveDot == true){
            return;
        }
        disNum2 += e.target.innerText;
        display.innerText = disNum2;
    })
});

operations.forEach(operation => {
    operations.addEventListener('click', (e) => {
        if (!disNum2) return;
        haveDot = false;
        const operationName = e.target.innerText;

        if (disNum1 && disNum2 && lastOperation){
            console.log ("Menjalankan operasi matematia");
            
        }
    })
})

