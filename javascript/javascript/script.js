/* 
    number 
        int
        float
    string
        ""  ''
    bool 
        true false 
    
    null 
    undefined
    NaN --> Not a number 
*/
// operators 
/* 
    Arthi
        + - / % ** 
        2 ** 3 = 8
    assigmnet 
        = 
        += -=    ope=
    comparission ope
        == eq to
        ===  strict eq to 
        > < <= >= != 
        !== 

    log
        && || ! 
    bit 
        << >> ~ | & ^ 
 */


// let t = "45";
// let h = "45";

// console.log(typeof t);
// console.log(typeof h);

// let y = "45";
// let g = 45;

// let f = y !== g;
// console.log(f);

// string creation 
let d = "hello world"
let h = 45; 
let name_ = "raj";
let g = d + h + "pop" + "hagsshd" + name
console.log(g);  
// string operatrs 

// template string 
let y = `hello ${name_}, ${h + 2 + 15}`
console.log(y); 
// type converstion 

console.log(Number("85.54"));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));

switch ("asd") {
    case "asd":
        console.log("hello");
        break;
    case "asd":
        console.log("hello");
        break;
    case "asd":
        console.log("hello");
        break;

    default:
        break;
}


let t = (1 == 5) ? "hello" : "wordl";
console.log(t); 








