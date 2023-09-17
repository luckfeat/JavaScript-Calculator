let store = {
  first: '',
  second: '',
  clickOperator: false,
  operatorSymbol: '',
  result: '',
};

let result;

const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const initialize = document.querySelector('.initialize');
const numbers = document.querySelectorAll('.btn.number');
const operators = document.querySelectorAll('.btn.operator');

clear.addEventListener('click', () => {
  if (!store.clickOperator) {
    store.first = '';
    screen.innerHTML = '';
  } else {
    store.second = '';
    screen.innerHTML = '';
  }
});

initialize.addEventListener('click', () => {
  store.first = '';
  store.second = '';
  screen.innerHTML = '';
  store.clickOperator = false;
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (!store.clickOperator) {
      store.first = Number((screen.innerHTML += e.target.innerHTML));
    } else {
      screen.innerHTML = Number((store.second += e.target.innerHTML));
      store.second = Number(screen.innerHTML);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    calculate(e.target.innerHTML);
  });
});

function calculate(operator) {
  store.clickOperator = true;
  if (operator === '=') {
    store.clickOperator = false;
    switch (store.operatorSymbol) {
      case '/':
        screen.innerHTML = store.first / store.second;
        store.result = Number(store.first / store.second);
        store.first = store.result;
        store.second = '';
        console.log(store.result);
        break;
      case '*':
        screen.innerHTML = store.first * store.second;
        store.result = Number(store.first * store.second);
        store.first = store.result;
        store.second = '';
        break;
      case '-':
        screen.innerHTML = store.first - store.second;
        store.result = Number(store.first - store.second);
        store.first = store.result;
        store.second = '';
        break;
      case '+':
        screen.innerHTML = store.first + store.second;
        store.result = Number(store.first + store.second);
        store.first = store.result;
        store.second = '';
        break;
    }
  } else {
    store.operatorSymbol = operator;
  }
}
