function sumAll ([a,b]) {
  let sum = 0;
  let array = [];
  let min = Math.min([a],[b]);
  let max = Math.max([a],[b]);

  for(let i = min; i <= max; i++){
    array.push(i);
    sum += i;
  }
  console.log(`The sum is: ${sum}`);
  return sum;
}

sumAll([1,4]);