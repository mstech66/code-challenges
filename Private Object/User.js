const username = Symbol("username");
const password = Symbol("password");

let usr = {
    [username]: 'manthan',
    [password]: 'passw0rd',
    age: 20
}

console.log(usr.username);