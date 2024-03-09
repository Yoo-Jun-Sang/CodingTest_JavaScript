function solution(start_num, end_num) {
    const num = [];
    
    for(i = 0; i < end_num - start_num + 1; i++) {
        num[i] = start_num + i;
    }
    
    return num;
}