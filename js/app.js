// work 1 

// top player title color changed 
const playerTitle = document.getElementById('top-player-title');
playerTitle.innerText = 'The Top Player'
playerTitle.style.color = 'green'

// top blocg title and color changed 
const blogTitle = document.getElementById('top-blog-title');
blogTitle.innerText = 'The Top Blog'
blogTitle.style.color = 'green'


// work 2 

const players = document.getElementsByClassName('single-player')

for (const player of players) {
    player.style.backgroundColor = ' rgba(0, 140, 255, 1)'
    player.style.margin = '5px';
    player.style.borderRadius = '10px'
}


// work 3 
document.getElementById('add-button').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = "add item"
    const append = document.getElementById('list').appendChild(li)
    console.log(append)
})


// word 4 
document.getElementById('incrise-button').addEventListener('click', function () {
    const input = document.getElementById('input');
    let inputValue = parseInt(input.value);
    inputValue = inputValue + 1;
    input.value = inputValue
    if (input.value == 5) {
        document.getElementById('incrise-button').setAttribute('disabled', true)
    }

})

