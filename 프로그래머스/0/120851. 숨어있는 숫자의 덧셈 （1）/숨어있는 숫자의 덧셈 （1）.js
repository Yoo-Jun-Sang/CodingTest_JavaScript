function solution(my_string) {
    let regexp = /[^0-9]/g;
    let new_string = my_string.replace(regexp, "");
    let ary = new_string.split("");
    let aryToNumber = ary.map((e) => Number(e));
    let count = 0;
    for(i=0; i<aryToNumber.length; i++) {
        count += aryToNumber[i];
    }
    return count;
}