/*select elements ont he page:
canvas, shake button*/
const canvas = document.querySelector('#etch-a-sketch'); /*id tag*/
const ctx = canvas.getContext('2d');  /*setting context of the canvas to 2d*/
const shakeButton = document.querySelector('.shake'); /*grabbing button*/
const MOVE_AMOUNT = 10; /*when it is a true constant - make it all uppercase with underscore*/
/*need to actual width and height to randomize*/
// const width = canvas.width;
// const height = canvas.height;

/*we can short form this using destructuring because we're using the same properties:*/
const { width, height } = canvas;


/*setup canvas for drawing*/
ctx.lineJoin = 'round'; /*set the *brush* it so it's rounded*/
ctx.lineCap = 'round';
ctx.lineWidth = 10; /*increased default width*/

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

/*increment the hue so we can randomize it on keydown!*/

/*randomize the starting spot!*/
let x = Math.floor(Math.random() * width );
let y = Math.floor(Math.random() * height );


/*etch-a-sketch requires a dot on the page to start*/
ctx.beginPath(); /*start the drawing*/
ctx.moveTo(x, y); /*where we're starting*/
ctx.lineTo(x, y); /*where we draw our line to*/
ctx.stroke(); /*put it on the page*/

/*write a draw function*/
function draw({key}){ /*object destructing - rename properties into variables*/
    hue += 6;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; /*update*/
    ctx.beginPath();
    ctx.moveTo(x, y);
    /*switch statement based off 4 different key binds (more readable than if)*/
    switch(key){
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}


/*event handler for the keys*/
function handleKey(event){

    if(event.key.includes('Arrow')){ 
        event.preventDefault(); /*stop default of arrow keys from scrolling the page*/
        draw({key: event.key}); /*only passing in event key as an obj*/
    }
}

/*clear or shake function*/

function clearCanvas(){
    canvas.classList.add('shake'); /*adding shake*/
    ctx.clearRect(0, 0, width, height);
    /*but we keep adding event listeners this way*/
    canvas.addEventListener('animationend', function(){ /*so we can re-add shake, if we dont use this shake will always be on the canvas*/
        canvas.classList.remove('shake'); /*reset*/
    }, {once: true}); /*only add the eventListener once because it unbinds itself!*/
}

/*listen for arrow keys*/
window.addEventListener('keydown', handleKey); /*site-wide by listening on the window*/
shakeButton.addEventListener('click', clearCanvas);