function solution(a, b) {
    let stringA = a.toString();
    let stringB = b.toString();
    
    let plusAB = parseInt(stringA + stringB);
    let plusBA = parseInt(stringB + stringA);
    
    if(plusAB >= plusBA) {
        return plusAB;
    } else {
        return plusBA;
    }
}