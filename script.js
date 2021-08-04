const display1E1 = document.querySelector('.display1');
const display2E1 = document.querySelector('.display2');
const tempresultE1 = document.querySelector('.temp-result');
const numberE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1 = document.querySelector('.all-clear');
const deleteE1 = document.querySelector('.delete');

let dis1Num = '';
let dis2Num = '';
let result = ' ';
let lastoperation = '';
let haveDot = false;

numberE1.forEach( number => {
    number.addEventListener('click', (e)=> {
        if( e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach( operation =>{
    operation.addEventListener('click',(e)=>{
        if(!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastoperation){
            mathOperation();
        }else(
            result = parseFloat(dis2Num)
        )
        clearVar(operationName);
        lastoperation = operationName;
        
    
    })
});

function clearVar(name = ''){
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1E1.innerText = dis1Num;
    display2E1.innerText = ' ';
    dis2Num = ' ';
    tempresultE1.innerText = result;
}
function mathOperation(){
    if(lastoperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if ( lastoperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if ( lastoperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if ( lastoperation === '÷'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }
}

equalE1.addEventListener('click', (e)=>{
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    tempresultE1.innerText = ' ';
    dis2Num = result;
    dis1Num = ' ';
});
clearE1.addEventListener('click', (e)=>{
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    dis1Num = ' ';
    dis2Num = ' ';
    result = ' ';
    tempresultE1.innerText = '0';

});

deleteE1.addEventListener('click', (e)=>{
    display2E1.innerText = ' ';
    dis2Num = ' ';

});




