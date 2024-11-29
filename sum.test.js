import { sum } from './sum.js'

function testSum() {
  const result = sum(1, 2)
  if (result !== 3) {
    throw new Error('Expected 1 + 2 to equal 3')
  }
console.log('All tests pass!')
}

testSum()
