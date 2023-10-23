function solution(angle) {
    var check = 0;
    if (angle > 0 && angle < 90) {
        check = 1;
    } else if (angle === 90) {
        check = 2;
    } else if (angle > 90 && angle < 180) {
        check = 3;
    } else {
        check = 4;
    }
    
    return check;
}
        
