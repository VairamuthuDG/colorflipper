const colors = [ 'Red', 'Blue', 'Green', 'Orange', 'Pink', 'Cyan','Magenta','Yellow'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    const randomColor = colors[getRandomNumber()];

    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
    
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}