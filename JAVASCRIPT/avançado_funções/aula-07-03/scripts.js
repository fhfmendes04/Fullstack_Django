function factorial2(n){
    if(n === 0){
        return 1;
    }else{
        var product = 1;
        for(var i = 1; i <= n; i++){
            product *= i;
        }
        return product;
    }
}

function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

