const div = (...nums) =>{
    const reducer=(p,c) => p/c;
    return(nums.reduce(reducer));
}

module.exports.div=div