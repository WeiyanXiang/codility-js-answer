function solution(A, B, K) {
    // write your code in JavaScript (Node.js 4.0.0)
    if(A % K===0 && B % K===0) return Math.floor((B-A)/K)+1;
    if(A % K===0 && B % K!==0) return Math.floor((B-A)/K)+1;
    if(A % K!==0 && B % K===0) return Math.floor((B-A)/K)+1;
    if(A % K!==0 && B % K!==0) return Math.floor((B-A)/K);
}