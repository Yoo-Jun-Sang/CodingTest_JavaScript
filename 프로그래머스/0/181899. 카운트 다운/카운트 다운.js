function solution(start_num, end_num) {
    const sub = [];
    
    for(i = 0; i < start_num - end_num + 1; i++) {
        sub[i] = start_num - i;
    }
    
    return sub;
}