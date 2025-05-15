function solution(hp) {
    const topAnt = Math.floor(hp / 5);
    const middleAnt = Math.floor((hp % 5) / 3);
    const bottomAnt = (hp % 5) % 3;
    
    return topAnt + middleAnt + bottomAnt;
    
}