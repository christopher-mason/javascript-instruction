function findMaxAndIndex(values) {
    let maxFound = -Infinity;
    let maxIndex;

    for (let i = 0; i < values.length; ++i) {
        if (values[i] > maxFound) {
            maxFound = values[i];
            maxIndex = i;
        }
    }

    let retVal = {}; // curlys here indicate that you have created an object.
    retVal.max = maxFound;
    retVal.index = maxIndex;

    return retVal;
    // return {max: maxFound, index: maxIndex};
}

let mAndI = findMaxAndIndex([4, 17, 3]);
console.log(mAndI);