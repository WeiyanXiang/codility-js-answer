function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 4.0.0)
    if(X==Y) return 0;
    if((Y-X) % D === 0) return (Y-X)/D;
    if((Y-X) % D !== 0) return Math.floor((Y-X)/D)+1;
}