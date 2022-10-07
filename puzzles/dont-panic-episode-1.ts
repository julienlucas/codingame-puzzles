/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const nbFloors = parseInt(inputs[0]); // number of floors
 const width = parseInt(inputs[1]); // width of the area
 const nbRounds = parseInt(inputs[2]); // maximum number of rounds
 const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
 const exitPos = parseInt(inputs[4]); // position of the exit on its floor
 const nbTotalClones = parseInt(inputs[5]); // number of generated clones
 const nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
 const nbElevators = parseInt(inputs[7]); // number of elevators
 const elevators = new Map()
 for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor

   elevators.set(elevatorFloor, elevatorPos)
 }

 console.error(elevators)

 // game loop
 while (true) {
   // `cloneFloor` = floor of the leading clone
   // `clonePos` = position of the leading clone on its floor
   // `direction` = direction of the leading clone: LEFT or RIGHT
   let [cloneFloorRaw, clonePosRaw, direction] = readline().split(' ')
   const cloneFloor = parseInt(cloneFloorRaw)
   const clonePos = parseInt(clonePosRaw)

   const isOnExitFloor = cloneFloor === exitFloor
   const sameFloorElevatorPos = elevators.get(cloneFloor)
   const posToTarget = isOnExitFloor ? exitPos : (sameFloorElevatorPos)
   const targetDirection = clonePos < posToTarget ? 'RIGHT' : 'LEFT'

   // action: WAIT or BLOCK
   if ((clonePos !== posToTarget && targetDirection !== direction) || clonePos === 0 || clonePos === width - 1)
     console.log('BLOCK')
   else console.log('WAIT')
 }