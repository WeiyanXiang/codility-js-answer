function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var max=0,count=-1,r=0;
    while(N>0){
        r=N&1;
        N=N>>1;
        if(r===0 && count>=0){
            count++;
        }
        if(r===1){
            max=Math.max(max, count);
            count=0;
        }
        
    }
    return max;
}