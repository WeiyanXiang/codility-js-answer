function solution(A, B, K) {
    // write your code in JavaScript (Node.js 4.0.0)
    var lower = A % K == 0 ? Math.floor( A / K) -1 :  Math.floor(A / K);
    var upper =  Math.floor( B / K );
    return upper - lower;
}