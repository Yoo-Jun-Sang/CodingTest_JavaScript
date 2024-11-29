function solution(my_string) {
    let trim_string = my_string.trim();
    let result = trim_string.split(/ +/);
    return result;
}
