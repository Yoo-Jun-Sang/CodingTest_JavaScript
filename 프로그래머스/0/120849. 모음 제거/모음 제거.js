function solution(my_string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let arr = [...my_string];
    let newArr = arr.filter((e) => !vowel.includes(e));
    let result = newArr.join('');
    return result;
}