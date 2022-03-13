export function convertNumber(number: number): string {
  if (number >= 1000000) {
    return 'not supported';
  }
  if (number >= 1000) {
    const reminder = number % 1000;
    const thousands = Math.floor(number / 1000);

    let result = '';
    if (thousands !== 1) {
      result = convertNumber(thousands) + '-';
    }
    result = result + 'mille';

    if (reminder) {
      return result + '-' + convertNumber(reminder);
    } else if (Math.floor(number / 1000) !== 1) {
      // 4000, 45000, 585000
      return result + 's';
    } else {
      // 1000
      return result;
    }
  }

  if (number >= 100) {
    const reminder = number % 100;
    const hundred = handleHundreds(number);
    if (reminder) {
      return hundred + '-' + convertNumber(reminder);
    } else if (Math.floor(number / 100) !== 1) {
      // 200, 300
      return hundred + 's';
    } else {
      // 100
      return hundred;
    }
  }

  return handleTens(number);
}

export function convertNumbers(numbers: number[]): string[] {
  return numbers.map((number) => {
    if (number === 0) {
      return 'zéro';
    }
    return convertNumber(number);
  });
}

function getRawNames(number: number): string {
  switch (number) {
    case 1: {
      return 'un';
    }
    case 2: {
      return 'deux';
    }
    case 3: {
      return 'trois';
    }
    case 4: {
      return 'quatre';
    }
    case 5: {
      return 'cinq';
    }
    case 6: {
      return 'six';
    }
    case 7: {
      return 'sept';
    }
    case 8: {
      return 'huit';
    }
    case 9: {
      return 'neuf';
    }
    case 10: {
      return 'dix';
    }
    case 11: {
      return 'onze';
    }
    case 12: {
      return 'douze';
    }
    case 13: {
      return 'treize';
    }
    case 14: {
      return 'quatorze';
    }
    case 15: {
      return 'quinze';
    }
    case 16: {
      return 'seize';
    }
    case 17: {
      return 'dix-sept';
    }
    case 18: {
      return 'dix-huit';
    }
    case 19: {
      return 'dix-neuf';
    }
    case 20: {
      return 'vingt';
    }
    case 30: {
      return 'trente';
    }
    case 40: {
      return 'quarante';
    }
    case 50: {
      return 'cinquante';
    }
    case 60: {
      return 'soixante';
    }
    case 70: {
      return 'soixante';
    }
    case 80: {
      return 'quatre-vingt';
    }
    case 90: {
      return 'quatre-vingt';
    }
  }
  return '';
}

export function handleTens(number: number): string {
  function getInterword(number: number, reminder: number) {
    // special case quatre-vingtS
    if (number === 80) {
      return 's';
    }
    // special case 21 71 91...
    if (reminder === 1 || reminder === 11) {
      // special case 81
      if (Math.floor(number / 10) == 8) {
        return '-';
      }
      return '-et-';
    }

    // special case 20 30 40 ...
    if (reminder === 0) {
      return '';
    }
    return '-';
  }

  if (number < 0 || number >= 100) {
    return '';
  }
  if (number < 20) {
    return getRawNames(number);
  }

  const tenName = getRawNames(Math.floor(number / 10) * 10);
  let reminder;
  if (number < 70) {
    reminder = number % 10;
  } else {
    reminder = number % 20;
  }
  const reminderName = getRawNames(reminder);
  const interword = getInterword(number, reminder);

  return tenName + interword + reminderName;
}

export function handleHundreds(number: number): string {
  if (number < 100 || number >= 1000) {
    return '';
  }
  const hundred = Math.floor(number / 100);

  const hundredName = `${hundred !== 1 ? getRawNames(hundred) + '-' : ''}cent`;
  return hundredName;
}
