const mul = (...nums) =>{
    const reducer=(p,c) => p*c;
    return(nums.reduce(reducer,1));
}

module.exports.mul=mul