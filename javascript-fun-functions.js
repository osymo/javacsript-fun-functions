/*
        //                \\
       //                  \\  
      // Author: Omar DIOP  \\
     //----------------------\\
    //  Helper fun functions  \\
   //--------------------------\\
   \\                          //
    \\    osmdiop@gmail.com   //
     \\  ------------------- //
      \\                    //
       \\                  //
*/


/**
 * A function to generate random numbers untils collision happens.
 * It prints also very generated number.
 * @param {Number} l represents the length(number of digits) of numbers to generate.
 * @returns the number of generated numbers before collision.
 */

function collisionComputer(l) {
    let noCollision = true;
    let collisionValue = '';
    const randomNumbers = [];

    while(noCollision) {
        rn = Number(Math.random().toFixed(l).toString().slice(2));
        if(randomNumbers.includes(rn)) {
            noCollision = false;
            collisionValue = rn;
        }
        else {
            console.log('generating:  ', rn);
            randomNumbers.push(rn);
        }
    }
    console.log('Collision after: ', randomNumbers.length, ' random generations\n Value => ', collisionValue);
}


/**
 * A Function to add padding left to numbers below 10.
 * Numbers above ten are intouched
 * 
 * @example 
 *  padLeft(8, 4, '0') returns 00008
 *  padLeft(3, 2, '#') returns ##3
 * 
 * @param {number} n is the number to add padding left to 
 * @param {number} paddingSize is the size of the paading
 * @param {string} paddingCharacter is the character to use for padding
 *            if not provided, 0 will be used as padding character 
 * @returns given number with padding left in type string
 */

function padLeft(n, paddingSize=1, paddingCharacter='0') {

    return (n < 10 ? paddingCharacter.repeat(paddingSize) : '') + n
}


/**
 * A Function to format number as currency for ease of reading
 * 
 * @example
 *  formatCurrency(1234567890) returns '1 234 567 890 sen' 
 *  formatCurrency(1234567890, '-', 'dollar') returns '1-234-567-890 dollar'
 * 
 * @param {number|string} n respresents number to format as currency
 * @param {string} sep the character to use as separator
 * @param {string} currency the name of the currency. Default: sen
 * @returns a formatted number in type string
 */

 function formatCurrency (n, sep, currency) {
    if(!n) return '0 sen';

    sep = sep || ' ';
    currency = currency || 'sen';
    
    const digits = n.toString().split('');
    const l = digits.length;

    if(l <= 3)
        return n.toString();

    let k = 0;
    let formatted = '';

    while(k < l) {
        formatted+= digits[l-k-1];

        if((k+1) % 3 == 0)
            formatted += sep;
        k++;
    }

    return formatted.split('').reverse().join('') + ' ' + currency;
}