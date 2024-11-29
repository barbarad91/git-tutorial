import { sum } from "./sum.js"
import { subtract } from "./subtract.js"

function compute(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Please provide two numbers'
    }
    return {
        sum: sum(a,b),
        subtract: subtract(a,b)
    }
}
