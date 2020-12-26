function calculateTotal(coffee) {
    let pricePerCoffee = 1.25;
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return `The total bill is $${coffee.reduce(reducer) * pricePerCoffee}`;
}

console.log(calculateTotal([2, 3, 1, 5]));