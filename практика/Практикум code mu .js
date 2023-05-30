// Калькулятор продуктов
// let namae = document.querySelector('#name');
// let price = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add = document.querySelector('#add');
// let table = document.querySelector('#table');
// let total = document.querySelector('#total');

// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//     return tr.appendChild(td);
// }
// function recountTotal() {
//     let costs = table.querySelectorAll('.cost');
//     let res = 0;

//     if (costs) {
//         for (let i = 0; i < costs.length; i++) {
//                 res += (+costs[i].textContent);
//         }
//     }
//     total.textContent = res;
// }
// function allowEdit(td) {
//     td.addEventListener('dblclick', () => {
//         let text = td.textContent;
//         td.textContent = '';

//         let input = document.createElement('input');
//         input.value = text;
//         input.focus();
//         td.appendChild(input)

//         input.addEventListener('keypress', (event) => {
//             if (event.key == 'Enter') {
//                 td.textContent = input.value;

//             if (td.classList.contains('price')) {
//                 let cost = td.parentElement.querySelector('.cost');
//                 let a = td.textContent;
//                 let resu = (+a) * amount.value;
//                 cost.textContent = resu;
//                 recountTotal();
//             } if (td.classList.contains('amount')) {
//                 let cost = td.parentElement.querySelector('.cost')
//                 let b = td.textContent;
//                 let resu = price.value * (+b);
//                 cost.textContent = resu
//                 recountTotal();
//             }
//             }
//         })
//     })
// }

// add.addEventListener('click', () => {
//     let tr = document.createElement('tr');
    
//     allowEdit(createCell(tr, namae.value, 'name'));
//     allowEdit(createCell(tr, price.value, 'price'));
//     allowEdit(createCell(tr, amount.value, 'amount'));
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove').addEventListener('click', () => {
//         tr.remove();
//         recountTotal();
//     })
//     table.appendChild(tr);
//     recountTotal();
// })









// Игра смена цветов
// let field = document.querySelector('#field');
// let counter = document.querySelector('#counter')
// let colors = ['red', 'green', 'blue']

