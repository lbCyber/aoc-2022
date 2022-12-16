const input = (
`noop
noop
noop
addx 5
noop
addx 1
noop
addx 4
addx 25
addx -20
noop
noop
addx 5
addx 3
noop
addx 2
noop
noop
addx -1
addx 6
addx 1
noop
addx 4
noop
addx -37
noop
noop
noop
addx 3
addx 32
addx -25
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 2
addx -24
addx 25
addx 5
addx 2
addx 8
addx -23
addx 18
addx 5
addx -39
addx 11
addx -9
addx 6
addx -2
addx 5
addx 4
addx -4
addx 3
addx 5
addx 2
noop
addx -1
addx 6
addx -21
addx 22
addx 3
addx 1
addx 5
noop
noop
addx -35
noop
noop
noop
noop
addx 37
addx -33
noop
addx 6
addx 2
addx -1
addx 3
addx 1
addx 5
addx 2
addx -19
addx 21
addx 1
addx 5
addx -31
addx 36
noop
addx 3
addx -2
addx -38
noop
noop
addx 7
addx 14
addx -4
addx -7
addx 5
addx 2
addx 12
addx -15
addx 6
addx 2
addx 5
addx -27
addx 25
addx 5
noop
addx 7
addx -2
addx 5
addx -40
noop
addx 7
noop
addx -1
addx 2
addx 5
addx -1
addx 1
addx 2
addx 7
noop
addx -2
noop
addx 3
addx 2
addx 7
noop
noop
addx 1
noop
noop
addx 3
addx 1
noop
noop
noop`
).split(`\n`).map(str=>str.split(' '))

const signal = {
  currCycle: 1, // record which clock cycle currently on
  regX: 1, // State of X register
  intSum: 0, // Output for answer 1
  display: "" // Output for answer 2
}

const signalTick = (addX = 0) => {
  const sigStrength = signal.currCycle * signal.regX,
        intCycle = (signal.currCycle + 20) % 40, // determine if current cycle is flagged for answer 1
        redraw = (signal.currCycle % 40) - 1, // determine if current cycle begins new line on CRT display
        pxDist = redraw - signal.regX // How far is X register from pixel being drawn?
  signal.intSum += intCycle == 0 ? sigStrength : 0
  signal.display += redraw == 0 ? `\n` : '' // draw new line
  signal.display += [-1,0,1].includes(pxDist) ? `#` :  `.` // if X is within a range of one pixel, draw it
  signal.currCycle++ // record cycle completed
  signal.regX += addX // register X change if processed
}

const runCycle = (lineCmd) => { // Sends line command to CPU
  signalTick()
  if (lineCmd[1]) { signalTick(Number(lineCmd[1])) } // if entry is an addX entry, do additional cycle
}

const answer = (answerNum) => {
  input.forEach(line=>{ runCycle(line) })
  switch(answerNum) {
    case 1:
      return signal.intSum
    case 2:
      return `\n${signal.display}`
  }
}

console.log(`First answer - ${answer(1)}`)
console.log(`Second answer - ${answer(2)}`)
