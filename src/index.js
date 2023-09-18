let store = {
  first: '',
  second: '',
  clickOperator: false,
  operatorSymbol: '',
  result: '',
};

let result;

function getTag(selector) {
  return document.querySelector(selector);
}

function getAllTag(selector) {
  return document.querySelectorAll(selector);
}

function calculate(operator) {
  if (store.first !== '') {
    store.clickOperator = true;
  }
  if (operator === '=') {
    store.clickOperator = false;
    switch (store.operatorSymbol) {
      case '/':
        if ((store.first !== '') & (store.second !== '')) {
          screen.innerHTML = store.first / store.second;
          store.result = Number(store.first / store.second);
          store.first = store.result;
          store.second = '';
        }
        break;
      case '*':
        if ((store.first !== '') & (store.second !== '')) {
          screen.innerHTML = store.first * store.second;
          store.result = Number(store.first * store.second);
          store.first = store.result;
          store.second = '';
        }
        break;
      case '-':
        if ((store.first !== '') & (store.second !== '')) {
          screen.innerHTML = store.first - store.second;
          store.result = Number(store.first - store.second);
          store.first = store.result;
          store.second = '';
        }
        break;
      case '+':
        if ((store.first !== '') & (store.second !== '')) {
          console.log('damn');
          screen.innerHTML = store.first + store.second;
          store.result = Number(store.first + store.second);
          store.first = store.result;
          store.second = '';
        }
        break;
    }
  } else {
    store.operatorSymbol = operator;
  }
}

const screen = getTag('.screen');
const clear = getTag('.clear');
const initialize = getTag('.initialize');
const numbers = getAllTag('.btn.number');
const operators = getAllTag('.btn.operator');

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
  previousClick.classList.remove('clicked');
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

let previousClick;
let clicked;

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    if (!clicked) {
      previousClick = e.target;
      e.target.classList.add('clicked');
      clicked = true;
    } else {
      previousClick.classList.remove('clicked');
      previousClick = e.target;
      e.target.classList.add('clicked');
    }
    calculate(e.target.innerHTML);
  });
});
