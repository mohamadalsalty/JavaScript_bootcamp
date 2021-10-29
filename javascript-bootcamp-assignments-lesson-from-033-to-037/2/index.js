let num1 = 9;
let str = "9";
let str2 = "20";

// Output
// "{num1} Is The Same Value As {str}"
num1 == str ? console.log(`${num1} Is The Same Value As ${str}`) : "false";
// "{num1} Is The Same Value As {str} But Not The Same Type"
num1 == str && num1 !== str ? console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`) : "false";
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
num1 !== str2 && num1 != str2 ? console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`) : "flase";
// "{str} Is The Same Type As {str2} But Not The Same Value"
typeof(str) === typeof(str2) ? console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`) : "false";
