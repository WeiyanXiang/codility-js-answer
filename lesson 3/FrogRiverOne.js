function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var B = [];
    for(var i=0;i<=X;i++){
        B[i] = 0;
    }
    var position = 0;
    for(var p=0;p<A.length;p++){
        if(B[A[p]] === 0){
            B[A[p]]=1;
            position++;        
        }
        
        if(position===X) return p;
    }
    
    return -1;
}