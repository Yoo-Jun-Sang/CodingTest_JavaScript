function solution(dot) {
    let result = 0;
    if (dot[0] > 0) {
        if (dot[1] > 0) {
            result = 1;
        } else {
            result = 4;
        }
    }
    if (dot[0] < 0) {
        if (dot[1] > 0) {
            result = 2;
        } else {
            result = 3;
        }
    }
    
    return result;
}