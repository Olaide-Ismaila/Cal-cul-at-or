const nums = document.querySelectorAll('button');
let screen = document.querySelector('input');
const specialChars = ['%', '*', '/', '-', '+', '='];
let output = '';

const calculate = (btnVal) => {
  if(btnVal === '=' && output !== ''){
    output = eval(output.replace('%', '/100'));
  }else if(btnVal === 'C'){
    output = '';
  }else if(btnVal === 'R'){
    output = output.toString().slice(0, -1);
  }else{
    if(output === '' && specialChars.includes(btnVal)) return;
    output += btnVal;
  }
  screen.value = output;
};
nums.forEach(num => {
  num.addEventListener('click', () => calculate(num.innerHTML));
    });