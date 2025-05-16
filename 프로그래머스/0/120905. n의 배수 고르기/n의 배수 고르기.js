function solution(n, numlist) {
    const newAry = [];
    for(i=0; i<numlist.length; i++) {
        if(numlist[i] % n === 0) {
            newAry.push(numlist[i]);
        }
    }
    
    return newAry;
}