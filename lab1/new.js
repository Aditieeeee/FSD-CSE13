// write a func. take no.  btw 0 to 9 and return in words by arrow .





// function numberToWords(num) {
//     const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     if (num >= 0 && num <= 9) {
//         return words[num];
//     } else {
//         return "Number out of range";
//     }
// }

// const numberToWords = (num) => {
//     const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     if (num >= 0 && num <= 9) {
//         return words[num];
//     } else {
//         return "Number out of range";
//     }   
// }
const towords =(digit) => {
    switch(digit){
        case 0:
            return "zero";
        case 1:
            return "one";   
            case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";  
            case 6:
            return "six";   
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
            case 0:
            return "zero";  
            default:
            return "Number out of range";
    }

};
console.log(towords(5));
console.log(towords(10));
console.log(towords(0));



//  Q2 create a func that takes a no. show in words with help of towords func.


