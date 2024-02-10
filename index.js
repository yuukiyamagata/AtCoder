function Main(input) {
  var input = input.split('').sort();
  var charList = {};
  for(var i = 0; i < input.length; i++){
    var char = input[i];
    if(charList[char] === undefined){
      charList[char] = 1;
    }else{
      charList[char]++
    }
  }

  

}

var input = `pseudopseudohypoparathyroidism`;
Main(input);
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));