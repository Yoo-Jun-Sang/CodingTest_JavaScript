function solution(my_string, index_list) {
    arr = [...my_string];
    newArr = [];
    for(i = 0; i < index_list.length; i++) {
        newArr[i] = arr[index_list[i]];
    }
    newString = newArr.join('');
    return newString;
}