function solution(numbers) {
    let result = 0;
    const compare = (a, b) => {
        return a - b;
    }
    
    let new_numbers = numbers.sort(compare);
    result = new_numbers[new_numbers.length-1] * new_numbers[new_numbers.length-2]
    
    return result;
}