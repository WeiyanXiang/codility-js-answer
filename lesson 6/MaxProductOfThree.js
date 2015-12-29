function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A.sort(sortNumber);
    var max = -1000000000;
    var temp = 0;
    
    for(var i=1;i<A.length-1;i++){
        if(A[i]<0){
            temp = Math.max(A[0]*A[1]*A[A.length-1],A[i-1]*A[i]*A[i+1]);
        }else{
            temp = A[i-1]*A[i]*A[i+1];
        }
        if(temp>max) max=temp;
    }
    return max;
}
function sortNumber(a,b){
   return a - b;
}