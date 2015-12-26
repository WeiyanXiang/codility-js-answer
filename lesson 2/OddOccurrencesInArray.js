function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A.sort();
    for(var i=0;i<A.length-1;i=i+2){
        if(A[i]===A[i+1]){
            A[i]=0;
            A[i+1]=0;
        }  
    }
    for(var p=0;p<A.length;p++){
        if(A[p]!==0) return A[p];    
    }
    return A[A.length-1];
}