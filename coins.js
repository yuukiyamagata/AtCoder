function Main(input) {
  var input = input.split('\n');
  var A = Number(input[0]);
  var B = Number(input[1]);
  var C = Number(input[2]);
  var X = Number(input[3]);

  var count=0;
  for(var i = 0; i <= A; i++){
    for(var j = 0; j <= B; j++){
      var sum = 500 * i + 100 * j;
      var amount = X - sum;
      if(amount < 0) continue;
      if(amount / 50 <= C){
        count++
      }
    }
  }

  console.log(count);
}

var input = `2
2
2
100`;
Main(input);
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));