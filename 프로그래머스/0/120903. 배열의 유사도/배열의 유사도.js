function solution(s1, s2) {
    let intersection = s1.filter((e) => s2.includes(e));
    let count = intersection.length;
    return count;
}