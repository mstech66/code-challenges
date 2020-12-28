const timeline = document.querySelector('#timeline');

const url = 'https://randomuser.me/api/?results=5';

async function fetchTopFriends() {
    const response = await fetch(url);
    const json = await response.json();
    json.results.forEach((response) => {
        let img = document.createElement('img');
        img.src = response.picture.medium;
        timeline.appendChild(img);
    })
}

fetchTopFriends();