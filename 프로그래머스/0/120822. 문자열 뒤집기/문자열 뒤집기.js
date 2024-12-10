function solution(my_string) {
    let toArray = [...my_string];
    let reverseArray = toArray.reverse();
    let result = reverseArray.join('');
    return result;
}