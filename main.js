function zeroOrOne() {
    return Math.round(Math.random())
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < 100; i++) {
    var div = document.createElement('div')
    div.classList.add(zeroOrOne() === 1 ? 'active' : 'inactive')
    fragment.appendChild(div)
}

document.body.querySelector('.automata').appendChild(fragment)
