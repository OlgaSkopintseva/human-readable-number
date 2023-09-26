const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    let result = "";

    if (number >= 100) {
        result += units[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) result += " ";
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10)];
        if (number % 10 > 0) result += " " + units[number % 10];
    } else if (number > 0) {
        if (number >= 11) {
            result += teens[number % 10];
        } else if (number > 0) {
            result += units[number];
        } else if (number >= 10) {
            result += units[number - 10];
        }
    }

    return result;
};
