function solution(strlist) {
    let arr = [];
    for(let i = 0; i < strlist.length; i++) {
       arr[i] = strlist[i].length;
    }
    return arr;
}