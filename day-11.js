const input = () => (
`Monkey 0:
  Starting items: 54, 53
  Operation: new = old * 3
  Test: divisible by 2
    If true: throw to monkey 2
    If false: throw to monkey 6

Monkey 1:
  Starting items: 95, 88, 75, 81, 91, 67, 65, 84
  Operation: new = old * 11
  Test: divisible by 7
    If true: throw to monkey 3
    If false: throw to monkey 4

Monkey 2:
  Starting items: 76, 81, 50, 93, 96, 81, 83
  Operation: new = old + 6
  Test: divisible by 3
    If true: throw to monkey 5
    If false: throw to monkey 1

Monkey 3:
  Starting items: 83, 85, 85, 63
  Operation: new = old + 4
  Test: divisible by 11
    If true: throw to monkey 7
    If false: throw to monkey 4

Monkey 4:
  Starting items: 85, 52, 64
  Operation: new = old + 8
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 7

Monkey 5:
  Starting items: 57
  Operation: new = old + 2
  Test: divisible by 5
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 6:
  Starting items: 60, 95, 76, 66, 91
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 2
    If false: throw to monkey 5

Monkey 7:
  Starting items: 65, 84, 76, 72, 79, 65
  Operation: new = old + 5
  Test: divisible by 19
    If true: throw to monkey 6
    If false: throw to monkey 0`
).split(`\n\n`).map(str=>str.split(`\n`).map((i,k)=>{
  i = i.replace(/^.*(Starting items|Operation: new = |Test: divisible by |If true: throw to monkey|If false: throw to monkey)/ig,'').replace(/(\s|:)/ig,'')
  if (k == 1) {i = i.split(',').map(n=>Number(n))}
  if (k == 2) {i = ['old',i[3],i.slice(4) == 'old' ? 'old' : Number(i.slice(4))]}
  if (k > 2) {i = Number(i)}
  return i
}).filter((i,k)=>k>0))
// Output: [
//    [[54,53],['old','*',3],2,2,6],
//    [[95,88,75,81,91,67,65,84],['old','*',11],7,3,4],
//  etc.

const divisorPrime = input().map(i=>i[2]).reduce((a,b)=>a*b) // Common divisor of ALL monkey tests

const doCalc = (monkeStep, worryItem) => { // Perform the calculation of each monkey in inspection phase
  const parseStep = step => step == "old" ? worryItem : Number(step) // Check if the value is "old" and understand it as the worry value
  return (monkeStep[1] == '+') ?
    parseStep(monkeStep[0]) + parseStep(monkeStep[2]) :
    parseStep(monkeStep[0]) * parseStep(monkeStep[2])
}

const answer = (answerNum) => {
  const rounds = answerNum == 1 ? 20 : 10000, // answer 1 means 20 rounds, 2 means 10,000
        monkeHands = [...input().map(i=>i[0])], // deep clone of input array to manipulate as monkey business ensues
        monkeTurns = [0,0,0,0,0,0,0,0] // keeping track of how many turns each monkey has performed
  for (i = 0;i < rounds; i++) {
    input().forEach((mon,key)=>{
      monkeHands[key].forEach(item=>{
        let worryLevel = doCalc(mon[1], item)
        // Below is the complicated one: Answer 1 is simple enough: divide the worry level by 3. Otherwise,
        // we need to control the worry level into a value small enough to be manageable for 10000 cycles, and
        // that will retain its interaction with all divisors. The solution is to use the divisorPrime (for which
        // ALL divisors are a factor) to subtract as many multiples of divisorPrime as we can without affecting
        // the monkey tests. Think of divisorPrime as a repeating pattern in worry levels. We can shave them off
        // and see what's left without changing its relationship to the monkey's divisors
        // Visually you can think of it as: 12345123451234512345123 => [12345][12345][12345][12345][123..] => 123
        // Effectively, the remainder of worryLevel / divisorPrime is what we're after!
        // Also, I'm bad at explaining math
        worryLevel = answerNum == 1 ? Math.floor(worryLevel / 3) : worryLevel % divisorPrime
        const monkeReceiver = (worryLevel % mon[2] > 0) ? mon[4] : mon[3] // Perform the monkey's test
        monkeHands[monkeReceiver].push(worryLevel) // Give the new monkey the item
        monkeTurns[key]++ // count the monkey's turn
      })
      monkeHands[key].length = 0 // after the monkey has thrown all its items, it no longer has any
    })
  }
  monkeTurns.sort((a,b)=>b - a)
  return monkeTurns[0] * monkeTurns[1]
}

console.log(`First answer - ${answer(1)}`)
console.log(`Second answer - ${answer(2)}`)
