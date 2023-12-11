function solution(my_string, k) {
    let replay_string =''
   for(i = 0; i < k; i++) {
       replay_string = replay_string + my_string;
   }
    return replay_string;
}