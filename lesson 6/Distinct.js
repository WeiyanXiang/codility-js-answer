function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var N = A.length;
    if(N===0) return 0;
    A.sort(sortNumber);
    
    var counter = 1;
    for(var i=0;i<N-1;i++){
        if(A[i] != A[i+1]) counter++;  
    }
    return counter;
}

function sortNumber(a,b){
   return a - b;
}