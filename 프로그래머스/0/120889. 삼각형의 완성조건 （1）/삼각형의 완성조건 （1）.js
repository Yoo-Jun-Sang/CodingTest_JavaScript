function solution(sides) {
    const compare = (a, b) => {
        return a - b;
    }
    const sorting_sides = sides.sort(compare);
    if (sorting_sides[0] + sorting_sides[1] > sorting_sides[2]) {
        return 1;
    } else {
        return 2;
    }
}