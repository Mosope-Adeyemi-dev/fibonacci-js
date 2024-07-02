function fibonacciSequence(num) {
    let fibSequence = [0, 1]
    if(num === 0) { // base case 1
        return [0]
    } else if(num === 1) { // base case 2
        return [0, 1]
    } else {
        for(let i = 2; i <= num; i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2] // sum the last 2 elements of n - 1 sequence
        }
        return fibSequence; // return final sequence
    }
}

let n = 2
const sequence = fibonacciSequence(n)
console.log("Sequence: ", sequence)