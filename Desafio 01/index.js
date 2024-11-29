const number = '528934712834';
const numberArr = number.split('');
const indications = 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR';
const indicationsArr = indications.split('');
let actualPosition = 0;

indicationsArr.forEach(indication => {
  let actualNumber = Number.parseInt(numberArr[actualPosition]);
  let isMovementInstruction = false;

  switch(indication) {
    case 'U':
      actualNumber = add(actualNumber);
      break;
    case 'D':
      actualNumber = substract(actualNumber);
      break;
    case 'L':
      actualPosition = goBackwards(actualPosition, numberArr.length);
      isMovementInstruction = true;
      break;
    case 'R':
      actualPosition = goForward(actualPosition, numberArr.length);
      isMovementInstruction = true;
      break;
  }

  if(!isMovementInstruction) {
    numberArr[actualPosition] = actualNumber.toString();
  }
});

console.log(numberArr.join(''));

function add(n) {
  let result;

  if(n + 1 > 9) {
    result = 0;
  } else {
    result = n + 1;
  }

  return result;
}

function substract(n) {
  let result;

  if(n - 1 < 0) {
    result = 9;
  } else {
    result = n - 1;
  }

  return result;
}

function goForward(i, arrLength) {
  let result;

  if(i + 1 > arrLength - 1) {
    result = 0;
  } else { 
    result = i + 1;
  }

  return result;
}

function goBackwards(i, arrLength) {
  let result;

  if(i - 1 < 0) {
    result = arrLength - 1
  } else {
    result = i - 1;
  }

  return result;
}