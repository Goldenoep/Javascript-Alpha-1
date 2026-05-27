function startgame() {
    items = document.querySelectorAll('.title, .controls');

    items.forEach(item => {
        item.style.display = 'none';
    });
    /*document.body.style.color = 240, 240, 240*/

}

let start = false;

let Spacekey = false;
let Upkey = false;
let Wkey = false;

document.addEventListener("keydown", (event) => {
    if (event.key == 'W') {Wkey = true}
    if (event.key == ' ') {Spacekey = true}
    if (event.key == 'ArrowUp') {Upkey = true}

    if (start === false && Spacekey == true) {
        startgame();
        start = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key == 'W') {Wkey = false}
    if (event.key == 'Space') {Spacekey = false}
    if (event.key == 'ArrowUp') {Upkey = false}
});