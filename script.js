let Eye1 = document.getElementById('eye-1');
let Eye2 = document.getElementById('eye-2');
let input = document.getElementsByTagName('input')
let leftColor = document.getElementById('left-color');
let rightColor = document.getElementById('right-color');

let inputArray = Array.from(input);


inputArray.forEach(function(ipts,index){
    ipts.addEventListener('input',()=>{
        ipts.nextElementSibling.innerText = ipts.value;
        Eye1.style.backgroundColor = `rgb(${inputArray[0].value},${inputArray[1].value},${inputArray[2].value})`;
        Eye2.style.backgroundColor = `rgb(${inputArray[3].value},${inputArray[4].value},${inputArray[5].value})`
        leftColor.firstChild.nextSibling.textContent = `rgb(${inputArray[0].value},${inputArray[1].value},${inputArray[2].value})`;
        rightColor.firstChild.nextSibling.textContent = `rgb(${inputArray[3].value},${inputArray[4].value},${inputArray[5].value})`;
    })
    ipts.nextElementSibling.innerText = ipts.value;
    Eye1.style.backgroundColor = `rgb(${inputArray[0].value},${inputArray[1].value},${inputArray[2].value})`;
    Eye2.style.backgroundColor = `rgb(${inputArray[3].value},${inputArray[4].value},${inputArray[5].value})`
    leftColor.firstChild.nextSibling.textContent = `rgb(${inputArray[0].value},${inputArray[1].value},${inputArray[2].value}) `;
    rightColor.firstChild.nextSibling.textContent = `rgb(${inputArray[3].value},${inputArray[4].value},${inputArray[5].value})`;
});

leftColor.addEventListener('click',() => {
    navigator.clipboard.writeText(leftColor.textContent)
    .then(() =>{
    const copyPop = document.getElementById('copy-pop');
        copyPop.classList.add('active-pop')
    setTimeout(()=>{
        copyPop.classList.remove('active-pop')
    },1000)

    })
});
rightColor.addEventListener('click',() => {
    navigator.clipboard.writeText(rightColor.textContent)
    .then(() =>{
        const copyPop = document.getElementById('copy-pop');
            copyPop.classList.add('active-pop')
        setTimeout(()=>{
            copyPop.classList.remove('active-pop')
        },1000)
    
        })
});

