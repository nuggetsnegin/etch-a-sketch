console.log('it works')

/*select elements ont he page:
canvas, shake button*/
const canvas = document.querySelector('#etch-a-sketch'); /*id tag*/
const ctx = canvas.getContext('2d');  /*setting context of the canvas to 2d*/
console.log(ctx);
const shakeButton = document.querySelector('.shake'); /*grabbing button*/

/*need to actual width and height to randomize*/
// const width = canvas.width;
// const height = canvas.height;

/*we can short form this using destructuring because we're using the same properties:*/
const { width, height } = canvas;


/*setup canvas for drawing*/
ctx.lineJoin = 'round'; /*set the *brush* it so it's rounded*/
ctx.lineCap = 'round';
ctx.lineWidth = 10; /*increased default width*/


/*etch-a-sketch requires a dot on the page to start*/
ctx.beginPath(); /*start the drawing*/
ctx.moveTo(200, 200); /*where we're starting*/
ctx.lineTo(200, 200); /*where we draw our line to*/
ctx.stroke();

/*randomize the starting spot!*/




/*write a draw function*/

/*event handler for the keys*/

/*clear or shake function*/

/*listen for arrow keys*/