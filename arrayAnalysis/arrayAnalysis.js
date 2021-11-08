function arrayAnalyzed(arr){
    function findAverage(arr){
            let tot =0;
            for(let i=0; i<arr.length; i++){
              tot+=arr[i];
            }
            tot = tot/arr.length
            return tot
          };
    //   let average = findAverage(arr);
    const result = {
        length: arr.length,
        min: arr.sort((a, b) => a > b ? 1 : -1)[0],
        max: arr.sort((a, b) => a > b? 1 : -1)[arr.length-1],
        average: findAverage(arr)
    }
    return result
}

module.exports = arrayAnalyzed;