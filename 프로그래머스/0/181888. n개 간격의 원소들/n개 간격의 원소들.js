function solution(num_list, n) {
    const newArr = [num_list[0]];
    for(i = 1; i < num_list.length; i++) {
        if(i % n === 0) {
            newArr.push(num_list[i]);
        }
    }
    
    return newArr;
}