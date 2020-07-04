function double(number){
    if(typeof number !== 'number'){
        throw new Error(`value expected: number. value received: ${typeof number}`);
    }
    return number * 2;
}