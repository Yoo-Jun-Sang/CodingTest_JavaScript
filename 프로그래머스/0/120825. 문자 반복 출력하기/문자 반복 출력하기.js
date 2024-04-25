function solution(my_string, n) {
    const toArray = [...my_string];
    const newArray = toArray.map((e) => {
        return e.repeat(n)
    });
    const newString = newArray.join('');
    
    return newString;
}