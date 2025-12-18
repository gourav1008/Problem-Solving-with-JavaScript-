// let n = prompt("Enter a number: ");
// for( i=1; i<=n; i++){
//     console.log(i);
// }

let num = document.getElementById('num');
let btn = document.getElementById('btn');
let output = document.querySelector('.output');

let result = btn.addEventListener('click', ()=>{
    let n = Number(num.value);
    let result = '';
    for(let i=1; i<=n; i++){
        result += i + '<br>' ;
    }
    output.innerHTML =result;
})