// for (let i = 0; i < 3; i++) {
//     let tr = document.createElement('tr');
//     field.appendChild(tr);;
//     for (let j = 0; j < 3; j++) {
//         let td = document.createElement('td')
//         tr.appendChild(td)
//         td.classList.add(colors[getRandomInt(0, 2)]);
//     }
// }
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function getNextElem(arr, elem) {
//     for (let i = 0; i < arr.length; i++) {
//         if (elem.getAttribute('class') == arr[i]) {
//             if (arr[i] !== 'blue') {
//                 return arr[i + 1]
//             } else {
//                 return arr[0]
//             }
//         }
//     }
// }

// let tds = field.querySelectorAll('td')

// for (let td of tds) {
//     td.addEventListener('click', function () {
//         this.setAttribute('class', getNextElem(colors, this))
//     })
// }

// let count = 0;

// field.addEventListener('click', (event) => {
//     let target = event.target;
//     if (target.tagName == 'TD') {
//         count++;
//         let arr = []
//         for (let i = 0; i < tds.length; i++) {
//         let elem = tds[i].getAttribute('class');
        
//         arr.push(elem)
//         }
//         let dublicates = arr.filter((number, index, numbers) => {
//             return numbers.indexOf(number) !== index
//         })
//         if (dublicates.length == 8) {
//             alert('Победа')
//         }
//     }
//     counter.textContent = count;
// })












// Игра в города
// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let game = document.querySelector('#game');
// let fail = document.querySelector('.fail');
// let players = document.querySelectorAll('.player')

// let arr = [];

// function check(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(value)) {
//             if (arr[i - 1] )
//             fail.classList.add('active');
//             game.classList.add('gameover')
//         }
//     }
// }

// field.addEventListener('keypress', (event) => {
//     if (event.key == 'Enter') {
//         for (let player of players) {
//             player.classList.toggle('turn')
//         }
//         message.innerHTML += '<p>' + field.value + '</p>';
//         check(arr, field.value);
//         arr.push(field.value);
//         field.value = '';
//     }
// })








// 











// Тест с вариантами ответа

// let test = document.querySelector('#test');
// let button = document.querySelector('#button');
// let questions = [
//     {
//         text: 'вопрос 1?',
//         right: 0,
//         variants: [
//             'вариант 1',
//             'вариант 2',
//             'вариант 3'
//         ]
//     },
//     {
//         text: 'вопрос 2?',
//         right: 1,
//         variants: [
//             'вариант 1',
//             'вариант 2',
//             'вариант 3'
//         ]
//     },
//     {
//         text: 'вопрос 3?',
//         right: 2,
//         variants: [
//             'вариант 1',
//             'вариант 2',
//             'вариант 3'
//         ]
//     }
// ]
// for (let question of questions) {
//     let div = document.createElement('div');
//     div.innerHTML = '<p>' + question.text + '</p>'
//     test.appendChild(div)
// }
// for (let i = 0; i < test.childElementCount; i++) {
//     for (let j = 0; j < test.childElementCount; j++) {
//         let label = document.createElement('label');
//         test.children[i].appendChild(label)
//         let input = document.createElement('input')
//         input.setAttribute('type', 'radio');
//         input.setAttribute('name', i + 1);
//         label.appendChild(input)
//         label.innerHTML += questions[i].variants[j]
//     }
// }
// let divs = test.querySelectorAll('div')
// for (let div of divs) {
//     let inputs = div.querySelectorAll('label input')
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].name == questions[i].right + 1) {
//             inputs[i].setAttribute('data-right', '')
//         }
//     }
// }
// button.addEventListener('click', () => {
//     let inputs = test.querySelectorAll('input')
//     for (let input of inputs) {
//         console.log(input)
//         if (input.checked && input.hasAttribute('data-right')) {
//             input.parentElement.classList.add('g')
//         } else if (input.checked) {
//             input.parentElement.classList.add('r')
//         }
//     }
// })







// предсказание
// let timer = document.querySelector('#timer');
// let start = document.querySelector('#start');
// let stopper = document.querySelector('#stop');
// let text = document.querySelector('#text');

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let timerId;
// let arr = ['У вас будет замечательный день', 'Вас ожидают трудности', 'Похоже,вам конец']
// start.addEventListener('click', () => {
//     start.classList.remove('active');
//     stopper.classList.add('active');
//     timerId = setInterval(() => {
//         timer.textContent = getRandomInt(1, 3);
//     }, 100)
// })
// stopper.addEventListener('click', () => {
//     stopper.classList.remove('active');
//     clearInterval(timerId);
//     if (timer.textContent == 1) {
//         text.textContent = arr[0];
//         text.classList.add('g')
//     } if (timer.textContent == 2) {
//         text.textContent = arr[1];
//         text.classList.add('r')
//     } if (timer.textContent == 3) {
//         text.textContent = arr[2];
//         text.classList.add('r')
//     }
// })





// найди число 
// let parent = document.querySelector('#parent');
// let field = document.querySelector('#field');
// start(2)

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// function range(count) {
//     let arr = [];
//     for (let i = 1; i <= count; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// function shuffle(arr) {
//     let result = [];
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {
//         let random = getRandomInt(0, arr.length - 1)
//         let elem = arr.splice(random, 1)[0]
//         result.push(elem)
//     }
//     return result;
// }
// function chunk(arr, n) {
// let result = [];
// let count = Math.ceil(arr.length / n);

// for (let i = 0; i < count; i++) {
//     let elems = arr.splice(0, n)
//     result.push(elems)
// }
// return result
// }
// function prepare(size) {
//     let arr = [];

//     arr = range(size * size);
//     arr = shuffle(arr);
//     arr = chunk(arr, size)

//     return arr
// }
// function build(field, arr) {
//     field.textContent = '';
//     let cells = [];

//     for (let sub of arr) {
//         let tr = document.createElement('tr');

//         for (let num of sub) {
//             let td = document.createElement('td');
//             td.textContent = num;
//             tr.appendChild(td)

//             cells.push(td)
//         }
        
//         field.appendChild(tr)
//     }
//     return cells;
// }
// function activate(cells, size) {
//     let last = size * size;
//     console.log(last)
//     let counter = 1;
//     for (let cell of cells) {
//         cell.addEventListener('click', function() {
//             if (this.textContent == counter) {
//                 this.classList.add('active')
//                 if (counter == last) {
//                     start(size + 1)
//                 }
//                 counter++;
//             }
//         })
//     }
// }
// function start(size) {
//     activate(build(field, prepare(size)), size)
// }






// клавиатура
// let keys = document.querySelectorAll('.j');
// let caps = document.querySelector('#caps');
// let space = document.querySelector('#space');
// let inp = document.querySelector('#inp')

// for (let elem of keys) {
// 	elem.addEventListener('click', () => {
// 		inp.value += elem.textContent;
// 	})
// 	caps.addEventListener('click', () => {
// 		elem.textContent = elem.textContent.toUpperCase();
// 	})
// 	caps.addEventListener('dblclick', () => {
// 		elem.textContent = elem.textContent.toLowerCase();
// 	})
// }
// space.addEventListener('click', () => {
// 	inp.value += ' ';
// })