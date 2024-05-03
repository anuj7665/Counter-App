const countVal = document.querySelector('#count');

const increment = () => {
    let value = parseInt(countVal.innerText);
    value = value + 1;
    countVal.innerText = value;
}

const decrement = () => {
    let value = parseInt(countVal.innerText);
    if(value > 0){
        value = value - 1;
    }
    countVal.innerText = value;
}