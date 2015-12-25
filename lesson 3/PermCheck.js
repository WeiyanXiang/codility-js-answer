function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var B = [];
    for(var i=1;i<A.length+1;i++){
        B[i] = 0;    
    }
    for(var p=0;p<A.length+1;p++){
        B[A[p]]=1;    
    }
    for(var q=1;q<B.length;q++){
        if(B[q] === 0) return 0;    
    }
    return 1;
}