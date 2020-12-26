function getCombinedMenu(menus) {
    let flatMenu = menus.flat();
    let combinedMenu = new Set();
    flatMenu.forEach(element => {
        combinedMenu.add(element);
    });
    let ulMenu = document.querySelector('#combined-menu');
    combinedMenu.forEach(element => {
        let item = document.createElement('li');
        item.textContent = element;
        ulMenu.appendChild(item);
    })
}

getCombinedMenu([['Pizza', 'Panipuri'], ['Pizza', 'Dabeli', 'Vadapaav'], ['Burger', 'Pizza', 'Bagels']]);