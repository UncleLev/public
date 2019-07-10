function renderItem(obj, text, parentNode) {
    let check = true;
    let count;

    parentNode.childNodes.forEach((el, i) => {
        if (i != 0) {
            
            if (el.getAttribute('id') == obj._id) {
                check = !check;
                count = Number(el.firstElementChild.textContent);
                el.firstElementChild.textContent = count + 1;
                // el.q
                // console.log(el.querySelector('.authorlist__text'));
                
                el.querySelector('.authorlist__text').textContent = text;
                text
                el.classList.add('authorlist__item--added');
                setTimeout(() => {
                    el.classList.remove('authorlist__item--added');
                }, 1000);
            } 
        }
    })

    if (check) {

        const AuthorItem = document.createElement('LI');
        AuthorItem.classList.add('authorlist__item');
        AuthorItem.classList.add('authorlist__item--added');
        AuthorItem.setAttribute('id', obj._id);

        setTimeout(() => {
            AuthorItem.classList.remove('authorlist__item--added');
        }, 1000);

        const countOfShout = document.createElement('span');
        countOfShout.classList.add('count-of-shouts');
        countOfShout.textContent = 1;

        const AuthorName = document.createElement('p');
        AuthorName.classList.add('authorlist__name')
        AuthorName.textContent = obj.name;

        const AuthorText = document.createElement('p');
        AuthorText.classList.add('authorlist__text')
        AuthorText.textContent = text;

        let arr = [countOfShout, AuthorName, AuthorText];

        arr.forEach((el) => {
            AuthorItem.appendChild(el);
        })
        parentNode.appendChild(AuthorItem);
    }
}

function e(e) {
    renderItem(e.detail.author, e.detail.text, x);
}

x.addEventListener("shout", e);