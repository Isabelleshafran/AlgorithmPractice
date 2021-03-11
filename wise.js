function checkDetailsAreValid(accountNumber, bankCode) {
  let bankCodeChars = bankCode.slice(0, 2);
  let bankCodeNums = bankCode.slice(2);
  let isBankCodeValid = false;
  if (bankCodeChars.length === 2 && !isNumber(bankCodeChars)) {
    if (bankCodeNums.length === 2 && isNumber(bankCodeNums)) {
      isBankCodeValid = true;
    }
  }
  if (!accountNumber.split("").includes("-")) return false;

  let isAccountValid = false;
  let checkSum = accountNumber.split("-")[0];
  let remainingNums = accountNumber.split("-")[1];

  if (checkSum.length === 1 || (checkSum.length === 2 && isNumber(checkSum))) {
    if (remainingNums.length === 7 && isNumber(remainingNums)) {
      isAccountValid = true;
    }
  }
  if (isAccountValid && isBankCodeValid) {
    return findCheckSum(remainingNums, bankCode);
  } else {
    return "";
  }
}

function isNumber(char) {
  return !isNaN(char);
}

function findCheckSum(remainingNums, bankCode) {
  let obj = {
    0: 7,
    1: 3,
    2: 1,
    3: 5,
    4: 2,
    5: 4,
    6: 8,
    7: 6,
    8: 1,
    9: 6,
    10: 5,
  };

  let combined = remainingNums.concat(bankCode);
  let weight = 105;

  for (let i = 0; i < combined.length; i++) {
    if (isNumber(combined[i])) {
      weight += combined[i] * obj[i];
    } else {
      weight += getAlphaIndex(combined[i]) * obj[i];
    }
  }

  if (weight % 2 === 0) {
    return (weight % 89).toString();
  } else {
    let remainder = weight % 89;
    return (89 - remainder).toString();
  }
}

let bankCode = 'AB11'
let accountNumber = "18-7654321";

console.log(checkDetailsAreValid(accountNumber, bankCode))
