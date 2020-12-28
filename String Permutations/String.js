function calculatePerm(letters) {
    if (letters.length < 2) return letters;

    let perms = [];

    for (let i = 0; i < letters.length; i++) {
        let char = letters[i];
        let remaining = letters.slice(0, i) + letters.slice(i + 1, letters.length);

        for (let subPerm of calculatePerm(remaining))
            perms.push(char + subPerm);
    }
    return perms;
}

console.log(calculatePerm("hello").length);