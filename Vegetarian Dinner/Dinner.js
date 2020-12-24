let dishes = [
    {
        name: 'Spagetti and Meatballs',
        vegetarian: false
    },
    {
        name: 'Chicken Masala',
        vegetarian: false
    },
    {
        name: 'Aloo Matar',
        vegetarian: true
    },
    {
        name: 'Paneer Tikka',
        vegetarian: true
    }
]

let vegetarianDishes = dishes.filter(dish => dish.vegetarian);

let menu =  document.querySelector('#menu');
vegetarianDishes.forEach((dish) => {
    let item = document.createElement('li');
    item.textContent = dish.name;
    menu.appendChild(item);
});

console.log(menu);