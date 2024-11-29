import { subtract } from './subtract.js'

function testSubtract() {
  const result = subtract(1, 2)
  if (result !== -1) {
    throw new Error('Expected 1 - 2 to equal -1')
  }
console.log('All tests pass!')
}

testSubtract()
