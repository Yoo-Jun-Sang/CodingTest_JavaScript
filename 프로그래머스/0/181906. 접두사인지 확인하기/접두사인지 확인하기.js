function solution(my_string, is_prefix) {
    if(my_string.slice('', is_prefix.length) === is_prefix.slice('')) {
        return 1;
    }
    return 0;
}