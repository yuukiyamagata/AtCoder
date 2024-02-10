function Main(input) {
  var input = input.split(' ');
  console.log(input);
  var result = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i] == 1){
      var pow = 2 ** i;
      result += pow;
    }
  }
  console.log(result);
}

var input = `1 0 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 0 0 1 0 0 1 1 1 1 1 1 0 0 0 0 1 0 1 0 1 0 1 1 1 1 0 0 1 1 0 0 0 0 1 0 1 0 1 0 1 0 0 0 0`;
Main(input);
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));