function renderItem(obj, text, parentNode, listParent) {
    let IsElementInListCheck = false;
    let count;

    listParent.childNodes.forEach((element, i) => {

        if (i != 0) {
            if (element.getAttribute('Author-id') == obj._id) { //updating count of shouts
                IsElementInListCheck = true;
                count = Number(element.lastChild.textContent);
                element.lastChild.textContent = count + 1;
            }
        }
    });
    if (!IsElementInListCheck) { //if first shout of author add name, count to list 

        const AuthorItem = document.createElement('LI');
        AuthorItem.classList.add('authorlist__item')

        const CountOfShout = document.createElement('SPAN');
        CountOfShout.textContent = 1;
        AuthorItem.textContent = `${obj.name} : `;
        
        AuthorItem.append(CountOfShout);
        listParent.append(AuthorItem);
        AuthorItem.setAttribute('Author-id', obj._id);
    }

    //rendering shout
    const ShoutItem = document.createElement('LI');
    ShoutItem.classList.add('Shoutlist__item');
    ShoutItem.classList.add('Shoutlist__item--added');
    ShoutItem.setAttribute('id', obj._id);
    setTimeout(() => {
        ShoutItem.classList.remove('Shoutlist__item--added');
    }, 1000);

    const AuthorName = document.createElement('p');
    AuthorName.classList.add('Shoutlist__name')
    AuthorName.textContent = obj.name;

    const AuthorText = document.createElement('p');
    AuthorText.classList.add('Shoutlist__text')
    AuthorText.textContent = text;

    const ArrayOfElemnts = [AuthorName, AuthorText];

    ArrayOfElemnts.forEach((element) => {
        ShoutItem.appendChild(element);
    })
    parentNode.prepend(ShoutItem);
}

function OnShoutRendering(event) {
    renderItem(event.detail.author, event.detail.text, ShoutsList, AuthorList);
}

ShoutsList.addEventListener("shout", OnShoutRendering);