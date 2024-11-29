const fs = require('fs/promises');

async function main() {
    try {
        const inputsArr = await readLog();
        let totalSteps = 0;
        let steps = 0;
        inputsArr.forEach(input => {
          steps = calculateSteps(input.split(' '));
          totalSteps += +steps;
        });

        console.log(totalSteps, '-', steps);
       } catch (err) {
        console.error('Error:', err.message);
    }
}

async function readLog() {
    const filePath = './trace.txt';
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data.split('\n'); 
    } catch (err) {
        throw new Error('Error at reading file: ' + err.message);
    }
}

function calculateSteps(list) {
  let didExit = false;
  let steps = 0;
  let currentPosition = 0;
  let currentValue;

  if(list[0] < 0) {
    didExit = true;
    steps = 1;
  }

  while(!didExit) {
    currentValue = list[currentPosition];
    list[currentPosition] = +currentValue + 1;
    
    currentPosition += +currentValue;
    didExit = +currentPosition < 0 || +currentPosition >= list.length;
    steps += 1;
  };

  return steps;
}

main();
