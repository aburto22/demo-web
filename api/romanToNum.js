function romanToUnits(roman) {
  const romanUnits = [undefined, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  return romanUnits.indexOf(roman).toString();
}

function romanToTens(roman) {
  const romanTens = [undefined, 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  return romanTens.indexOf(roman).toString();
}

function romanToHundreds(roman) {
  const romanHundreds = [undefined, 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  return romanHundreds.indexOf(roman).toString();
}

function romanToThousands(roman) {
  const romanThousands = [undefined, 'M', 'MM', 'MMM'];
  return romanThousands.indexOf(roman).toString();
}

function romanToNum(roman) {
  if (typeof roman !== 'string') {
    return 'please provide a string';
  }

  if (!roman) {
    return 'please provide a roman number';
  }

  const romanNumberRegex = /^(M|MM|MMM)?(C|CC|CCC|CD|D|DC|DCC|DCCC|CM)?(X|XX|XXX|XL|L|LX|LXX|LXXX|XC)?(I|II|III|IV|V|VI|VII|VIII|IX)?$/;

  if (!romanNumberRegex.test(roman)) {
    return 'please provide a valid roman number';
  }

  if (/^MMM.+/.test(roman)) {
    return 'please provide a roman number equal or below MMM';
  }
  const [, romanThousands, romanHundreds, romanTens, romanUnits] = roman.match(romanNumberRegex);

  const result = romanToThousands(romanThousands)
    + romanToHundreds(romanHundreds)
    + romanToTens(romanTens)
    + romanToUnits(romanUnits);

  return Number(result);
}

module.exports = romanToNum;
