function getTime() {
    const date = new Date();
    const currentTime = document.querySelector('h1.currentTime');
    const ampm = document.querySelector('.ampm');
    
    const hour = date.getHours();
    const ampmJs = `${hour >= 12 ? 'PM' : 'AM'}`;

    const min = date.getMinutes();
    const sec = date.getSeconds();

    ampm.innerText = ampmJs;
    currentTime.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

    function getDate() {
        const currentDate = document.querySelector('h1.currentDate');
        const month = date.getMonth();
        const dates = date.getDate();
        const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const dayWeek = week[date.getDay()];
        const year = date.getFullYear();

        currentDate.innerText = `${month < 10 ? `0${month}` : month}.${dates < 10 ? `0${dates}` : dates}.${dayWeek}.${year}`
    };

    getDate();
};

setInterval(getTime, 1000);

getTime();


const userLS = 'currentUser';
const name = document.querySelector('.typeName');

function askName() {
    const nameInput = document.querySelector('.typeName input')
    name.classList.add('showing');
    name.addEventListener('submit', handleNameSubmit);

    function handleNameSubmit(e) {
        e.preventDefault();
        const inputName = nameInput.value;
        loadGreeting(inputName);
        saveName(inputName);
    };

    function saveName(userName) {
        localStorage.setItem(userLS, userName);
    };
};

function loadGreeting(userName) {
    const greeting = document.querySelector('.greeting');
    greeting.classList.add('showing');
    name.style.display = 'none'
    const inputName = localStorage.getItem('currentUser');

    greetingP = ['Have a nice day, ', 'Hello, ', 'Cheer Up! ', 'Welcome back, ', 'How are you doing? ', 'Good to see you, ', 'Yo! ']

    const pNumber = Math.floor(Math.random()*greetingP.length);
    if (inputName === null) {
        greeting.innerText = `${greetingP[pNumber]}${userName}`; 
    } else {greeting.innerText = `${greetingP[pNumber]}${inputName}`}
};

function loadName() {
    const currentUser = localStorage.getItem(userLS);
    if (currentUser === null) {
        askName()
    } else {
        loadGreeting()
    }
};

loadName();

const typeToDo = document.querySelector('.typeToDo');
const todoLS = 'toDos';

const toDoList = document.querySelector('.toDoList');
toDoList.style.display = 'none';

let toDos = [];

function loadToDo(text) {
    const savedToDos = localStorage.getItem(todoLS);

    if (toDoList.childNodes !== null) {
        toDoList.style.display = 'block';
        toDos.push(text);
        listUpToDo(text);
    };

    function listUpToDo(listedToDo) {
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
        const span = document.createElement('span');
        span.innerText = listedToDo;
        delBtn.innerText = '✗';
        toDoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(delBtn);
        toDos.push(li)
    };
};

function handleToDoSubmit(e) {
    const toDoInput = document.querySelector('.typeToDo input');
    e.preventDefault();
    const registeredToDo = toDoInput.value;
    saveToDo(registeredToDo);    
    loadToDo(registeredToDo);
};

function saveToDo() {
    localStorage.setItem(todoLS, JSON.stringify(toDos));
};

typeToDo.addEventListener('submit', handleToDoSubmit);


function loadBg() {
    const body = document.querySelector('body');
    const bgNumber = 8;
    const number = Math.floor(Math.random()*bgNumber);

    const img = new Image();
    img.src = `images/${number + 1}.jpg`;
    img.classList.add('bgImage')
    body.prepend(img)     
};

loadBg();
