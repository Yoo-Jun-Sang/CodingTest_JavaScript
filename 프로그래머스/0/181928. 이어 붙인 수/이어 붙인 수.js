function solution(num_list) {
    let even_list = [];
    let odd_list = [];
    
    for (i=0; i<num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            even_list.push(num_list[i])
        } else {
            odd_list.push(num_list[i])
        }
    }
    
    return Number(even_list.join('')) + Number(odd_list.join(''));
    
}