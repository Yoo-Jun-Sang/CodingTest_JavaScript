function solution(rsp) {
    rspArr = [...rsp];
    const resultArr = rspArr.map((e) => {
        if(e === "2") {  
            return 0;
        } else if(e === "0") {
            return 5;
        } else {
            return 2;
        }
    });
    
    const resultString = resultArr.join('');
    
    return resultString;
}