/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    let first: number = numbers[0];
    let last: number = numbers[numbers.length - 1];
    let newArr: number[] = [first, last];
    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((x) => x * 3);

    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */ // used chatgpt to see what error or value I get when number cant be converted Question
// is asked "if i have Number(str) and str could not be converted to a number what value or error would I get"
export function stringsToIntegers(numbers: string[]): Number[] {
    let value: Number[] = numbers.map((str) => {
        if (isNaN(Number(str))) {
            return 0;
        } else {
            return Number(str);
        }
    });

    return value;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    if (amounts.length === 0) {
        return [];
    }
    let value: number[] = amounts.map((str) => {
        if (str[0] === "$") {
            str = str.slice(1, str.length);
            if (isNaN(Number(str))) {
                return 0;
            }
            return Number(str);
        }
        if (isNaN(Number(str))) {
            return 0;
        } else {
            return Number(str);
        }
    });
    return value;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let upper: string[] = messages.map((str) => {
        if (str.slice(-1) === "!") {
            return str.toUpperCase();
        }
        return str;
    });
    let value: string[] = upper.filter((message) => message.slice(-1) != "?");
    return value;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let value: string[] = words.filter((word) => word.length < 4);
    return value.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    let value: string[] = colors.filter(
        (element) =>
            element === "red" || element === "green" || element === "blue",
    );

    return value.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    if (addends.length === 1) {
        return String(addends[0]) + "=" + String(addends[0]);
    }

    let sum: number = 0;
    addends.forEach((tem) => (sum += tem));
    let finalstring: string = String(sum) + "=";
    addends.forEach((tem) => (finalstring += String(tem) + "+"));
    return finalstring.slice(0, finalstring.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        return [0];
    }
    let sum: number = 0;
    let arr1: number[] = [];
    let interations: number = 0;
    let firstNeg: number = 0;
    values.forEach((value) => {
        if (value >= 0 || firstNeg === 1) {
            interations += 1;
            sum += value;
            arr1 = [...arr1, value];
        }
        if (value < 0 && firstNeg < 1) {
            firstNeg += 1;
            arr1 = [...arr1, value];
            arr1 = [...arr1, sum];
        }
        if (interations === values.length) {
            arr1 = [...arr1, sum];
        }
    });

    return arr1;
}
