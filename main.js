import { sum } from "./sum.js"
import { subtract } from "./subtract.js"

function compute(a,b){
    return {
        sum: sum(a,b),
        subtract: subtract(a,b)
    }
}
