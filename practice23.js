function isValidParen(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if(stack.length === 0) return false;
            let top = stack.pop();
            if(char === ')' && top !== '(') return false;
            if(char === ']' && top !== '[') return false;
            if(char === '}' && top !== '{') return false;
        }
    }
    return stack.length === 0;
}
console.log(isValidParen("()[]{}"));
console.log(isValidParen("(]"));