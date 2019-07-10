// http://127.0.0.1:5500/index.html
"use strict";



function randomNumber(from, to) {
    if (from > to) {
        let tmp = from;
        from = to;
        to = tmp;
    }
    return Math.floor((Math.random() * to) + from)
}

function makeRandomText(wordsCounts) {
    let result = '';
    let UperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    let i = 0;
    let j = 0;
    while (j <= wordsCounts) {
        j++;
        for (i = 0; i < randomNumber(4, 10); i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result += ' ';
    }
    return ` ${UperCharacters.charAt(Math.floor(Math.random() * UperCharacters.length))}${result}.`;
}



function StartinfDispatchEvent() {

    timer = setInterval(() => {
        interval = randomNumber(1000, 5000);
        let event = new CustomEvent(
            "shout", {
                "detail": {
                    author: authorsList[randomNumber(0, authorsList.length)],
                    text: makeRandomText(randomNumber(5, 20)),
                }
            }
        )
        ShoutsList.dispatchEvent(event);
    }, interval);
}



function k() {
    if (pause) {
        pause = false;
        StartinfDispatchEvent();
        btnControle.textContent = 'pause';
        btnControle.classList.add('btn--pause');
        btnControle.classList.remove('btn--resume');
    } else {
        pause = true;
        clearInterval(timer);
        btnControle.textContent = 'resume';
        btnControle.classList.remove('btn--pause');
        btnControle.classList.add('btn--resume');
    }
}

const authorsList = [{
    _id: 1,
    name: 'Todd',
},
{
    _id: 2,
    name: 'Rob',
},
{
    _id: 3,
    name: 'Sevil',
},
];

const btnControle = document.querySelector('#js-btn');
const AuthorList = document.querySelector('.authorlist');
const ShoutsList = document.querySelector('.ShoutsList');

let interval = randomNumber(1000, 5000);
let pause = true;
let timer;

k();
btnControle.addEventListener('click', k)