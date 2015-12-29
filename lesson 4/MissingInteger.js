function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var B = [];
    for(var i=0;i<A.length+1;i++){
        B[i] = 0;     
    }
    for(var p=0;p<A.length;p++){
        if (A[p] >= 1 && A[p] <= A.length && B[A[p]] === 0){
            B[A[p]] = 1;    
        }
    }
    for(var q=1;q<A.length+1;q++){
        if(B[q]===0) return q;    
    }
    return A.length+1;
    
}