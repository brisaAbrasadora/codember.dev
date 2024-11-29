const fs = require('fs/promises');

async function main() {
    try {
        const inputsArr = await readLog();
        let success = 0;
        let errors = 0;
        inputsArr.forEach(input => {
          if(isInOrder(input.charCodeAt(0), input.substring(1))) {
            success += 1;
          } else {
            errors += 1;
          };
        });

        console.log(success, 'true', errors, 'false');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

async function readLog() {
    const filePath = './log.txt';
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data.split('\n'); 
    } catch (err) {
        throw new Error('Error at reading file: ' + err.message);
    }
}

function isInOrder(actualChar, nextChars) {
  if (nextChars.length === 0) {
    return true;
  }

  const nextChar = nextChars.charCodeAt(0);

  if (actualChar > nextChar) {
    return false;
  }

  return isInOrder(nextChar, nextChars.substring(1));
}

main();
