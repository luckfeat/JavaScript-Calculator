let store = {
  first: '',
  second: '',
  clickedOperator: false,
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
  if (typeof store.first == 'number') {
    store.clickedOperator = true;
  }
  if (operator === '=') {
    store.clickedOperator = false;
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
          screen.innerHTML = store.first + store.second;
          store.result = Number(store.first + store.second);
          store.first = store.result;
          store.second = '';
        }
        break;
    }
  } else if (
    typeof store.first == 'number' &&
    typeof store.second == 'number'
  ) {
    switch (store.operatorSymbol) {
      case '/':
        if (typeof store.first == 'number') {
          store.result = Number(store.first / store.second);
          screen.innerHTML = store.result;
          store.first = store.result;
          store.second = '';
          store.operatorSymbol = operator;
        }
        break;
      case '*':
        if (typeof store.first == 'number') {
          store.result = Number(store.first * store.second);
          screen.innerHTML = store.result;
          store.first = store.result;
          store.second = '';
          store.operatorSymbol = operator;
        }
        break;
      case '-':
        if (typeof store.first == 'number') {
          store.result = Number(store.first - store.second);
          screen.innerHTML = store.result;
          store.first = store.result;
          store.second = '';
          store.operatorSymbol = operator;
        }
        break;
      case '+':
        if (typeof store.first == 'number') {
          store.result = Number(store.first + store.second);
          screen.innerHTML = store.result;
          store.first = store.result;
          store.second = '';
          store.operatorSymbol = operator;
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
  if (!store.clickedOperator) {
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
  store.clickedOperator = false;
  try {
    previousClick.classList.remove('clicked');
  } catch {}
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (!store.clickedOperator) {
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
