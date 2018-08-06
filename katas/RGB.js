// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
};

function toHex(num) {  
    if(num < 0 ) {return "00";}
    if(num > 255 ) {return "FF";}
    return  ("0"+(num.toString(16))).slice(-2).toUpperCase();
};


console.log(rgb(255, 255, 255));// returns FFFFFF
console.log(rgb(255, 255, 300));// returns FFFFFF
console.log(rgb(0,0,0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3

