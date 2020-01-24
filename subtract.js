const diff = (...nums) =>{
    const reducer=(p,c) => p-c;
    return(nums.reduce(reducer));
}

module.exports.diff=diff