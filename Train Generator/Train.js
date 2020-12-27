function* checkoutStation() {
    yield 'Poughkeepsie';
    yield 'Newburgh';
    yield 'Peekskill';
    yield 'Yonkers';
    yield 'Bronx';
    yield 'Grand Central';
}

let stations = checkoutStation();

document.querySelector('#next-stop').addEventListener('click', () => {
    const stop = stations.next();
    if (stop.done) {
        console.log('We Made it!');
        document.querySelector('#next-stop').setAttribute('disabled', true);
    }
    else {
        console.log(`At ${stop.value} Station`);
    }
});