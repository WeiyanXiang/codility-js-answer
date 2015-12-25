function solution(A) {
    var sum = 0;
    for(var i=0;i<A.length;i++){
        sum+= A[i];    
    }
    var left=0, right=0, mini=Number.MAX_SAFE_INTEGER;
    for(var q=1;q<A.length;q++){
        left += A[q-1];
        right = sum - left;
        if(Math.abs(left-right) < mini) mini = Math.abs(left-right);
    }
    return mini;
}