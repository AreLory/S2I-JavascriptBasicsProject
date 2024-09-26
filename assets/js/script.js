//TOOLBAR
let toolbarMenu = document.createElement('div');
toolbarMenu.className = 'toolbar';

let firstToolDiv = document.createElement('div');
firstToolDiv.className = 'tool1 tool';

let secondToolDiv = document.createElement('div');
secondToolDiv.className = 'tool2 tool';

let thirdToolDiv = document.createElement('div');
thirdToolDiv.className = 'tool3 tool';

let modifyBtn = document.createElement('button');
modifyBtn.className = 'modifyBtn actionBtn';
modifyBtn.id = 'modifyBtn';

let resetBtn = document.createElement('button');
resetBtn.className = "resetBtn actionBtn";
resetBtn.id = "resetBtn";

let themeBtn = document.createElement('button');
themeBtn.className = 'themeBtn actionBtn'
themeBtn.id = 'themeBtn'

let modifyImg = document.createElement('img');
modifyImg.src = 'assets/img/black-pen.png';
modifyImg.alt = 'pen-clip-logo';

let resetImg = document.createElement('img');
resetImg.src = 'assets/img/reset.png';
resetImg.alt = 'reset-logo';

let themeImg = document.createElement('img');
themeImg.src = 'assets/img/palette.png';
themeImg.alt = 'change-color'

//TOOLBAR
document.body.appendChild(toolbarMenu)
toolbarMenu.append(firstToolDiv)
toolbarMenu.append(secondToolDiv)
toolbarMenu.append(thirdToolDiv)
firstToolDiv.appendChild(modifyBtn).appendChild(modifyImg)
secondToolDiv.appendChild(resetBtn).appendChild(resetImg)
thirdToolDiv.appendChild(themeBtn).appendChild(themeImg)






//COUNTER
let container = document.createElement('div');
container.className = 'container';

let displayDiv = document.createElement('div');
displayDiv.className = 'display';

let display = document.createElement('p');
display.id = 'display';
display.innerText = 0

let operatorDiv = document.createElement('div');
operatorDiv.className = 'operator';

let increaseBtn = document.createElement('button');
increaseBtn.innerText = '+'
increaseBtn.className = 'additionBtn operationBtn';
increaseBtn.id = 'increaseBtn'

let decreaseBtn = document.createElement('button');
decreaseBtn.innerText = '-';
decreaseBtn.className = "subtractionBtn operationBtn";
decreaseBtn.id = "decreaseBtn";

//COUNTER
document.body.appendChild(container).appendChild(displayDiv).appendChild(display)
container.append(operatorDiv)
operatorDiv.prepend(increaseBtn);
operatorDiv.append(decreaseBtn);





//POPUP COLOR SETTINGS
let colorBox = document.createElement('div');
colorBox.className = 'colors-container';
colorBox.classList.add('hidden');
let firstSubtitle = document.createElement('h2');
firstSubtitle.innerText = 'Theme';
let colorsOptions = document.createElement('div');
colorsOptions.className = 'all-bg-colors';
let closeDiv = document.createElement('div');
closeDiv.className = 'center2close'
let closePopUp = document.createElement('button');
closePopUp.className = 'closeBtn';
closePopUp.innerText = 'Done';
//aggiungi colori 
let redBtn = document.createElement('button');
redBtn.className = 'red-bg color'
let yellowBtn = document.createElement('button');
yellowBtn.className = 'yellow-bg color'
let greenBtn = document.createElement('button');
greenBtn.className = 'green-bg color'
let blueBtn = document.createElement('button');
blueBtn.className = 'blue-bg color';
let blackBtn = document.createElement('button');
blackBtn.className = 'black-bg color'
let whiteBtn = document.createElement('button');
whiteBtn.className = 'white-bg color'


document.body.appendChild(colorBox).appendChild(firstSubtitle)
colorBox.append(colorsOptions)
colorsOptions.append(redBtn)
colorsOptions.append(yellowBtn)
colorsOptions.append(greenBtn)
colorsOptions.append(blueBtn)
colorsOptions.append(blackBtn)
colorsOptions.append(whiteBtn)
colorBox.appendChild(closeDiv).appendChild(closePopUp)







let count = 0
decreaseBtn.addEventListener('click', () => {
    {
        display.innerHTML = count--;
        display.innerHTML = count;
    }
})

increaseBtn.addEventListener('click', () => {
    display.innerHTML = count++;
    display.innerHTML = count;
})

resetBtn.addEventListener('click', () => {
    count = 0;
    display.innerHTML = count;
})

modifyBtn.addEventListener('click', () => {
    count = prompt('Where you want to start counting?');

    if (count == '') { display.innerHTML = 'Maybe you forget something' }
    else { display.innerHTML = count; }
})


//POPUP

themeBtn.addEventListener('click', ()=>{
    colorBox.classList.remove('hidden')
})

closePopUp.addEventListener('click', ()=>{
    colorBox.classList.add('hidden')
})

//COLORS
let body = document.getElementsByTagName('body')[0];
let color;

function colorChange(){
    body.style.backgroundColor = color;
    increaseBtn.style.backgroundColor = secondaryColor;    
    decreaseBtn.style.backgroundColor = secondaryColor;
    closePopUp.style.backgroundColor = secondaryColor;
    textColor = '#000000'
    display.style.color = textColor
    modifyImg.src = 'assets/img/black-pen.png'
    resetImg.src = 'assets/img/reset.png';
    themeImg.src = 'assets/img/palette.png';
}

function colorChangeToBlack(){
    textColor = '#ffffff'
    display.style.color = textColor
    modifyImg.src = 'assets/img/white-pen.png'
    resetImg.src = 'assets/img/white-reset.png';
    themeImg.src = 'assets/img/white-palette.png';
}

redBtn.addEventListener('click', ()=>{
    color = '#DC4C64'
    secondaryColor = '#af1010'
    colorChange()
})
yellowBtn.addEventListener('click', ()=>{
    color = '#E4A11B'
    secondaryColor = '#b08227'
    colorChange()
})
greenBtn.addEventListener('click', ()=>{
    color = '#14A44D'
    secondaryColor = '#137b3d'
    colorChange()
})
blueBtn.addEventListener('click', ()=>{
    color = '#3B71CA'
    secondaryColor = '#153f83'
    colorChange()
})
blackBtn.addEventListener('click', ()=>{
    color = '#332D2D'
    secondaryColor = '#ffffff'
    colorChange()
    colorChangeToBlack()
})
whiteBtn.addEventListener('click', ()=>{
    color = '#ffffff'
    secondaryColor = '#393984'
    colorChange()
})

