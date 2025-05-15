function solution(box, n) {
    const ho = Math.floor(box[0] / n)
    const ve = Math.floor(box[1] / n)
    const he = Math.floor(box[2] / n)
    return ho * ve * he ;
}