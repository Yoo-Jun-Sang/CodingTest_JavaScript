function solution(my_string) {
    const regexp = /[^0-9]/g
    const new_string = my_string.replace(regexp, "");
    const ary = new_string.split("");
    const compare = (a,b) => {return a-b;};
    const newAry = ary.sort(compare);
    const finalAry = newAry.map((e) => { return Number(e)});
    return finalAry;
}