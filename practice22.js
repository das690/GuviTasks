function isAnagram(s, t) {
    if(s.length !== t.length) return false;
    let counter = {};
    for(let i = 0; i < s.length; i++) {
        let letter = s[i];
        if(counter[letter]) {
            counter[letter]++;
        } else {
            counter[letter] = 1;
        }
    }
    for(let i = 0; i < t.length; t++) {
        let letter = t[i];
        if(!counter[letter]) {
            return false;
        }
        counter[letter]--;
    }
    return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("rat", "cat"));