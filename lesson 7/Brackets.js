function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    var N = S.length;
    if(N%2 !== 0) return 0;
    var num = 0;
    var stack = [];
    
    for(var i=0;i<S.length;i++){
        if(S[i] === '(' || S[i] === '{' || S[i] === '['){
            // assume push '(' into stack.
            num++;
            stack[num]=S[i];
        }else if(num !== 0){
            // else popout one '(' in stack to compensate one ')'
            if( (stack[num]==='(' && S[i]===')') || (stack[num]==='{' && S[i]==='}') || (stack[num]==='[' && S[i]===']')){
                stack[num]=null;
                num--;  
            }
            
        }else{
            // else it is not nested
            return 0;   
        }    
    }
    if(num === 0) return 1;
    return 0;
}