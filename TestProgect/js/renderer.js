function renderItem(obj, text, parentNode, listParent) {
    let IsElementInListCheck = false;
    let count;

    parentNode.childNodes.forEach((element, i = 1) => {
        if (i != 0) {
            if (element.getAttribute('id') == obj._id) {
                const AuthorItem = document.createElement('LI');

                IsElementInListCheck = true;
                console.log('в списку');
                
            } else {
                console.log('no в списку ');

            }
        }
    });
    if(IsElementInListCheck) {
        
    }
    console.log(IsElementInListCheck);
    
    const AuthorItem = document.createElement('LI');
    AuthorItem.classList.add('authorlist__item');
    AuthorItem.classList.add('authorlist__item--added');
    AuthorItem.setAttribute('id', obj._id);
    setTimeout(() => {
        AuthorItem.classList.remove('authorlist__item--added');
    }, 1000);

    const AuthorName = document.createElement('p');
    AuthorName.classList.add('authorlist__name')
    AuthorName.textContent = obj.name;

    const AuthorText = document.createElement('p');
    AuthorText.classList.add('authorlist__text')
    AuthorText.textContent = text;

    const ArrayOfElemnts = [AuthorName, AuthorText];

    ArrayOfElemnts.forEach((element) => {
        AuthorItem.appendChild(element);
    })
    parentNode.appendChild(AuthorItem);
}

function e(event) {
    renderItem(event.detail.author, event.detail.text, ShoutsList, AuthorList);
}

ShoutsList.addEventListener("shout", e);