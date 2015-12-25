function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var east=0,sum=0;
    for(var i=0;i<A.length;i++){
        if(A[i]===0){
            east++;   
        }   
        else{
            if(sum>1000000000) return -1;
            sum += east;
        }
    }
    return sum;
}