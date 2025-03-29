function solution(my_string, letter) {
    const regex = new RegExp(`[${letter}]`, 'g');
    const result = my_string.replace(regex, '');
    return result;
}