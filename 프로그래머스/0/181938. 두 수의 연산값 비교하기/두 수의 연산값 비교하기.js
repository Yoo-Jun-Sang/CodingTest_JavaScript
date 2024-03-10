function solution(a, b) {
    let stringA = a.toString();
    let stringB = b.toString();
    
    let plusAB = parseInt(stringA + stringB);
    let mul = 2 * a * b;
    
    if(plusAB >= mul) {
        return plusAB;
    } else {
        return mul;
    }
    
    
}