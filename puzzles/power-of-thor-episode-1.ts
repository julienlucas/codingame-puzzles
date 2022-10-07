var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    let move = ''
    if (initialTy > lightY) {
      move += 'N'
      initialTy += -1
    } else if (initialTy < lightY) {
      move += 'S'
      initialTy += 1
    }
    if (initialTx > lightX) {
      move += 'W'
      initialTx += -1
    } else if (initialTx < lightX) {
      move += 'E'
      initialTx += 1
    }

    console.log(move)
}