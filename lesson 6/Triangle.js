function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var N = A.length;
    if (N<3) return 0;
    
    A.sort(sortNumber);
    for(var i=0;i<N-2;i++){
        if(A[i]+A[i+1]>A[i+2]) return 1;    
    }
    return 0;
}

function sortNumber(a,b){
   return a - b;
}